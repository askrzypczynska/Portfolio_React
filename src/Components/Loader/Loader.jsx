import './Loader.css';
import React, {useEffect, useState} from 'react';

function Loader(props) {
    const [loading, setLoading] = useState(true);
    let isLoading = props.isLoading;

    if(isLoading === true){
        isLoading = false;
        return (
            <div className="Loader">
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>
        )
    } else {
        return (null)
    }

}

export default Loader;