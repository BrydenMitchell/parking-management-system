import React from 'react';
import {useState} from "react";
import ZoneListItem from "./ZoneListItem";
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

function ProductionListItem(props) {
    const [open, setOpen] = useState(false)

    const handleSelection = (zone) => {
        props.callback({
            production: props.production,
            zone: zone
        })
    }

    const handleClick = () => {
        setOpen(!open)
    }

    const production = props.production

    const createListItemButton = (zone) => {
        return (
            <ZoneListItem
                key={zone.id}
                zone={zone}
                callback={handleSelection}
            />
        )
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={production.name} />
                { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={open} timeout={"auto"} unmountOnExit>
                <List component={"div"} disablePadding>
                    {production.zoneManager.zones.map((zone) => {
                        return createListItemButton(zone)
                    })}
                </List>
            </Collapse>
        </div>
    );
}

export default ProductionListItem;