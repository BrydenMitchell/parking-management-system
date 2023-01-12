import React, {useState} from "react";
import ProductionsTable from "./DataSectionComponents/ProductionsTable";
import {Typography} from "@mui/material";
import AddProductionModal from "./DataSectionComponents/AddProductionModal";

function ProductionsDataSection(props){
    const [state, setState] = useState(0)

    const refresh = () => {
        setState(state + 1)
    }

    let outerDivStyle =
        {display:"flex", height: "100%", width: "100%", marginTop: "75px", alignItems: "center", flexDirection: "column"}

    function ProductionsHeader(props) {
        let headerDivStyle = {
            width: "95%",
            display: "flex",
            marginTop: "15px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"}

        return (
            <div style={headerDivStyle}>
                <Typography style={{ fontWeight: 300 }} variant={"h3"}>
                    Productions
                </Typography>
                <AddProductionModal stallDataManager={props.stallDataManager} refresh={props.refresh}/>
            </div>
        )
    }

    return (
        <div style={outerDivStyle}>
            <ProductionsHeader
                stallDataManager={props.stallDataManager}
                refresh={refresh}/>
            <ProductionsTable
                stallDataManager={props.stallDataManager}
                setSelectedProduction={props.setSelectedProduction}
                refresh={refresh} />
        </div>
    )
}

export default ProductionsDataSection;