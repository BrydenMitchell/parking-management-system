import FirebaseManager from "../firebase/FirebaseManager";
import StallObject from "../mapObjects/Stall";
import ZoneManager from "../mapObjects/ZoneManager";
import Zone from "../mapObjects/Zone";
import Production from "../mapObjects/Production";

class StallDataManager {
    constructor(isPrimary) {
        this._fbManager = null
        this._stallData = {} // dict
        this._selectedStalls = {} // dict
        this._productions = []
        this._savedMaps = {}
        this._isAssignmentMode = false
        this._refreshHomeCallback = null
        this.awaitingHomeRefresh = false
        this._productionsDisplaying = 0

        if (isPrimary) {
            this.fbManager = new FirebaseManager(this)

            this.getAllData().then(() => {
                console.log("getAllDataPromise")
            })
        } else {
            this.fbManager = null
        }
    }

    refreshHome() {
        this.updateStallStatus()
        this.updateProductionsDisplaying()
        if (this._refreshHomeCallback !== null) {
            this._refreshHomeCallback()
            this.awaitingHomeRefresh = false
        } else {
            this.awaitingHomeRefresh = true
        }
    }

    async getAllData() {
        try {
            await this.getStallData()
            await this.getProductionData()
            await this.getSavedMapsData()
            console.log("getAllDataComplete")
            return true
        } catch (err) {
            console.log(err.message)
            return false
        }
    }

    getStallData() {
        this.fbManager.getStalls(this)
        console.log("getStallData")
    }

    getProductionData() {
        this.fbManager.getProductions(this)
    }

    getSavedMapsData() {
        this.fbManager.getSavedMaps(this)
        console.log("getSavedMaps")
    }

    importRawStallData(stallData) {
        this.stallData = this.createStalls(stallData)
    }

    importRawProductionData(productionData) {
        this.productions = this.createProductions(productionData)
    }

    loadSavedMap(mapID) {
        this.importState(this.exportSavedMapState(mapID))
        this.updateStallStatus()
        this.pushAllData()
    }

    deleteSavedMap(mapID) {
        this.fbManager.deleteSavedMap(mapID)
        delete this.savedMaps[mapID]
    }

    assignStalls(production, zone) {
        Object.values(this.selectedStalls).forEach((stall) => {
            if (stall.assignment.isAssigned) {
                let index = stall.assignment.zone.stallIDs.indexOf(stall.id)
                if (index > -1) {
                    stall.assignment.zone.stallIDs.splice(index, 1)
                }
                else {
                    console.log("ERROR: stall not found when removing from zone")
                }
            }
            stall.isSelected = false
            stall.assignment.isAssigned = true
            stall.assignment.zone = zone
            stall.assignment.production = production
            if (zone.stallIDs.filter((id) => {
                return id === stall.id
            }).length > 0) {
                console.log("stall is already assigned to same zone")
            } else {
                zone.stallIDs.push(stall.id)
                stall.color = zone.color
            }
        })
        this.selectedStalls = {}
        this.isAssignmentMode = false
        this.pushAllData()
        this.refreshHome()
    }

    pushAllData() {
        this.fbManager.pushStalls(this.stallData)
        this.fbManager.pushProductions(this.productions)
        this.refreshHome()
    }

    pushProductions() {
        this.fbManager.pushProductions(this.productions)
    }

    updateStallStatus() {
        this._productions.filter((production) => {
            return production.isActive
        }).forEach((production) => {
            production.zoneManager.zones.forEach((zone) => {
                zone.production = production.id
                zone.stallIDs.forEach((stallID) => {
                    try {
                        this.stallData[stallID].assignment = {
                            production: production,
                            zone: zone
                        }
                        this.stallData[stallID].color = zone.color
                    } catch (err) {
                        console.log(err.message + stallID)
                    }
                })
            })
        })
    }

    addSelectedStall(stall) {
        this.selectedStalls[stall.id] = stall
    }

    removeSelectedStall(id) {
        // console.log("removing: " + id)
        delete this.selectedStalls[id]
    }

    getStallByID(id) {
        return this._stallData[id]
    }

    addProduction(value) {
        this.productions.push(value)
    }

    getProductionByID(value) {
        return this.productions.find(production => production.id === value)
    }

    unassignStalls() {
        Object.entries(this.selectedStalls).forEach(([, stall]) => {
            try {
                if (stall.assignment.isAssigned) {
                    stall.assignment.isAssigned = false
                    stall.assignment.zone.removeStallByID(stall.id)
                    stall.assignment.production = null
                } else {
                    console.log("stall ID: " + stall.id + " is already unassigned")
                }
                stall.isSelected = false
            } catch (err) {
                console.log(err.message)
            }
        })
        this.selectedStalls = {}
        this.pushAllData()
    }

    saveMap(name) {
        let data = this.exportState()
        this.fbManager.saveCurrentState(name, data)
    }

