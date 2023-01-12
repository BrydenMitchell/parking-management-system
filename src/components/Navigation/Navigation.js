import React from 'react';
import VFSAppBar from "./VFSAppBar";

function Navigation(props) {
    return (
        <div>
            <VFSAppBar index={props.index}/>
        </div>
    );
}

export default Navigation;