import './Loader.css';
import React from 'react';

function Loader(props) {
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