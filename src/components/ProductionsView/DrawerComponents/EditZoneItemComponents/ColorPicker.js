import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import {Button, Card} from "@mui/material";
import Chip from '@mui/material/Chip';

function ColorPicker(props) {
    const [color, setColor] = useState(props.zone.color);

    const buttonStyle = {
        backgroundColor: color,
        marginTop: "5px",
    }

    const updateColor = () => {
        props.zone.color = color
        props.close()
    }

    function ColorChips(production) { return (
        production.zoneManager.colors.map((color) => {
            return (
                <div style={{padding: "5px"}} key={color}>
                    <Chip
                        key={color}
                        style={{backgroundColor: color}}
                        onClick={() => setColor(color)}
                    />
                </div>
            )
        })
    )
    }

    return (
        <Card sx={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        }}>
            <HexColorPicker color={color.toString()} onChange={setColor}/>
            <div id={"outer"} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div id={"this"} style={{display: "flex", marginTop: "5px", justifyContent: "center"}}>
                    {ColorChips(props.production)}
                </div>
                <Button onClick={updateColor} variant={"contained"} style={buttonStyle} >Set Color</Button>
            </div>
        </Card>
    );
}

export default ColorPicker;