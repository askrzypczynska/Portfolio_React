import React from 'react';
import './Skills.css';
import myFoto from '../../img/myCharacter.png'
import myFoto2 from '../../img/myCharacter2.png'

function Skills(params) {

    return (
        <div className='Skills' id="Skills">
            <div className='SkillsImg'>
                <img src={params.imgSkills} />
            </div>
            <div className='SkillsText'>
                <h1>Moje umiejętności:</h1>
                <ul dangerouslySetInnerHTML={{ __html: params.skillsText}}>
                </ul>
            </div>
        </div>
    )
}

export default Skills;