    exportState() {
        let state = {}
        state.stalls = this.stallData
        state.productions = this.productions
        state.selectedStalls = this.selectedStalls
        state.date = new Date()
        return JSON.parse(JSON.stringify(state))
    }

    exportSavedMapState(mapID) {
        let state = {}
        state.stalls = this.savedMaps[mapID].stalls
        state.productions = this.savedMaps[mapID].productions
        return JSON.parse(JSON.stringify(state))
    }

    importState(data) {
        this.importRawStallData(data.stalls)
        this.importRawProductionData(data.productions)
        this.updateStallStatus()
    }

    deleteZone(zone) {
        this.fbManager.deleteZone(zone)
    }

    convertLegacyStall(stall) {
        stall.name = stall.fields.name
        stall.isElectric = stall.fields.isElectric
        stall.isDisabled = stall.fields.isDisabled
        stall.isMC = stall.fields.isMC
    }

    /**
     * Creates Stall objects from stallData
     * @param stallData
     * @returns Array of Stall objects
     */
    createStalls(stallData) {
        let stalls = {}
        if (!stallData)
            return stalls;
        Object.entries(stallData).forEach(([key, stall]) => {
            try {
                if (stall === undefined) {
                    this.convertLegacyStall()
                }
            } catch (err) {
                console.log(err.message)
            }
            stalls[key] = new StallObject(
                key,
                stall.name,
                stall.coords,
                stall.isElectric,
                stall.isDisabled,
                stall.isMC,
                false,
                null
            )
        })
        return stalls
    }

    createProductions(productionsData) {
        let productions = []
        if (productionsData !== null && productionsData !== undefined) {
            productionsData.forEach((productionData) => {
                let zoneManager = new ZoneManager([])
                productionData["zoneManager"] = productionData["_zoneManager"]
                productionData["zoneManager"].zones = productionData["_zoneManager"]._zones
                productionData.id = productionData._id
                productionData.name = productionData._name
                productionData.description = productionData._description
                productionData.isActive = productionData._isActive
                productionData.isSelected = productionData._isSelected
                if (productionData["zoneManager"].zones !== null && productionData["zoneManager"].zones !== undefined) {
                    if (productionData["zoneManager"].zones.length > 0) {
                        productionData["zoneManager"].zones.forEach((zoneData) => {
                            zoneData.areas = zoneData._areas
                            zoneData.stallIDs = zoneData._stallIDs
                            zoneData.name = zoneData._name
                            zoneData.color = zoneData._color
                            zoneData.isDisplaying = zoneData._isDisplaying
                            let uniqueStallIDs = [...new Set(zoneData.stallIDs)]
                            let zone = new Zone(
                                zoneManager.zones.length,
                                zoneData.name,
                                uniqueStallIDs,
                                zoneData.color,
                                zoneData.isDisplaying,
                                zoneData.areas
                            )
                            zoneManager.addZone(zone)
                        })
                    }
                }
                let production = new Production(
                    productionData.id,
                    productionData.name,
                    productionData.description,
                    zoneManager,
                    productionData.isActive,
                    productionData.isSelected
                )
                productions.push(production)
            })
        }
        return productions
    }

    isAProductionDisplaying() {
        this.updateProductionsDisplaying()
        return this.productionsDisplaying > 0;

    }

    updateProductionsDisplaying() {
        let count = 0
        this.productions.forEach((production) => {
            if (production.isDisplaying) {
                count++
            }
        })
        this.productionsDisplaying = count
    }

    /**
     * Returns stall data as a dictionary
     * {
     *     id: Stall,
     * }
     * @returns dict of stalls
     */
    get stallData() {
        return this._stallData;
    }

    /**
     * Assigns value to stallData
     * @param value stallData as a dict of Stalls
     */
    set stallData(value) {
        this._stallData = value;
    }

    get selectedStalls() {
        return this._selectedStalls;
    }

    set selectedStalls(value) {
        this._selectedStalls = value;
    }

    get isAssignmentMode() {
        return this._isAssignmentMode;
    }

    set isAssignmentMode(value) {
        this._isAssignmentMode = value;
    }

    get productions() {
        return this._productions;
    }

    set productions(value) {
        this._productions = value;
    }

    get fbManager() {
        return this._fbManager;
    }

    set fbManager(value) {
        this._fbManager = value;
    }

    set refreshHomeCallback(value) {
        this._refreshHomeCallback = value;
        if (this.awaitingHomeRefresh) {
            this.refreshHome()
        }
    }

    get savedMaps() {
        return this._savedMaps;
    }

    set savedMaps(value) {
        this._savedMaps = value;
    }

    get productionsDisplaying() {
        this.updateProductionsDisplaying()
        return this._productionsDisplaying;
    }

    set productionsDisplaying(value) {
        this._productionsDisplaying = value;
    }
}

export default StallDataManager