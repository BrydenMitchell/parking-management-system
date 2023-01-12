class MapState {
    constructor(id, productions) {
        this._id = id
        this._productions = productions
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get productions() {
        return this._productions;
    }

    set productions(value) {
        this._productions = value;
    }

    addProduction(production) {
        this.productions[production.id] = production
    }

    removeProduction(id) {
        delete this.productions[id]
    }
}

export default MapState