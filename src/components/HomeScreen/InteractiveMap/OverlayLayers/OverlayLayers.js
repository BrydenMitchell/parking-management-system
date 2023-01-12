import SelectorCard from "./SelectionCard/SelectorCard";
import React, {useEffect, useState} from "react";
import CreateAllStallComponents from "./Stalls/CreateAllStallComponents";
import CreateAllAreaComponents from "./AreaDrawing/CreateAllAreaComponents";
import AreaDrawing from "./AreaDrawing/AreaDrawing";

function OverlayLayers(props) {
    let [state, updateState] = useState(0)

    const refresh = () => {
        updateState(state + 1)
    }

    let stallDataManager = props.stallDataManager

    useEffect(() => {
        stallDataManager.updateStallStatus()
    })

    return(
        <div>
            <CreateAllStallComponents
                stallDataManager={stallDataManager}
                overlayLayerState={refresh}
                showAll={false}
            />
            <CreateAllAreaComponents
                stallDataManager={stallDataManager}
                overLayerRefresh={refresh}
                showAll={false}
                isInteractive={true}
            />
            <AreaDrawing stallDataManager={stallDataManager} overLayerRefresh={refresh}/>
            <SelectorCard stallDataManager={stallDataManager} />
        </div>
    )
}

export default OverlayLayers