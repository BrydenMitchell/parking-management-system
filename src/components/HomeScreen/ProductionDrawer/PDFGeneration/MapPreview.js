import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import {Button, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DownloadIcon from "@mui/icons-material/Download";
import MapToPrint from "./MapToPrint";

function MapPreview(props) {
    const handleDownload = () => {
        props.download()
    }

    return (
        <div>
            <div id={"pdf-modal"} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <DialogTitle sx={{pb: 0}}>Map Preview</DialogTitle>
                <IconButton size="large" onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContentText style={{marginBottom: "10px", marginLeft: "24px"}}>
                Position the map as it will appear in the PDF report.
            </DialogContentText>
            <DialogContent dividers id="dialogContent" style={{padding: "0"}}>
                <MapToPrint stallDataManager={props.stallDataManager} />
            </DialogContent>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", margin: "5px"}}>
                <Button
                    variant={"contained"}
                    onClick={handleDownload}
                    endIcon={<DownloadIcon />}
                >
                    Download
                </Button>
            </div>
        </div>
    );
}

export default MapPreview;