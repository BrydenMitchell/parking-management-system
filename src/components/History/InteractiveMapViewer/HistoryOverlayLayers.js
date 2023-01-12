import React, {useState} from "react";
import HistoryCreateAllStallComponents from "./HistoryCreateAllStallComponents";
import CreateAllAreaComponents from "../../HomeScreen/InteractiveMap/OverlayLayers/AreaDrawing/CreateAllAreaComponents";

function HistoryOverlayLayers(props) {
    const [renderCount, setRenderCount] = useState()
    const refreshOverlayLayer = () => {
        setRenderCount(renderCount + 1)
    }

    return(
        <div>
            <HistoryCreateAllStallComponents
                stallDataManager={props.stallDataManager}
                overlayLayerState={props.refresh}
                showAll={true}
            />
            <CreateAllAreaComponents
                stallDataManager={props.stallDataManager}
                overlayLayerRefresh={refreshOverlayLayer}
                showAll={true}
                isInteractive={false}
            />
        </div>
    )
}

export default HistoryOverlayLayers