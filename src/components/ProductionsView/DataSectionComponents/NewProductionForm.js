import React, {useState} from "react";
import Zone from "../../../mapObjects/Zone";
import ZoneManager from "../../../mapObjects/ZoneManager";
import Production from "../../../mapObjects/Production";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const defaultValues = {
    name: "",
    description: "",
}

function NewProductionForm(props) {
    const [formValues, setFormValues] = useState(defaultValues)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let name = formValues.name
        let description = formValues.description

        let zone = new Zone(0, "Parking", [], "#ff0000", true, [])
        let zoneManager = new ZoneManager([zone])
        let production = new Production(props.stallDataManager.productions.length, name, description, zoneManager, true, true, true)
        props.stallDataManager.addProduction(production)
        props.stallDataManager.pushAllData()
        props.handleClose()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems={"center"} justifyItems={"center"} direction={"column"}>
                {/*TODO: make the textfields wider*/}
                <div style={{padding: "5px", width: "75%"}}>
                    <TextField
                        required
                        multiline
                        fullWidth={true}
                        id={"name"}
                        name={"name"}
                        label={"Production Name"}
                        type={"text"}
                        size={"small"}
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </div>
                <div style={{padding: "5px", width: "75%"}}>
                    <TextField
                        required
                        multiline
                        fullWidth={true}
                        id={"description"}
                        name={"description"}
                        label={"Description"}
                        type={"text"}
                        size={"small"}
                        value={formValues.description}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", marginTop: "10px"}}>
                <Button variant={"contained"} type={"submit"}>Create Production</Button>
            </div>
        </form>
    );
}

export default NewProductionForm