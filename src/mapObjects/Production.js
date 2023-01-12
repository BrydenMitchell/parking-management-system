class Production {
    constructor(id, name, description, zoneManager, isActive, selected, isDisplaying) {
        this._id = id
        this._name = name
        this._description = description
        this.updateLastModified()
        this._zoneManager = zoneManager
        this._isActive = isActive
        this._isSelected = selected
        this._isDisplaying = isDisplaying
    }

    getZonesDisplayingCount() {
        return this.zoneManager.getZonesDisplayingCount()
    }

    stallCount = () => {
        return this.zoneManager.stallCount
    }

    updateLastModified() {
        this.lastModified = Date.now()
    }

    setAllZonesIsDisplaying(value) {
        this.zoneManager.setZonesIsDisplaying(value)
    }

    updateIsDisplaying() {
        this._isDisplaying = this.getZonesDisplayingCount() > 0;
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

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get lastModified() {
        return this._lastModified;
    }

    set lastModified(value) {
        this._lastModified = value;
    }

    get zoneManager() {
        return this._zoneManager;
    }

    set zoneManager(value) {
        this._zoneManager = value;
    }

    get isActive() {
        return this._isActive;
    }

    set isActive(value) {
        if (value === false) {
            this.zoneManager.removeAllStalls()
        }
        this._isActive = value;
    }

    get isDisplaying() {
        this.updateIsDisplaying()
        return this._isDisplaying
    }

    set isDisplaying(value) {
        this._isDisplaying = value
    }

    get isSelected() {
        return this._isSelected;
    }

    set isSelected(value) {
        this._isSelected = value;
    }
}

export default Production