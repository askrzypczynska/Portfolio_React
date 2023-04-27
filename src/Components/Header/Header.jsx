import './Header.css';
import React from 'react';
import logoHeader from '../../img/logo.png';

function Header() {

    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={logoHeader} />
                <h1>Skrzypczyńska</h1>
                <h2>Aleksandra</h2>
                <div className='logoContainerEnd'></div>
		    </div>
        </div>
    )
}

export default Header;