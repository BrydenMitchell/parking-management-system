import React from 'react';
import {ListItemButton, ListItemText, Typography} from "@mui/material";
import {theme} from "../../../Theme";
import {formatDate} from "../../../utils";

function SavedMapListItem(props) {
    const selectedStyle = {
        backgroundColor: theme.palette.primary.dark,
        color: "#ffffff",
        padding: "5px 10px 5px 10px",
        borderRadius: "10px"

    }

    const noSelectedStyle = {
        padding: "5px 10px 5px 10px",
    }

    const handleClick = () => {
        props.setMapID(props.mapKey)
        props.refresh()
    }

    const mapIsSelected = () => {
        return props.mapKey === props.selectedMapID;

    }

    return (
        <ListItemButton onClick={handleClick}>
            {mapIsSelected() ?
                <ListItemText
                    style={selectedStyle}
                    primary={props.mapKey}
                    secondary={<Typography style={{color: "#ffffff", fontSize: 12}}>{formatDate(props.map.date, true)}</Typography>}/>
                : <ListItemText
                    style={noSelectedStyle}
                    primary={props.mapKey}
                    secondary={<Typography style={{fontSize: 12}}>{formatDate(props.map.date, true)}</Typography>} />
            }
        </ListItemButton>
    );
}

export default SavedMapListItem;