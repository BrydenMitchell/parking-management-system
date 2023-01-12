import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProductionDrawerZoneItem from "../ZoneItem/ProductionDrawerZoneItem";
import ProductionCheckbox from "./ProductionCheckbox";

function ProductionDrawerProduction(props) {
    const noVertPadding = {
        paddingTop: 0,
        paddingBottom: 0,
    }

    if (props.production.isActive) {
        return (
            <div key={props.production.id} style={noVertPadding}>
                <ListItem key={"production-" + props.production.id} disablePadding dense style={noVertPadding}>
                    <ListItemButton dense style={noVertPadding}>
                        <ListItemIcon>
                            <ProductionCheckbox production={props.production} refresh={props.refresh} />
                        </ListItemIcon>
                        <ListItemText primary={props.production.name} style={{fontWeight: "bold"}}/>
                    </ListItemButton>
                </ListItem>
                {props.production.zoneManager.zones.map((zone) => {
                    return (
                        <ProductionDrawerZoneItem refresh={props.refresh} zone={zone} key={zone._id} dense/>
                    )
                })}
            </div>
        )
    }
    return null

}

export default ProductionDrawerProduction;