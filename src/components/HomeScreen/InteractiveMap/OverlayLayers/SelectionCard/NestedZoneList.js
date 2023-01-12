import {List} from "@mui/material";
import ProductionListItem from "./ProductionListItem";

function NestedZoneList(props) {
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
                        stallDataManger={props.stallDataManager}
                        setAssignMode={props.setAssignMode} />)
                } else {
                    return null
                }
            })}
        </List>
    )
}

export default NestedZoneList