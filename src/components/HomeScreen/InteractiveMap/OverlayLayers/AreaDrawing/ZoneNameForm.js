import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

function ZoneNameForm(props) {
    const [nameValue, setNameValue] = useState("")

    const handleChange = (e) => {
        const {value} = e.target
        setNameValue(value)
    }

    const handleSubmit = () => {
        props.callback(nameValue)
    }

    return (
        <form>
            <Grid container alignItems={"center"} justifyItems={"center"} direction={"row"}>
                <Grid item style={{padding: "5px"}}>
                    <TextField
                        required
                        multiline
                        id={"name"}
                        name={"name"}
                        label={"Area Name"}
                        type={"text"}
                        size={"small"}
                        value={nameValue}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "end", marginTop: "5px"}}>
                <Button onClick={handleSubmit} variant={"contained"}>Draw Area</Button>
            </div>
        </form>
    );
}

export default ZoneNameForm;