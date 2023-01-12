import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, onValue, remove} from "firebase/database"
import firebaseConfigFile from "./firebaseConfig";

class FirebaseManager {
    constructor(stallDataManager) {
        this.stallDataManager = stallDataManager
        this.firebaseConfig = firebaseConfigFile
        this.firebase = initializeApp(this.firebaseConfig)
        // this.analytics = getAnalytics(this.firebase)
        this.db = getDatabase()
    }

    pushStalls(stalls) {
        set(ref(this.db, "current-state/stalls"), JSON.parse(JSON.stringify(stalls))).then(() => {
            console.log("stalls pushed")
        })
    }

    pushProductions(productions) {
        set(ref(this.db, "current-state/productions"), JSON.parse(JSON.stringify(productions))).then(() => {
            console.log("productions pushed")
        })
    }

    getStalls(stallDataManager) {
        const currentStateRef = ref(this.db, "current-state/stalls")
        onValue(currentStateRef, (snapshot) => {
            let stalls = snapshot.val()
            stallDataManager.importRawStallData(stalls)
            stallDataManager.refreshHome()
            console.log("stall data read")
        })
    }

    getProductions(stallDataManager) {
        const currentStateRef = ref(this.db, "current-state/productions")
        onValue(currentStateRef, (snapshot) => {
            let productions = snapshot.val()
            stallDataManager.importRawProductionData(productions)
            stallDataManager.refreshHome()
            console.log("production data read")
        })
        // get(child(ref(this.db), "current-state/productions")).then((snapshot) => {
        //
        // })
    }

    saveCurrentState(name, data) {
        set(ref(this.db, "saved-maps/" + name), data).then(() => {
            console.log("state saved")
        })
    }

    getSavedMaps(stallDataManager) {
        const savedMapsRef = ref(this.db, "saved-maps/")
        onValue(savedMapsRef, (snapshot) => {
            stallDataManager.savedMaps = snapshot.val()
            stallDataManager.refreshHome()
            console.log("saved maps data read")
        })
    }

    deleteSavedMap(mapID) {
        remove(ref(this.db, "saved-maps/" + mapID)).then(() => {
            console.log("map deleted from firebase")
        })
    }

    deleteZone(zone) {
        remove(ref(this.db, "current-state/productions/" + zone.productionID + "/_zoneManager/_zones/")).then(() => {
            console.log("tried")
        })
    }
}

export default FirebaseManager