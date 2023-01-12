import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ZoneListItem from "./ZoneListItem";

function ProductionListItem(props) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const production = props.production

    const createListItemButton = (zone) => {
        return (
            <ZoneListItem
                key={zone.id}
                stallDataManager={props.stallDataManger}
                zone={zone}
                production={production}
                setAssignMode={props.setAssignMode}
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