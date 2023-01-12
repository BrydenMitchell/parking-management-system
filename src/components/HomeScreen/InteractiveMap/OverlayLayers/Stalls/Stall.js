import {Rectangle} from "react-leaflet";
import {useState} from "react";
import StallToolTip from "./StallToolTip";

function Stall(props) {
    const [state, setState] = useState({
        stall: props.stall,
        stallDataManager: props.stallDataManager,
    })

    function handleClick() {
        if (!state.stallDataManager.isAssignmentMode) {
            let newIsSelectedState = !state.stall.isSelected

            if (newIsSelectedState) {
                state.stallDataManager.addSelectedStall(state.stall)
            } else {
                state.stallDataManager.removeSelectedStall(state.stall.id)
            }

            let newStall = state.stall
            newStall.isSelected = newIsSelectedState
            setState({
                ...state,
                stall: newStall
            })

            // console.log(state.stallDataManager.selectedStalls)
        }
    }

    function getStallColor(stall, forceShow) {
        if (stall.assignment.isAssigned && (stall.assignment.zone.isDisplaying || forceShow)) {
            return stall.assignment.zone.color
        } else {
            return "#aeadab"
        }
    }

    function createRectanglePathOptions(stall, forceShow) {
        let fillColor = getStallColor(stall, forceShow)
        let stroke = 0
        let fillOpacity = 0.35
        let color = "blue"

        if (stall.assignment.isAssigned) {
            fillOpacity = 0.85
            color = stall.assignment.zone.color
        }

        if (stall.isSelected) {
            stroke = 1
            fillOpacity = .9
            color = "black"
            fillColor = "white"
        }

        return {
            fillColor: fillColor,
            color: color,
            stroke: stroke,
            fillOpacity: fillOpacity
        }
    }

    return (
        <Rectangle bounds={props.stall.coords}
                   pathOptions={createRectanglePathOptions(state.stall, props.showAll)}
                   eventHandlers={{
                       click: (e) => {
                           if (props.isInteractive) {
                               handleClick(e)
                               props.overlayLayersState()
                           }
                       }
                   }}
        >
            <StallToolTip stall={props.stall} />
        </Rectangle>)
}

export default Stall