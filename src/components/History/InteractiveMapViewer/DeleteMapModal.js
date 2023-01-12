import React from 'react';
import Dialog from "@mui/material/Dialog";
import {Button} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { Alert } from '@mui/material';
import AlertTitle from "@mui/material/AlertTitle";

function DeleteMapModal(props) {
    const handleClose = () => {
        props.setOpen(false)
    }

    const handleDelete = () => {
        props.deleteMap()
        props.setMapID(null)
        handleClose()
    }

    return (
        <Dialog open={props.open}>
            <DialogContent id="dialogContent" style={{padding: "20px 20px 20px 20px"}}>
                <Alert severity="warning">
                    <AlertTitle><strong>Warning</strong></AlertTitle>
                    Are you sure you want to delete this map?
                </Alert>
                <div style={{display: "flex", flexDirection: "row-reverse", marginTop: "5px"}}>
                    <Button color={"warning"} onClick={handleDelete} variant={"contained"}>Delete</Button>
                    <Button color={"error"} variant={"text"} onClick={handleClose}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteMapModal;