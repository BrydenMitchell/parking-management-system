import {MapContainer, TileLayer} from "react-leaflet";
import React from "react";
import CreateAllStallComponents from "../../InteractiveMap/OverlayLayers/Stalls/CreateAllStallComponents";
import {useState} from "react";
import CreateAllAreaComponents from "../../InteractiveMap/OverlayLayers/AreaDrawing/CreateAllAreaComponents";

function MapToPrint(props) {
    let [state, updateState] = useState(0)

    const refresh = () => {
        updateState(state + 1)
    }

    const divStyle = {
        width: "1000px",
        height: "500px",
        overflow: "hidden",
        border: "1px #000000 solid",
        margin: "auto"
    }

    const mapContainerStyle = {
        marginTop: "0px",
        height: "500px",
        overflow: "hidden"
    }

    return (
        <div id={"map-to-print"} style={divStyle}>
            <MapContainer
                center={[60, -15]}
                zoom={3}
                scrollWheelZoom={true}
                id={"map-preview-container"}
                zoomControl={false}
                style={mapContainerStyle}
                zoomSnap={"0.08"}
                zoomDelta={"0.04"}
            >
                <TileLayer url={process.env.PUBLIC_URL + "/lot-map-tiles/{z}/{x}/{y}.png"}
                           maxZoom={6}
                           minZoom={1}
                           edgeBufferTiles={2}
                           continuousWorld={false}
                           noWrap={true}
                           attribution={"Vancouver Film Studios"}
                />
                <CreateAllStallComponents
                    stallDataManager={props.stallDataManager}
                    overlayLayerState={refresh}
                    showAll={false}
                />
                <CreateAllAreaComponents
                    stallDataManager={props.stallDataManager}
                    overlayLayerState={refresh}
                    showAll={false}
                />
            </MapContainer>
        </div>
    )
}

export default MapToPrint;