import React, {useState} from 'react';
import {Marker, Polygon} from "react-leaflet";
import DeleteAreaModal from "./DeleteAreaModal";
import L from "leaflet"

/**
 *
 * @param props [area, zone overLayerRefresh, stallDataManager]
 * @returns {JSX.Element}
 * @constructor
 */
function AreaComponent(props) {
    const isInteractive = true
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const text = L.divIcon({
        html: "<p style='color: " + props.zone.color + "' class='area-name'>" + props.area._name + "</p>",
        iconSize: [50, 25],
        iconAnchor: [30, 30],
        className: "remove-dot"
    })

    function handleClick() {
        setDeleteModalOpen(true)
    }

    function handleDelete() {
        props.zone.removeArea(props.area.areaId)
        props.overLayerRefresh()
        props.stallDataManager.pushProductions()
    }

    function getColor(zone, forceShow) {
        if (zone._isDisplaying || forceShow) {
            return zone.color
        } else {
            return "#aeadab"
        }
    }

    function getOpacity(zone, forceShow) {
        if (zone._isDisplaying || forceShow) {
            return 0.2
        } else {
            return 0
        }
    }

    function getStroke(zone, forceShow) {
        if (zone._isDisplaying || forceShow) {
            return 2
        } else {
            return 0
        }
    }

    function createRectanglePathOptions(area, zone, forceShow) {
        let color = getColor(zone, forceShow)
        let stroke = getStroke(zone, forceShow)
        let fillOpacity = getOpacity(zone, forceShow)
        return {
            fillColor: color,
            color: color,
            stroke: stroke,
            fillOpacity: fillOpacity
        }
    }

        return (
            <div>
                {props.zone.isDisplaying?
                    <div>
                        <Polygon positions={props.area._coords}
                                 pathOptions={createRectanglePathOptions(props.area, props.zone, props.showAll)}
                                 eventHandlers={{
                                     click: () => {
                                         if (isInteractive) {
                                             handleClick()
                                         }
                                     }
                                 }}>
                            <Marker position={props.area._center} icon={text} />
                        </Polygon>
                        {props.isInteractive ?
                            <DeleteAreaModal open={deleteModalOpen} setOpen={setDeleteModalOpen} deleteArea={handleDelete} />:
                            null
                        }
                    </div> :
                    <div></div>
                }
            </div>
        )
    // }
    // return null
}

export default AreaComponent;