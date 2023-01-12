import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {Button, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";

function LoadMapModal(props) {
    const handleClose = () => {
        props.setOpen(false)
    }

    const handleLoad = () => {
        props.loadSavedMap()
        props.setMapID(null)
        handleClose()
    }

    return (
        <Dialog open={props.open} fullwWidth maxWidth={"xs"}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <DialogTitle style={{paddingBottom: "5px"}}>Load Map</DialogTitle>
                <IconButton size="large" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContent id="dialogContent" style={{padding: "0px 24px 20px 24px"}}>
                <Typography style={{marginBottom: "5px"}}>Loading this map will overwrite the current map and any unsaved changes will be lost.</Typography>
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                    <Button onClick={handleLoad} variant={"contained"}>Load Map</Button>
                    <Button color={"error"} variant={"text"} onClick={handleClose}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default LoadMapModal;