import React from 'react';
import HistoryStall from "./HistoryStall";

/**
 * Creates a Stall component from a stall
 * @param stallDataManager
 * @param stall
 * @param overlayLayersState
 * @param isInteractive
 * @param showAll
 * @returns Stall component
 */
function stallComponentCreator(stallDataManager, stall, overlayLayersState, isInteractive, showAll) {
    return (
        <HistoryStall stall={stall}
               stallDataManager={stallDataManager}
               key={stall.id}
               overlayLayersState={overlayLayersState}
               isInteractive={isInteractive}
               showAll={showAll}
        />
    )
}

function HistoryCreateAllStallComponents(props) {
    let isInteractive = true

    if (props.isInteractive === false) {
        isInteractive = false
    }

    return (
        <div>
            {Object.values(props.stallDataManager.stallData).map((stall) => {
                return stallComponentCreator(props.stallDataManager,
                    stall,
                    props.overlayLayerState,
                    isInteractive,
                    props.showAll)
            })}
        </div>
    )
}

export default HistoryCreateAllStallComponents;