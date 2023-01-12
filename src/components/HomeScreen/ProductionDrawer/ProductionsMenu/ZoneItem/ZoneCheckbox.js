import React, {useState, useEffect} from 'react';
import Checkbox from "@mui/material/Checkbox";

function ZoneCheckbox(props) {
    const [isChecked, setIsChecked] = useState(props.zone.isDisplaying)

    useEffect(() => {
        setIsChecked(props.zone.isDisplaying)
    }, [props.zone.isDisplaying])

    const handleChange = () => {
        props.zone.isDisplaying = !isChecked
        setIsChecked(!isChecked)
        props.refresh()
    }

    return (<Checkbox onChange={handleChange} edge={"end"} size={"small"} checked={!!isChecked} /> )

}

export default ZoneCheckbox;