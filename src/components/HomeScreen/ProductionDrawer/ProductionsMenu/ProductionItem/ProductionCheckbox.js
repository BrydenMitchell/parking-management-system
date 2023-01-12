import React, {useState, useEffect} from 'react';
import Checkbox from "@mui/material/Checkbox";

function ProductionCheckbox(props) {
    const [isChecked, setIsChecked] = useState(props.production.isDisplaying)

    useEffect(() => {
        setIsChecked(props.production.isDisplaying)
    }, [props.production.isDisplaying])


    const handleChange = () => {
        props.production.setAllZonesIsDisplaying(!isChecked)
        setIsChecked(!isChecked)
        props.refresh()
    }

    return (<Checkbox onChange={handleChange} edge={"start"} checked={!!isChecked}/>)
}

export default ProductionCheckbox;