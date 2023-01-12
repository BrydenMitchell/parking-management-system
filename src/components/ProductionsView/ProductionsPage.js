import React, {useState} from 'react';
import Navigation from "../Navigation/Navigation";
import ProductionPageDrawer from "./ProductionPageDrawer";
import ProductionsDataSection from "./ProductionsDataSection";

function ProductionsPage(props) {
    const [state, setState] = useState({
        selectedProduction: null,
        reRenderCount: 0
    })

    const setSelectedProduction = (production) => {
        setState({
            ...state,
            selectedProduction: production
        })
    }

    const refresh = () => {
        setState({
            ...state,
            reRenderCount: state.reRenderCount += 1
        })
    }

    props.stallDataManager.refreshHomeCallback = refresh

    let style = {
        flexGrow: 1,
        flexBasis: "100%",
        width: "100%",
        height: "100%",
        display: "flex"
    }

    return (
        <div style={style}>
            <Navigation index={1} />
            <ProductionsDataSection
                stallDataManager={props.stallDataManager}
                setSelectedProduction={setSelectedProduction} />
            <ProductionPageDrawer
                stallDataManager={props.stallDataManager}
                selectedProduction={state.selectedProduction}
                refresh={refresh}/>
        </div>
    );
}

export default ProductionsPage;