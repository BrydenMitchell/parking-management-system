import React, {useState} from 'react';
import {Chip, ListItemButton, ListItemText} from "@mui/material";

function ZoneListItem(props) {
    let [state, ] = useState({
        zone: props.zone,
        production: props.production,
        stallDataManager: props.stallDataManager
    })

    const assignStalls = () => {
        state.stallDataManager.assignStalls(state.production, state.zone)
        props.setAssignMode(false)
        state.stallDataManager.refreshHome()
    }

    return (
        <ListItemButton onClick={assignStalls} sx={{pl: 4}}>
            <Chip style={{
                backgroundColor: state.zone.color,
                opacity: 1,
                marginRight: "10px",
                width: "30px"
            }} />
            <ListItemText primary={state.zone.name}/>
        </ListItemButton>
    );
}

export default ZoneListItem;