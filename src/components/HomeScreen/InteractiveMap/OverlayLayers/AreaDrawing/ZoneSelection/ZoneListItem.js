import React from 'react';
import {Chip, ListItemButton, ListItemText} from "@mui/material";

function ZoneListItem(props) {
    const handleSelection = () => {
        props.callback(props.zone)
    }

    return (
        <ListItemButton onClick={handleSelection} sx={{pl: 4}}>
            <Chip style={{
                backgroundColor: props.zone.color,
                opacity: 1,
                marginRight: "10px",
                width: "30px"
            }} />
            <ListItemText primary={props.zone.name}/>
        </ListItemButton>
    );
}

export default ZoneListItem;