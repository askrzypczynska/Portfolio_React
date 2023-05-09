import './Footer.css';
import React from 'react';
import CVFile from '../../img/CV_SkrzypczynskaAleksandra.pdf'

function Footer(params) {

    return (
        <div className={params.footerColor} id="FooterMain">
            <h3>Zapraszam do kontaktu</h3>
            <div className='footerContact'>
                <ul>E-MAIL:
                    <li><a href="mailto:aleksandraskrzypczynska@gmail.com">aleksandraskrzypczynska@gmail.com</a></li>
                </ul>
                <ul>NUMER TELEFONU:
                    <li><a href="tel:782382251">782 382 251</a></li>
                </ul>
                <ul>GITHUB:
                    <li><a href="https://github.com/askrzypczynska" target="_blank">askrzypczynska</a></li>
                </ul>
                <ul><a href={CVFile} target="_blank">CV</a></ul>
            </div>
        </div>
    )
}

export default Footer;