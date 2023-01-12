import React, {useState} from 'react';
import {Button, FormHelperText, Grid, TextField} from "@mui/material";

function SaveMapForm(props) {
    const [formValues, setFormValues] = useState({
        name: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleClose()
        props.stallDataManager.saveMap(formValues.name)
    }


    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems={"center"} justifyItems={"center"} direction={"row"}>
                <Grid item style={{padding: "5px"}}>
                    <TextField
                        required
                        multiline
                        id={"name"}
                        name={"name"}
                        label={"Map Name"}
                        type={"text"}
                        size={"small"}
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    <FormHelperText>Enter a filename for this map.</FormHelperText>
                </Grid>
            </Grid>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", marginTop: "5px"}}>
                <Button variant={"contained"} type={"submit"}>Save</Button>
            </div>
        </form>
    );
}

export default SaveMapForm;