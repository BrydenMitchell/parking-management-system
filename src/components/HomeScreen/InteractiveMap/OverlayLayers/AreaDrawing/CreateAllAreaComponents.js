import React from 'react';
import AreaComponent from "./AreaComponent";

function CreateAllAreaComponents(props) {
    let allAreas = []
    props.stallDataManager.productions.forEach((production) => {
        production.zoneManager.zones.forEach((zone) => {
            Object.entries(zone.areas).forEach(([, area]) => {
                allAreas.push({
                    area: area,
                    zone: zone,
                })
            })
        })
    })

    return (
        <div>
            {Object.entries(allAreas).map(([id, value]) => {
                return (<AreaComponent
                    key={id}
                    area={value.area}
                    zone={value.zone}
                    showAll={props.showAll}
                    overLayerRefresh={props.overLayerRefresh}
                    stallDataManager={props.stallDataManager}
                    isInteractive={props.isInteractive}
                />)
            })}
        </div>
    )
}

export default CreateAllAreaComponents;