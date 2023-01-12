import {
    Box, Button,
    Drawer,
    List,
    Toolbar,
    Typography
} from "@mui/material";
import FillWidthSpacer from "../../FillWidthSpacer";
import React, {useEffect, useState} from "react";
import ListItem from '@mui/material/ListItem';
import ProductionDrawerProduction from "./ProductionsMenu/ProductionItem/ProductionDrawerProduction";
import GeneratePDFModal from "./PDFGeneration/GeneratePDFModal";
import {drawerWidth} from "../../../utils";

function ProductionDrawer(props) {
    const [openModal, setOpenModal] = React.useState(false);
    const [prodIsDisplay, setProdIsDisplay] = useState(props.stallDataManager.isAProductionDisplaying())

    useEffect(() => {
        setProdIsDisplay(props.stallDataManager.isAProductionDisplaying())
    },[props.stallDataManager.productionsDisplaying, props.stallDataManager])

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        props.refresh()
        setOpenModal(false);
    };

    const drawerStyle = {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "-3px -3px 10px 0px rgba(0,0,0,0.1)",
        },
    }
    const listItemStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "left",
        alignItems: "baseline"
    }
    const noVertPadding = {
        paddingTop: 0,
        paddingBottom: 0,
    }

    function createProductionList(stallDataManager) {
        return (
            <List dense style={noVertPadding}>
                { stallDataManager.productions.map((production) => {
                    return (
                            <ProductionDrawerProduction
                                refresh={props.refresh}
                                production={production}
                                key={production.id}/>
                        )
                }) }
            </List>
        )
    }

    return(
        <Drawer sx={drawerStyle} variant={"permanent"} anchor={"right"}>
            <Toolbar />
            <Box sx={{ overflow: "auto",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                flexGrow: 1
            }}>
                <List>
                    <ListItem key={1} sx={listItemStyle}>
                        <Typography style={{ fontWeight: 600 }} variant={"h4"}>
                            Productions
                        </Typography>
                        <Typography variant={"body2"}>
                            Select Productions to show their allocation on the map and include them on a report.
                        </Typography>
                    </ListItem>
                </List>
                {createProductionList(props.stallDataManager)}
                <FillWidthSpacer />
                <Box sx={{ padding: 2, display: "flex", flexDirection: "row-reverse" }}>
                    <Button variant="contained"
                            onClick={handleOpenModal}
                            disabled={!prodIsDisplay}
                    >
                        Generate Report
                    </Button>
                </Box>
            </Box>
            {
                openModal ? <GeneratePDFModal
                    refresh={props.refresh}
                    open={openModal}
                    onClose={handleCloseModal}
                    stallDataManager={props.stallDataManager}
                /> : null
            }
        </Drawer>
    )
}

export default ProductionDrawer