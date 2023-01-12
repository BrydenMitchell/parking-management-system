import React from "react";
import {Chip, IconButton, ListItem, ListItemText, Popover} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditZoneModal from "./EditZoneItemComponents/EditZoneModal";

function ZoneItem(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        props.selectedProduction.zoneManager.fetchColors();
    };

    const handleClose = () => {
        setAnchorEl(null);
        props.refresh()
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const chipStyle = {
        backgroundColor: props.zone.color,
        width: "30px"
    }
    const nameStyle = {
        marginLeft: "10px"
    }

    if (props.isEdit) {
        return (
            <ListItem secondaryAction={
                <div>
                    <IconButton edge={"end"} onClick={handleClick}>
                        <MoreVertIcon aria-describedby={id} />
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        <EditZoneModal
                            open={open}
                            stallDataManager={props.stallDataManager}
                            selectedProduction={props.selectedProduction}
                            zone={props.zone}
                            handleClose={handleClose}
                            setChangesMade={props.setChangesMade}
                        />
                    </Popover>
                </div>
            }>
                <Chip style={chipStyle} />
                <ListItemText primary={props.zone.name + " (" + props.zone.stallCount + " stalls)"} style={nameStyle} />
            </ListItem>
        )
    } else {
        return (
            <ListItem>
                <Chip style={chipStyle} />
                <ListItemText primary={props.zone.name + " (" + props.zone.stallCount + " stalls)"} style={nameStyle} />
            </ListItem>
        )
    }
}

export default ZoneItem
