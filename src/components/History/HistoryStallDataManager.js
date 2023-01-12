import StallObject from "../../mapObjects/Stall";
import ZoneManager from "../../mapObjects/ZoneManager";
import Zone from "../../mapObjects/Zone";
import Production from "../../mapObjects/Production";

class HistoryStallDataManager {
    constructor(mapState) {
        this._stallData = {} // dict
        this._selectedStalls = {} // dict
        this._productions = []
        this._isAssignmentMode = false
        this.importRawStallData(mapState.stalls)
        this.importRawProductionData(mapState.productions)
        this._refresh = null
    }

    importRawStallData(stallData) {
        this.stallData = this.createStalls(stallData)
    }

    importRawProductionData(productionData) {
        this.productions = this.createProductions(productionData)
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
    }

    importState(data) {
        this.importRawStallData(data.stalls)
        this.importRawProductionData(data.productions)
        this.updateStallStatus()
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

    sanitizeAreas(areasToSanitize) {
        let oldAreas = areasToSanitize
        let areas = []

        if (oldAreas !== undefined) {
            if (oldAreas.constructor === Object) {
                oldAreas = Object.values(oldAreas)
            }
            oldAreas.forEach((area) => {
                if (area !== null) {
                    areas.push(area)
                }
            })
        }
        return areas
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
                            zoneData.areas = this.sanitizeAreas(zoneData._areas)
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

    get productions() {
        return this._productions;
    }

    set productions(value) {
        this._productions = value;
    }

    get refresh() {
        return this._refresh;
    }

    set refresh(value) {
        this._refresh = value;
    }
}

export default HistoryStallDataManager