import Stall from "./Stall";
import React from "react";

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
        <Stall stall={stall}
               stallDataManager={stallDataManager}
               key={stall.id}
               overlayLayersState={overlayLayersState}
               isInteractive={isInteractive}
               showAll={showAll}
        />
    )
}

/**
 * Creates a div containing all the stalls provided in props
 * @param props
 * @props stallData dict containing stall data
 * @returns {JSX.Element}
 */
function CreateAllStallComponents(props) {
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

export default CreateAllStallComponents