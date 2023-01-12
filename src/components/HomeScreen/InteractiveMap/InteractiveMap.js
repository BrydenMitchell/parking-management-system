import "../../../assets/leaflet/leaflet.css"
import "../../../assets/css/InteractiveMap.css"
import React from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import OverlayLayers from "./OverlayLayers/OverlayLayers";
import "leaflet-draw/dist/leaflet.draw.css"

/**
 * Handles events on the leaflet map
 * @returns {null}
 */
function MapEventHandler() {
    useMapEvents({
        click: () => {
            // console.log(e.latlng)
        }
    })
    return null
}

function InteractiveMap(props) {
    let stallDataManager = props.stallDataManager

    return (
        <MapContainer
            center={[60, -15]}
            zoom={3}
            scrollWheelZoom={true}
            id={"map-container"}
            zoomSnap={"0.1"}
            zoomDelta={"0.1"}
        >
            <MapEventHandler />
            <TileLayer url={process.env.PUBLIC_URL + "/lot-map-tiles/{z}/{x}/{y}.png"}
                       maxZoom={6}
                       minZoom={1}
                       edgeBufferTiles={2}
                       continuousWorld={false}
                       noWrap={true}
                       attribution={"Vancouver Film Studios"}
            />
            <OverlayLayers stallDataManager={stallDataManager} />
        </MapContainer>
    )
}

export default InteractiveMap