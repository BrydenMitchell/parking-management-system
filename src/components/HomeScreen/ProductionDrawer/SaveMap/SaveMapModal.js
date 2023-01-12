import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import SaveMapForm from "./SaveMapForm";

function SaveMapModal(props) {
    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <DialogTitle>Save Map</DialogTitle>
                <IconButton size="large" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContent id="dialogContent" style={{padding: "0px 20px 20px 20px"}}>
                <SaveMapForm stallDataManager={props.stallDataManager} handleClose={handleClose} zone={props.zone}/>
            </DialogContent>
        </Dialog>

    );
}

export default SaveMapModal;