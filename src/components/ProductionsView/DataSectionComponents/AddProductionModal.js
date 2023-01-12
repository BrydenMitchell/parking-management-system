import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {Button, IconButton} from "@mui/material";
import {theme} from "../../../Theme";
import NewProductionForm from "./NewProductionForm";

export default function AddProductionModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.refresh()
        setOpen(false);
    };

    return (
        <div id={"add-production"}>
            <Button variant="contained"
                    size="small"
                    color="secondary"
                    sx={{ display: "flex",
                        flexDirection: "row-reverse",
                        backgroundColor: theme.palette.primary.light,
                        justifyContent: "center",
                        alignSelf: "flex-end"}}
                    onClick={handleClickOpen}
            >
                Add Production
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <DialogTitle style={{paddingBottom: "0px"}}>Create New Production</DialogTitle>
                    <IconButton size="large" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent id="dialogContent" style={{padding: "0px 20px 20px 20px"}}>
                    <DialogContentText style={{marginBottom: "10px", marginLeft: "5px"}}>
                        New productions will have a default zone named "Parking" which you can edit using the Edit Menu.
                    </DialogContentText>
                    <NewProductionForm stallDataManager={props.stallDataManager} handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
