import './ChangeSite.css';
import React from 'react';

function ChangeSite(params) {

    return (
        <div className='ChangeSite' onClick={params.changeSiteGraphic}>
            🚀 <br/> Kliknij mnie <br/>aby przejść <br/>do {}
            portfolio IT
        </div>
    )
}

export default ChangeSite;