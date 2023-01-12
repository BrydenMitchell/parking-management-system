import Control from 'react-leaflet-custom-control'
import {Card} from "@material-ui/core";
import {Button, Chip, Divider} from "@mui/material";
import {theme} from "../../../../../Theme";
import NestedZoneList from "./NestedZoneList";
import {useState} from "react";
import {ArrowBackIosNew} from "@mui/icons-material";

function SelectorCard(props) {
    const [isAssignMode, setAssignMode] = useState(props.isAssignmentMode)

    const assignStallsMode = () => {
        setAssignMode(true)
        props.stallDataManager.isAssignmentMode = true
    }

    const stallSelectionMode = () => {
        setAssignMode(false)
        props.stallDataManager.isAssignmentMode = false
    }

    const unassignStalls = () => {
        props.stallDataManager.unassignStalls()
        props.stallDataManager.refreshHome()
    }

    const getActionButtons = () => {
        if (!isAssignMode) {
            return (
                <div>
                    <Button onClick={assignStallsMode} style={{display: "block", margin: "auto"}} variant={"outlined"}>Assign</Button>
                    <Button onClick={unassignStalls} style={{display: "block", margin: "auto", color: theme.palette.primary.light}} variant={"text"}>Unassign</Button>
                </div>
            )
        }
    }

    const getHeader = () => {
        if (isAssignMode) {
            return (
                <h3 style={{color: theme.palette.primary.main}}>
                    Assign {Object.keys(props.stallDataManager.selectedStalls).length} stalls to zone
                </h3>
            )
        }
        return (
            <h1 style={{color: theme.palette.primary.main}}>Selected Stalls</h1>
        )
    }

    const getBackButton = () => {
        if (isAssignMode) {
            return (
                <Button onClick={stallSelectionMode} size={"small"} variant={"contained"} startIcon={<ArrowBackIosNew/>} style={{
                    right: "-60px",
                    top: "0px",
                    position: "absolute"
                }}>
                    Back
                </Button>
            )
        }
    }

    const getSelectionCard = () => {
        if (Object.keys(props.stallDataManager.selectedStalls).length > 0) {
            let values = Object.values(props.stallDataManager.selectedStalls)
            values.sort((a, b) => (a.id > b.id) ? 1 : -1)
            return (
                <div style={{paddingBottom: "10px"}} >
                    { getBackButton() }
                    { getHeader() }
                    <Divider />
                    <div style={{padding: "10px", maxHeight: "400px", overflowY: "auto"}} >
                        {values.map((stall) => {
                            return <Chip key={"chip-" + stall.id} label={stall.id.toUpperCase()} color={"secondary"} style={{
                                backgroundColor: getColor(stall),
                                margin: "2px"
                            }} />
                        })}
                    </div>
                    { getActionButtons() }
                </div>
            )
        } else {
            return (<h1 style={{color: theme.palette.primary.light}}>No Stalls Selected</h1>)
        }
    }

    const getColor = (stall) => {
        if (stall.color !== null) {
            return stall.color
        }
        return "#aeadab"
    }


    const getCard = () => {
        if (isAssignMode) {
            return (
                <Card className={"selected-stalls-card"}>
                    { getSelectionCard() }
                    <NestedZoneList stallDataManager={props.stallDataManager} setAssignMode={setAssignMode}/>
                </Card>
            )
        } else {
            return (
                <Card className={"selected-stalls-card"}>
                    { getSelectionCard() }
                </Card>
            )
        }
    }

    return (
        <div>
            <Control position={"bottomleft"}>
                { getCard() }
            </Control>
        </div>
    )
}

export default SelectorCard