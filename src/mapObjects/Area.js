class Area {
    constructor(id, name, coords, shapeType, center) {
        this._assignment = {
            production: null,
            zone: null,
            isAssigned: false
        }
        this._id = id;
        this._name = name;
        this._coords = coords;
        this._shapeType = shapeType;
        this._center = center;
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

    get coords() {
        return this._coords;
    }

    set coords(value) {
        this._coords = value;
    }

    get assignment() {
        return this._assignment;
    }

    set assignment(value) {
        this._assignment = value;
    }

    get shapeType() {
        return this._shapeType;
    }

    set shapeType(value) {
        this._shapeType = value;
    }

    get center() {
        return this._center;
    }

    set center(value) {
        this._center = value;
    }
}

export default Area