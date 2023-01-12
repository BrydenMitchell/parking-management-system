class Stall {
    constructor(id, name, coords, isEV, isDisability, isMC, isSelected, color) {
        this.id = id;
        this.name = name;
        this.isEV = isEV;
        this.isDisability = isDisability;
        this.isMC = isMC;
        this.coords = coords
        this.isSelected = isSelected;
        this.color = color;
        this._assignment = {
            production: null,
            zone: null,
            isAssigned: false
        }
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

    get isEV() {
        return this._isEV;
    }

    set isEV(value) {
        this._isEV = value === true;
    }

    get isDisability() {
        return this._isDisability;
    }

    set isDisability(value) {
        this._isDisability = value === true;
    }

    get isMC() {
        return this._isMC;
    }

    set isMC(value) {
        this._isMC = value === true;
    }

    get coords() {
        return this._coords;
    }

    set coords(value) {
        this._coords = value;
    }

    get isSelected() {
        return this._isSelected;
    }

    set isSelected(value) {
        this._isSelected = value === true;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        if (value === undefined) {
            this._color = "grey";
        } else {
            this._color = value
        }
    }

    get assignment() {
        return this._assignment;
    }

    set assignment(value) {
        this._assignment["production"] = value["production"];
        this._assignment["zone"] = value["zone"]
        this.color = value["production"].color
        this._assignment.isAssigned = true
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            isEV: this.isEV,
            isDisability: this.isDisability,
            isMC: this.isMC,
            coords: this.coords,
            building: this.building,
            isSelected: this.isSelected,
            color: this.color
        }
    }
}

export default Stall