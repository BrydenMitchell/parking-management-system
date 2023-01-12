import {
    Box,
    Drawer,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {theme} from "../../Theme"
import ProductionDetailsDrawerEdit from "./DrawerComponents/ProductionDetailsDrawerEdit";
import ProductionDetailsDrawerDisplay from "./DrawerComponents/ProductionDetailsDrawerDisplay";
import {drawerWidth} from "../../utils";

function ProductionPageDrawer(props) {
    const drawerStyle = {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "-3px -3px 10px 0px rgba(0,0,0,0.1)",
        },
        backgroundColor: theme.palette.secondary.dark
    }

    const detailsDivStyle = {
        flexDirection: "column",
        marginTop: "20px",
        width: "100%",
        textAlign: "left",
        overflow: "auto"}

    // const longEnUSFormatter   = new Intl.DateTimeFormat('en-US', {
    //     year:  'numeric',
    //     month: 'long',
    //     day:   'numeric',
    // })

    // function formatDate(date){
    //     const dayOfMonth = date.getDate()
    //     let month = date.getMonth() - 1
    //     const year = date.getFullYear()
    //     return longEnUSFormatter.format(new Date(year, month, dayOfMonth))
    // }

    function SelectProduction(){
        return (
            <Drawer sx={drawerStyle} variant={"permanent"} anchor={"right"} id={"drawer"}>
                <Toolbar />
                <Box sx={{
                    overflow: "auto",
                    paddingTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexGrow: 1,
                    alignItems: "center",
                }}
                     id={"box"}>
                    {/*TODO: see if ListStyleItem style was better*/}
                    <div key={1} style={{}}>
                        <Typography style={{ fontWeight: 600, marginTop: "40vh" }} variant={"body1"}>
                            Select a Production to Edit
                        </Typography>
                    </div>
                </Box>
            </Drawer>
        )
    }

    function ProductionDetailsDrawer(props){
        const [editMode, setEditMode] = useState(false)

        if (editMode) {
            return (<ProductionDetailsDrawerEdit
                selectedProduction={props.selectedProduction}
                setEditMode={setEditMode}
                refresh={props.refresh}
                stallDataManager={props.stallDataManager}
                drawerStyle={drawerStyle}
                detailsDivStyle={detailsDivStyle}/>)
        } else {
            return (<ProductionDetailsDrawerDisplay
                selectedProduction={props.selectedProduction}
                setEditMode={setEditMode}
                drawerStyle={drawerStyle}
                detailsDivStyle={detailsDivStyle}/>)
        }
    }

    return (<div>
            {props.selectedProduction ?
                <ProductionDetailsDrawer stallDataManager={props.stallDataManager} selectedProduction={props.selectedProduction} refresh={props.refresh}/> :
                <SelectProduction/>
            }
        </div>
    )
}

export default ProductionPageDrawer