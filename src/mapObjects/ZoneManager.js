class ZoneManager {
    constructor(zones) {
        this._zones = zones
        this._colors = []
        this.updateStallCount()
        this.updateLastModified()
    }

    setAllZonesIsDisplaying(value) {
        this.zones.forEach((zone) => {
            zone.isDisplaying = value
        })
    }

    getZonesDisplayingCount() {
        let count = 0
        this.zones.forEach((zone) => {
            if (zone.isDisplaying) {
                count++
            }
        })
        return count
    }

    updateStallCount() {
        let count = 0
        this.zones.forEach((zone) => {
            count+= zone.stallCount
        })
        this._stallCount = count
    }

    updateLastModified() {
        this.lastModified = Date.now()
    }

    addZone(zone) {
        this.zones.push(zone)
    }

    removeZone(id) {
        this.zones = this.zones.filter((zone) => {
            return zone.id !== id
        })
    }

    fetchColors() {
        this.colors = []
        this.zones.forEach((zone) => {
            if (!this.colors.includes(zone.color)) {
                this.colors.push(zone.color)
            }
        })
    }

    removeAllStalls() {
        this.zones.forEach((zone) => {
            zone.stallIDs = []
        })
    }

    setZonesIsDisplaying(value) {
        this.zones.forEach((zone) => {
            zone.isDisplaying = value
        })
    }

    get zones() {
        return this._zones;
    }

    set zones(value) {
        this._zones = value;
    }

    get colors() {
        return this._colors;
    }

    set colors(value) {
        return this._colors = value
    }

    get stallCount() {
        this.updateStallCount()
        return this._stallCount;
    }

    set stallCount(value) {
        this._stallCount = value;
    }

    get lastModified() {
        return this._lastModified;
    }

    set lastModified(value) {
        this._lastModified = value;
    }

}

export default ZoneManager