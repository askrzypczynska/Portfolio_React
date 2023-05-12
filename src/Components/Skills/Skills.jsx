import React from 'react';
import './Skills.css';

function Skills(params) {

    return (
        <div className='Skills' id="Skills">
            <div className='SkillsImg'>
                <img src={params.imgSkills} alt="Boat with girl and fish" />
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