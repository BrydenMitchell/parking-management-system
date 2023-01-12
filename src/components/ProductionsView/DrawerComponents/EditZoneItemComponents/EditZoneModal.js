import React from 'react';
import {IconButton, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {theme} from "../../../../Theme";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import EditZoneForm from "./EditZoneForm";

function EditZoneModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.handleClose()
    };

    return (
        <ListItem sx={{
            padding: "0px",
            flexDirection: "column"
        }}>
            <ListItemButton variant="contained"
                            size="small"
                            color="secondary"
                            sx={{ display: "flex", flexDirection: "row-reverse", backgroundColor: theme.palette.primary.light, justifyContent: "center", padding: "0 10px 0 10px"}}
                            onClick={handleClickOpen}>
                <ListItemText primary={"Edit"} />
            </ListItemButton>
            <Dialog open={open} onClose={handleClose}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <DialogTitle style={{padding: "16px 24px 5px 24px"}}>Edit Zone</DialogTitle>
                    <IconButton size="large" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent id="dialogContent" style={{padding: "5px 20px 20px 20px"}}>
                    <EditZoneForm
                        stallDataManager={props.stallDataManager}
                        selectedProduction={props.selectedProduction}
                        handleClose={handleClose}
                        zone={props.zone}
                        setChangesMade={props.setChangesMade}
                    />
                </DialogContent>
            </Dialog>
        </ListItem>
    );
}

export default EditZoneModal;