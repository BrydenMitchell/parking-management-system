class Zone {
    constructor(id, name, stallIDs, color, isDisplaying, areas = []) {
        this._id = id
        this._name = name
        this.stallIDs = stallIDs
        this._color = color;
        this._isDisplaying = isDisplaying
        this._stallCount = 0
        this._productionID = null
        this._areas = areas
        let tempAreas = [];
        if (Array.isArray(areas)) {
            tempAreas = areas.map((area)=>{
                return {
                    ...area,
                    areaId: area.areaId || parseInt(Math.random() * 100000000000)
                }
            });
        }
        else {
            Object.keys(areas).forEach(function(key) {
                const area = areas[key]
                const areaWithAreaId = {
                    ...area,
                    areaId: area.areaId || parseInt(Math.random() * 100000000000)
                }
                tempAreas.push(areaWithAreaId)
            })
        }
        this._areas = tempAreas;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get stallCount() {
        this.updateStallCount()
        return this._stallCount;
    }

    set stallCount(value) {
        this._stallCount = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get stallIDs() {
        return this._stallIDs;
    }

    set stallIDs(value) {
        if (value === undefined) {
            this._stallIDs = []
        } else {
            this._stallIDs = value;
        }
    }

    get isDisplaying() {
        return this._isDisplaying;
    }

    set isDisplaying(value) {
        this._isDisplaying = value;
    }

    get productionID() {
        return this._productionID;
    }

    set productionID(value) {
        this._productionID = value;
    }

    get areas() {
        return this._areas;
    }

    set areas(value) {
        this._areas = value;
    }

    updateStallCount() {
        if (this.stallIDs === undefined) {
            console.log("stallIDs not defined: " + this.toString())
            return 0
        }
        return this.stallCount = this.stallIDs.length
    }

    removeStallByID(value) {
        this.stallIDs = this.stallIDs.filter((stallID) => {
            return stallID !== value
        })
    }

    // todo: test loading saved database
    addArea(value) {
        value.areaId = parseInt(Math.random() * 100000000000)
        this.areas.push({...value})
    }

    removeArea(areaId) {
        this.areas = this.areas.filter(area => area.areaId !== areaId)
    }

}

export default Zone