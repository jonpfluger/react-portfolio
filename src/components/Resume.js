import React, { useState } from 'react';
import Skill from './Skill'

import skillsJSON from '../skillData'

function Resume() {
    const [skillList, setSkillList] = useState(skillsJSON)

    return (
        <div id="resume-container" className="container my-2 py-2">
            <h2>Resume</h2>
            <a id="resumeBtn" className="btn btn-lg" target="_blank" href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing">Download Resume</a>

            <h3 className="pt-3">Skills</h3>
            <div id="skill-container">
                {skillList.map(skill => (
                    <Skill imgSrc={skill.imgSrc} alt={skill.alt} key={skill.id} />
                ))}
            </div>
        </div>        
    )
}

export default Resume