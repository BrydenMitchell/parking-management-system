import React, {useState} from "react";
import Zone from "../../../mapObjects/Zone";
import {Box, Button, Drawer, Fab, Grid, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductionZones from "./ProductionZones";

function ProductionDetailsDrawerEdit(props) {
    const [formValues, setFormValues] = useState({
        name: props.selectedProduction.name,
        description: props.selectedProduction.description,
        status: props.selectedProduction.isActive,
    })
    const [renderCount, setRenderCount] = useState(0)
    const [changesMade, setChangesMade] = useState(false)

    const refresh = () => {
        setRenderCount(renderCount + 1)
    }

    const handleDisableEditMode = (event) => {
        event.preventDefault();
        props.setEditMode(false)
    }

    const handleChangesMade = () => {
        setChangesMade(!changesMade)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.selectedProduction.name = formValues.name
        props.selectedProduction.description = formValues.description
        props.selectedProduction.isActive = formValues.status
        props.setEditMode(false)
        props.stallDataManager.pushAllData()
        props.stallDataManager.refreshHome()
        props.refresh()
    }

    // TODO: (low priority) disable Save button if values stay the same
    const handleChange = (e) => {
        const {name, value} = e.target
        setChangesMade(true)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    //TODO: save to stalldataManager
    const handleDisableEnable = () => {
        setFormValues({
            ...formValues,
            status: !formValues.status
        })
        handleChangesMade()
    }

    const handleAddZone = () => {
        let zone = new Zone(props.selectedProduction.zoneManager.zones.length, "Parking", [], "#ff0000", true)
        props.selectedProduction.zoneManager.addZone(zone)
        refresh()
        setChangesMade(true)
    }

    const EditHeader = () => {
        return (
            <div style={{display: "flex", flexDirection: "column", marginBottom: "10px"}}>
                <Typography style={{ fontWeight: 300 }} variant={"h4"}>
                    Edit Production
                </Typography>
                <Typography style={{ fontWeight: 50, textAlign: "left", marginBottom: "10px" }} variant={"caption"}>
                    Click Save to save your changes.
                </Typography>
            </div>
        )
    }

    const EditButtons = () => {
        return (
            <div style={{position: "absolute", bottom: "35px"}}>
                {/*TODO: consider moving Save/Disable buttons*/}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "end"}}>
                    <Button variant={"contained"}
                            type={"submit"}
                            onClick={handleDisableEditMode}
                            startIcon={<ArrowBackIcon/>}
                            style={{position: "fixed", bottom: "35px", right: "35px"}}>
                        Back
                    </Button>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {formValues.status ?
                            <Button variant={"text"} color={"error"} onClick={handleDisableEnable}>Disable Production</Button> :
                            <Button variant={"text"} color={"success"} onClick={handleDisableEnable}>Enable Production</Button>
                        }
                        <Button variant={"contained"} type={"submit"} disabled={!changesMade}>Save</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Drawer sx={props.drawerStyle} variant={"permanent"} anchor={"right"} id={"drawer"}>
            <Box sx={{ overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                flexGrow: 1,
                alignItems: "flex-start",
                margin: "95px 20px 20px 20px",
                // backgroundColor: theme.palette.secondary.light,
                padding: "15px"
            }}
                 id={"box"}>
                <EditHeader/>

                <form onSubmit={handleSubmit}>
                    <Grid container alignItems={"center"} justifyItems={"center"} direction={"row-reverse"} sx={{width: "100%"}}>
                        <Grid item style={{paddingTop: "5px", paddingBottom: "5px", width: "100%"}}>
                            <TextField
                                fullWidth
                                required
                                multiline
                                id={"name"}
                                name={"name"}
                                label={"Name"}
                                type={"text"}
                                size={"small"}
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item style={{paddingTop: "5px", paddingBottom: "5px", width: "100%"}}>
                            <TextField
                                fullWidth
                                required
                                multiline
                                id={"description"}
                                name={"description"}
                                label={"Description"}
                                type={"text"}
                                size={"small"}
                                value={formValues.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <ProductionZones
                            selectedProduction={props.selectedProduction}
                            isEdit={true}
                            stallDataManager={props.stallDataManager}
                            refresh={refresh}
                            setChangesMade={handleChangesMade}
                            detailsDivStyle={props.detailsDivStyle}
                        />
                        <Fab color="primary" aria-label="add" size={"small"} variant={"extended"} onClick={handleAddZone}>
                            <AddIcon />
                            Add Zone
                        </Fab>
                    </Grid>
                    <EditButtons/>
                </form>
            </Box>
        </Drawer>
    )
}

export default ProductionDetailsDrawerEdit