import "../../../assets/leaflet/leaflet.css"
import "../../../assets/css/InteractiveMap.css"
import React from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import HistoricalMapInfoCard from "./HistoricalMapInfoCard";
import HistoryOverlayLayers from "./HistoryOverlayLayers";

function InteractiveMapViewer(props) {
    /**
     * Handles events on the leaflet map
     * @returns {null}
     */
    function MapEventHandler() {
        useMapEvents({
            click: (e) => {
                console.log(e.latlng)
                console.log(props.stallDataManager)
                props.refresh()
            }
        })
        return null
    }

    return (
        <MapContainer center={[0, 0]}
                      zoom={2}
                      scrollWheelZoom={true} >
            <MapEventHandler />
            <TileLayer url={process.env.PUBLIC_URL + "/lot-map-tiles/{z}/{x}/{y}.png"}
                       maxZoom={6}
                       minZoom={1}
                       edgeBufferTiles={2}
                       continuousWorld={false}
                       noWrap={true}
                       attribution={"Vancouver Film Studios"}
            />
            <HistoryOverlayLayers stallDataManager={props.stallDataManager}
                                  refesh={props.refresh}
            />
            <HistoricalMapInfoCard
                mapID={props.mapID}
                loadSavedMap={props.loadStavedMap}
                deleteMap={props.deleteMap}
                setMapID={props.setMapID}
            />
        </MapContainer>
    )
}

export default InteractiveMapViewer