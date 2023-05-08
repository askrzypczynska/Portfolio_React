import React from 'react';
import myFoto from '../../img/myCharacter.png'
import './Skills.css';

function Skills() {

    return (
        <div className='Skills' id="Skills">
            <div className='SkillsImg'>
                <img src={myFoto} />
            </div>
            <div className='SkillsText'>
                <h1>Moje umiejętności:</h1>
                <ul>
                    <li>Pakiet Adobe: Photoshop, InDesign, Ilustrator, Adobe XD, Acrobat</li>
                    <li>Coral Draw</li>
                    <li>Figma</li>
                    <li>programy projektowe i 3D: AutoCAD, SketchUP, Blender</li>
                    <li>szeroka wiedza z zakresu DTP</li>
                    <br />
                    <li>HTML, CSS</li>
                    <li>React.js, JavaScript, PHP, MySQL</li>
                    <br />
                    <li>język angielski na poziomie B2</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;