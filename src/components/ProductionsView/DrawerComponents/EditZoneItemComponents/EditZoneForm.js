import React, {useState} from 'react';
import {Button, Grid, Popover, TextField} from "@mui/material";
import ColorPicker from "./ColorPicker";

function EditZoneForm(props) {
    const [state, setState] = useState({
        formValues: {
            color: props.zone.color,
            name: props.zone.name
        },
        anchorEl: null
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            formValues: {
                ...state.formValues,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.zone.name = state.formValues.name
        props.zone.color = state.formValues.color
        props.handleClose()
        props.setChangesMade(true)
    }

    const handleClick = (event) => {
        setState({
            ...state,
            anchorEl: event.currentTarget
        })
    };

    const handleClose = () => {
        setState({
            ...state,
            formValues: {
                ...state.formValues,
                color: props.zone.color
            },
            anchorEl: null
        })
    };

    const handleDeleteZone = () => {
        props.selectedProduction.zoneManager.removeZone(props.zone.id)
        props.stallDataManager.deleteZone(props.zone)
        props.handleClose()
    }

    const open = Boolean(state.anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <form id={"edit-zone-form"}>
            <Grid container alignItems={"center"} justifyItems={"center"} direction={"row-reverse"}>
                <Grid item style={{padding: "5px"}}>
                    <TextField
                        required
                        multiline
                        id={"description"}
                        name={"description"}
                        label={"Color"}
                        type={"text"}
                        size={"small"}
                        value={state.formValues.color}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: state.formValues.color
                        }}
                        onClick={handleClick}
                    />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={state.anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <ColorPicker
                            zone={props.zone}
                            close={handleClose}
                            production={props.selectedProduction}/>
                    </Popover>
                </Grid>
                <Grid item style={{padding: "5px"}}>
                    <TextField
                        required
                        multiline
                        id={"name"}
                        name={"name"}
                        label={"Zone Name"}
                        type={"text"}
                        size={"small"}
                        value={state.formValues.name}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", marginTop: "5px"}}>
                <Button color={"error"} variant={"text"} onClick={handleDeleteZone}>Delete Zone</Button>
                <Button variant={"contained"} onClick={handleSubmit}>Save</Button>
            </div>
        </form>
    );
}

export default EditZoneForm;