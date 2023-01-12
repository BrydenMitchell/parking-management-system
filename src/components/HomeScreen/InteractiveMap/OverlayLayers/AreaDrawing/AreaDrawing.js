import React from 'react';
import {FeatureGroup} from "react-leaflet";
import {EditControl} from "react-leaflet-draw";
import Control from "react-leaflet-custom-control";
import {Button, Card} from "@mui/material";
import AreaDrawZonePickerModal from "./ZoneSelection/AreaDrawZonePickerModal";
import {useState} from "react";
import Area from "../../../../../mapObjects/Area"
import SaveMapModal from "../../../ProductionDrawer/SaveMap/SaveMapModal";
import ModeIcon from '@mui/icons-material/Mode';
import SaveIcon from '@mui/icons-material/Save';

function AreaDrawing(props) {
    let [areaDrawMode, setAreaDrawMode] = useState(false)
    let [areaDrawZone, setAreaDrawZone] = useState({
        production: null,
        zone: null,
        name: ""
    })
    const [saveMapModalOpen, setSaveMapModalOpen] = useState(false)

    let [areaDrawZonePickModalOpen, setAreaDrawZonePickModalOpen] = useState(false)

    const setDrawZone = (production, zone, name) => {
        zone.isDisplaying = true
        setAreaDrawZone({
            production: production,
            zone: zone,
            name: name
        })
        setAreaDrawMode(true)
    }

    const handleAreaDrawOpen = () => {
        setAreaDrawZonePickModalOpen(true)
    }

    const handleMapSave = () => {
        setSaveMapModalOpen(true)
    }

    //todo push data
    const created = (e) => {
        let area = new Area(areaDrawZone.name, areaDrawZone.name, e.layer._latlngs,
            e.layerType, e.layer.getCenter()
            )
        areaDrawZone.zone.addArea(area)
        // props.zone.addArea(area)
        setAreaDrawMode(false)
        props.stallDataManager.pushProductions()
        e.layer._map.removeLayer(e.layer)
        props.overLayerRefresh()
    }

    const mounted = (e) => {
        console.log(e)
    }

    const test = (e) => {
        console.log(e)
    }

    const drawShapes = {
        rectangle: true,
        circle: false,
        circlemarker: false,
        marker: false,
        polygon: true,
        polyline: false
    }
    const editShapes = {
        edit: false,
        remove: false,
    }
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
    }
    const buttonStyle = {
        margin: "5px"
    }

    if (areaDrawMode) {
        return (
            <FeatureGroup>
                <EditControl position={"topright"} onCreated={created}  draw={drawShapes} edit={editShapes} onMounted={mounted} onDrawStart={test}/>
            </FeatureGroup>
        )
    } else {
        return (
            <FeatureGroup>
                <Control position={"bottomright"}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Card style={cardStyle}>
                            <Button variant={"contained"} onClick={handleAreaDrawOpen} style={buttonStyle} endIcon={<ModeIcon />}>Draw Areas</Button>
                            <Button variant={"contained"} onClick={handleMapSave} style={buttonStyle} endIcon={<SaveIcon />}>Save Map</Button>
                        </Card>
                        <SaveMapModal open={saveMapModalOpen} setOpen={setSaveMapModalOpen} stallDataManager={props.stallDataManager}/>
                    </div>
                    <AreaDrawZonePickerModal
                        open={areaDrawZonePickModalOpen}
                        setOpen={setAreaDrawZonePickModalOpen}
                        stallDataManager={props.stallDataManager}
                        callback={setDrawZone}
                    />
                </Control>
            </FeatureGroup>
        )
    }
}

export default AreaDrawing;