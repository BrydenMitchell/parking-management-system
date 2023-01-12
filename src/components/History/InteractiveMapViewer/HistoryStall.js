import React from 'react';
import {Rectangle} from "react-leaflet";
import StallToolTip from "../../HomeScreen/InteractiveMap/OverlayLayers/Stalls/StallToolTip";

function HistoryStall(props) {
    // const [state, setState] = useState({
    //     stall: props.stall,
    //     stallDataManager: props.stallDataManager,
    // })

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
                   pathOptions={createRectanglePathOptions(props.stall, props.showAll)}
        >
            <StallToolTip stall={props.stall} />
        </Rectangle>)
}

export default HistoryStall;