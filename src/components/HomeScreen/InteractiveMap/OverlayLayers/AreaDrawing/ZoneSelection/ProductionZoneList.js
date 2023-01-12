import React from 'react';
import {List} from "@mui/material";
import ProductionListItem from "./ProductionListItem";

function ProductionZoneList(props) {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            { Object.values(props.stallDataManager.productions).map((production) => {
                if (production.isActive) {
                    return (<ProductionListItem
                        key={production.id}
                        production={production}
                        callback={props.callback}
                    />)
                }
                return null
            })}
        </List>
    )
}

export default ProductionZoneList;