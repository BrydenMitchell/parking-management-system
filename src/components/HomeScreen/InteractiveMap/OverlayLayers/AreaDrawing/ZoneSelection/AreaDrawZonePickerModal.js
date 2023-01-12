import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import ProductionZoneList from "./ProductionZoneList";
import ZoneNameForm from "../ZoneNameForm";

function AreaDrawZonePickerModal(props) {
    const [zoneIsSelected, setZoneIsSelected] = useState(false)
    const [, setName] = useState("")
    const [zone, setZone] = useState(null)
    const [production, setProduction] = useState(null)

    const handleZoneSelected = (value) => {
        setZoneIsSelected(true)
        setZone(value.zone)
        setProduction(value.production)
    }

    const handleNameInput = (value) => {
        setName(value)
        props.callback(production, zone, value)
        handleClose()
    }

    const handleClose = () => {
        props.setOpen(false)
    }

    if (zoneIsSelected) {
        return (
            <Dialog open={props.open}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <DialogTitle>Name Area</DialogTitle>
                    <IconButton size="large" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent id="dialogContent" style={{padding: "0px 20px 20px 20px"}}>
                    <ZoneNameForm callback={handleNameInput}/>
                </DialogContent>
            </Dialog>
        );
    } else {
        return (
            <Dialog open={props.open}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <DialogTitle>Pick zone</DialogTitle>
                    <IconButton size="large" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent id="dialogContent" style={{padding: "0px 20px 20px 20px"}}>
                    <Typography>Pick the zone you wish to draw an area for.</Typography>
                    <ProductionZoneList stallDataManager={props.stallDataManager} callback={handleZoneSelected} />
                </DialogContent>
            </Dialog>
        );
    }
}

export default AreaDrawZonePickerModal;