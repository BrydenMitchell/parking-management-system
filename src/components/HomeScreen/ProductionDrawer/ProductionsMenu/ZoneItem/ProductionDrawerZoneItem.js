import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Chip} from "@mui/material";
import ZoneCheckbox from "./ZoneCheckbox";

function ProductionDrawerZoneItem(props) {
    const noVertPadding = {
        paddingTop: 0,
        paddingBottom: 0,
    }

    return (
        <ListItem key={props.zone.name}>
            <ListItemButton role={undefined} dense style={noVertPadding}>
                <ListItemIcon>
                    <ZoneCheckbox refresh={props.refresh} zone={props.zone} />
                </ListItemIcon>
                <Chip label={props.zone.name + " (" + props.zone.stallCount + " stalls) "} color={"primary"} style={{backgroundColor: props.zone.color}} />
            </ListItemButton>
        </ListItem>
    );
}

export default ProductionDrawerZoneItem;