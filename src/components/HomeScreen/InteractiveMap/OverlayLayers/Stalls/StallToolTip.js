import React from 'react';
import {Tooltip} from "react-leaflet";

function StallToolTip(props) {
    const pStyle = {
        textAlign: "left",
        margin: 0,
        padding: 0,
    }
    if (props.stall.assignment.isAssigned) {
        return(
            <Tooltip style={pStyle} direction={"top"} opacity={0.95}>
                <p style={pStyle}>Stall: {props.stall.name.toUpperCase()}</p>
                <p style={pStyle}>Assigned to: {props.stall.assignment.production.name}</p>
                <p style={pStyle}>Zone: {props.stall.assignment.zone.name}</p>
            </Tooltip>
        )
    }
    return (
        <Tooltip direction={"top"} opacity={0.95}>
            <p style={pStyle}>Stall: {props.stall.name.toUpperCase()}</p>
        </Tooltip>
    )
}

export default StallToolTip;