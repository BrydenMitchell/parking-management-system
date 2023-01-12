import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import {Button, FormControlLabel, FormGroup, FormLabel, IconButton, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import Checkbox from "@mui/material/Checkbox";
import DownloadIcon from "@mui/icons-material/Download";
import {useState} from "react";

function GenerateReportOptions(props) {
    const [showMap, setShowMap] = React.useState(false);
    const [listStalls, setListStalls] = React.useState(false);
    const [reportNotes, setReportNotes] = useState("");

    const handleDownload = () => {
        props.download(showMap, listStalls, reportNotes)
    }

    const existingSelection = () => {
        return (!(showMap || listStalls || reportNotes !== ""))
    }


    const handleChangeNotes = (e) => {
        const note = e.target.value
        setReportNotes(note)
    }

    const handleChangeShowMap = () => {
        setShowMap(!showMap)
    }

    const handleChangeListStalls = () => {
        setListStalls(!listStalls)
    }

    return (
        <div>
            <div id={"pdf-modal"} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <DialogTitle sx={{pb: 0}}>Generate Productions Report</DialogTitle>
                <IconButton size="large" onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <DialogContentText style={{marginBottom: "10px", marginLeft: "24px"}}>
                Produce a ready-to-print PDF for your selected productions.
            </DialogContentText>
            <DialogContent dividers id="dialogContent" style={{padding: "10px 24px 10px 24px"}}>
                <FormLabel component="legend">Select from the following options:</FormLabel>
                <FormGroup component="fieldset" variant="standard">
                    <FormControlLabel control={<Checkbox onChange={handleChangeShowMap}/>} label="Show Map" />
                    <FormControlLabel control={<Checkbox onChange={handleChangeListStalls}/>} label="List all Stalls" />
                    <div style={{display: "flex", flexDirection: "column", width:"100%", marginTop: "5px"}}>
                        Add Note:
                        <TextField
                            multiline
                            id={"note"}
                            name={"note"}
                            type={"text"}
                            size={"medium"}
                            value={reportNotes}
                            onChange={handleChangeNotes}
                        />
                    </div>
                </FormGroup>
            </DialogContent>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", margin: "5px"}}>
                {!showMap ?
                    <Button
                        variant={"contained"}
                        onClick={handleDownload}
                        endIcon={<DownloadIcon />}
                        disabled={existingSelection()}
                    >
                        Download
                    </Button> :
                    <Button
                        variant={"contained"}
                        onClick={handleDownload}
                    >
                        Next
                    </Button>

                }
            </div>
        </div>

    );
}

export default GenerateReportOptions;