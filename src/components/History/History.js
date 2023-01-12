import React, {useState} from 'react';
import Navigation from "../Navigation/Navigation";
import HistoryDrawer from "./HistoryDrawer/HistoryDrawer";
import InteractiveMapViewer from "./InteractiveMapViewer/InteractiveMapViewer";
import HistoryStallDataManager from "./HistoryStallDataManager";

function History(props) {
    const [count, setCount] = useState(0)
    const [mapID, setMapID] = useState(null)
    const refresh = () => {
        setCount(count + 1)
        console.log("refresh count: " + count)
        console.log("mapID: " + mapID)
    }
    const mainContainerStyle = {
        // minWidth: "calc(100vw - 300)",
        // minHeight: "calc(100vh - 75)",
        width: "100%",
        height: "100%",
        backgroundColor: "pink",
        flexGrow: 2,
        // display: "inline-block",
    }
    const screenContainerStyle = {
        flexGrow: 1,
        flexBasis: "100%",
        width: "100%",
        height: "100%",
        display: "flex",
        alignSelf: "stretch",
    }

    let stallDataManagerToUse
    if (mapID !== null) {
        let exportedData = props.stallDataManager.exportSavedMapState(mapID)
        let historyStallDataManager = new HistoryStallDataManager(exportedData)
        console.log("test")
        stallDataManagerToUse = historyStallDataManager
        historyStallDataManager.updateStallStatus()
        stallDataManagerToUse.refresh = refresh
    } else {
        stallDataManagerToUse = props.stallDataManager
        stallDataManagerToUse.refreshHomeCallback = refresh
    }

    const loadSavedMap = () => {
        props.stallDataManager.loadSavedMap(mapID)
    }

    const deleteMap = () => {
        props.stallDataManager.deleteSavedMap(mapID)
    }

    return (
        <div style={screenContainerStyle}>
            <Navigation index={2} />
            <div style={mainContainerStyle}>
                <InteractiveMapViewer
                    stallDataManager={stallDataManagerToUse}
                    mapID={mapID}
                    setMapID={setMapID}
                    refresh={refresh}
                    loadStavedMap={loadSavedMap}
                    deleteMap={deleteMap}
                />
                <HistoryDrawer
                    stallDataManager={props.stallDataManager}
                    mapID={mapID}
                    setMapID={setMapID}
                    refresh={refresh}
                />
            </div>
        </div>
    );
}

export default History;