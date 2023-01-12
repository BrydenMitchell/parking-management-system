import {List, Typography} from "@mui/material";
import React from "react";
import ZoneItem from "./ZoneItem";

function ProductionZones(props) {
    return (
        <div id={"production-zones"} style={props.detailsDivStyle}>
            <Typography style={{ fontWeight: 600, textAlign: "left" }} variant={"body1"}>
                Zones:
            </Typography>
            <List style={{ textAlign: "left"}}>
                {props.selectedProduction.zoneManager.zones.map((zone) => {
                    return (
                        <ZoneItem
                            zone={zone}
                            key={zone.id}
                            isEdit={props.isEdit}
                            stallDataManager={props.stallDataManager}
                            selectedProduction={props.selectedProduction}
                            refresh={props.refresh}
                            setChangesMade={props.setChangesMade}
                        />)
                })}
            </List>
        </div>
    )
}

export default ProductionZones