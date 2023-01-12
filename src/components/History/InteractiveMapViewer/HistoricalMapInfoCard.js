import React from 'react';
import Control from "react-leaflet-custom-control";
import {Button, Card, Typography} from "@mui/material";
import {theme} from "../../../Theme";
import {useState} from "react";
import LoadMapModal from "./LoadMapModal";
import DeleteMapModal from "./DeleteMapModal";

function NoMapSelected() {
    return (<h1 style={{color: theme.palette.primary.light}}>Current Map</h1>)
}
function MapIsSelected(props) {
    const [loadMapModalOpen, setLoadMapModalOpen] = useState(false)
    const [deleteMapModalOpen, setDeleteMapModalOpen] = useState(false)

    const handleLoadClick = () => {
        setLoadMapModalOpen(true)
    }

    const handleDeleteClick = () => {
        setDeleteMapModalOpen(true)
    }

    return (
        <div>
            <h1 style={{marginBottom: "0px"}}>Selected Map:</h1>
            <Typography>ID: {props.mapID}</Typography>
            <div style={{display: "flex", flexDirection: "column", padding: "20px"}}>
                <Button onClick={handleLoadClick} variant={"contained"}>Load Map</Button>
                <LoadMapModal
                    open={loadMapModalOpen}
                    setOpen={setLoadMapModalOpen}
                    loadSavedMap={props.loadSavedMap}
                    setMapID={props.setMapID}
                />
                <Button onClick={handleDeleteClick} variant={"text"} color={"error"}>Delete Map</Button>
                <DeleteMapModal
                    open={deleteMapModalOpen}
                    setOpen={setDeleteMapModalOpen}
                    deleteMap={props.deleteMap}
                    setMapID={props.setMapID}
                />
            </div>
        </div>
    )
}

function HistoricalMapInfoCard(props) {
    const mapIsSelected = props.mapID !== null

    return (
        <div>
            <Control position={"bottomleft"}>
                <Card className={"selected-stalls-card"}>
                    {mapIsSelected ?
                        <MapIsSelected
                            mapID={props.mapID}
                            loadSavedMap={props.loadSavedMap}
                            setMapID={props.setMapID}
                            deleteMap={props.deleteMap}
                        /> :
                        <NoMapSelected />
                    }
                </Card>
            </Control>
        </div>

    );
}

export default HistoricalMapInfoCard;