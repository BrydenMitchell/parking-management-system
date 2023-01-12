import {Box, Button, Drawer, Typography} from "@mui/material";
import ProductionZones from "./ProductionZones";
import React from "react";

function ProductionDetailsDrawerDisplay(props) {
    // const listItemStyle = {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignContent: "left",
    //     alignItems: "baseline"
    // }

    function ProductionDetailsHeader(){
        return (
            <div>
                <div style={{display: "flex", flexDirection: "row", width: "100%", textAlign: "left"}}>
                    <Typography style={{ fontWeight: 300 }} variant={"h4"}>
                        {props.selectedProduction.name}
                    </Typography>
                    {/*TODO*/}
                    {/*<div>*/}
                    {/*    <ApartmentIcon fontSize={"large"} style={{*/}
                    {/*        position: "absolute",*/}
                    {/*    }}/>*/}
                    {/*</div>*/}
                </div>

                {/*<Typography style={{ textAlign: "left"}} variant={"subtitle2"}>*/}
                {/*    /!*TODO: get prod data without id*!/*/}
                {/*    Last Updated: {formatDate(props.selectedProduction['p2']['lastModified'])}*/}
                {/*</Typography>*/}
            </div>
        )
    }

    function ProductionDescription() {
        return (
            <div style={{flexDirection: "column", marginTop: "25px", width: "100%", textAlign: "left", maxHeight: "400px", overflow: "auto"}}>
                <Typography style={{ fontWeight: 600, textAlign: "left" }} variant={"body1"}>
                    Description:
                </Typography>
                {props.selectedProduction.description}
            </div>
        )
    }

    function ProductionStalls() {
        return (
            <div style={props.detailsDivStyle}>
                <Typography style={{ fontWeight: 600, textAlign: "left" }} variant={"body1"}>
                    Number of Stalls:
                </Typography>
                <Typography style={{ textAlign: "left" }}>
                    {props.selectedProduction.stallCount()}
                </Typography>
            </div>
        )
    }

    function ProductionStatus() {
        return (
            <div style={{marginTop: "5px", width: "100%", flexDirection: "column"}}>
                <Typography style={{ fontWeight: 600, textAlign: "left" }} variant={"body1"}>
                    Status:
                </Typography>
                <Typography style={{ textAlign: "left" }}>
                    {props.selectedProduction.isActive ? "Active" : "Disabled"}
                </Typography>
            </div>
        )
    }

    function ProductionDetailsButtons(props){
        const handleEdit = () => {
            props.setEditMode(true)
        }

        return (
            <div id={"edit-button"} style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "end"
            }}>
                <Button variant="contained"
                        color={"primary"}
                        onClick={handleEdit}
                        style={{position: "fixed", bottom: "35px"}}>
                    Edit
                </Button>
            </div>
        )
    }

    return (
        <Drawer sx={props.drawerStyle} variant={"permanent"} anchor={"right"} id={"drawer"}>
            <Box sx={{ overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                flexGrow: 1,
                alignItems: "flex-start",
                margin: "95px 20px 20px 20px",
                // backgroundColor: theme.palette.secondary.light,
                padding: "15px"
            }}
                 id={"box"}>
                <ProductionDetailsHeader />
                <ProductionDescription />
                <ProductionStalls />
                <ProductionZones detailsDivStyle={props.detailsDivStyle} selectedProduction={props.selectedProduction} isEdit={false}/>
                <ProductionStatus />
                <ProductionDetailsButtons setEditMode={props.setEditMode} selectedProduction={props.selectedProduction}/>
            </Box>
        </Drawer>
    )
}

export default ProductionDetailsDrawerDisplay