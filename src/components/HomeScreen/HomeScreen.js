import InteractiveMap from "./InteractiveMap/InteractiveMap";
import ProductionDrawer from "./ProductionDrawer/ProductionDrawer";
import "../../assets/css/Home.css"
import Navigation from "../Navigation/Navigation";
import React, {useState} from "react";

function HomeScreen(props) {
    let style = {
        flexGrow: 1,
        flexBasis: "100%",
        width: "100%",
        height: "100%",
        display: "flex"
    }

    const [state, setState] = useState(0)

    const refresh = () => {
        setState(state + 1)
        console.log("home refreshed")
    }

    props.stallDataManager.refreshHomeCallback = refresh

    return(
        <div style={style}>
            <Navigation index={0} />
            <InteractiveMap stallDataManager={props.stallDataManager} homeRefresh={refresh}/>
            <ProductionDrawer stallDataManager={props.stallDataManager} refresh={refresh}/>
        </div>
    )
}

export default HomeScreen