import React from 'react';
import Skill from './Skill'

import html5Logo from '../images/skillLogos/html5-logo.svg'
import css3Logo from '../images/skillLogos/css3-logo.svg'
import jsLogo from '../images/skillLogos/js-logo.svg'
import nodejsLogo from '../images/skillLogos/nodejs-logo.svg'
import reactLogo from '../images/skillLogos/react-logo.svg'
import githubLogo from '../images/skillLogos/github-mark-white.svg'
import mongodbLogo from '../images/skillLogos/mongodb-logo.svg'
import handlebarsLogo from '../images/skillLogos/handlebars-logo.jpg'
import mysqlLogo from '../images/skillLogos/mysql-logo.svg'

function Resume() {
    return (
        <div id="resume-container" className="container my-2 py-2">
            <h2>Resume</h2>
            <a id="resumeBtn" className="btn btn-lg" target="_blank" href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing">Download Resume</a>
            <h3 className="pt-3">Skills</h3>
            <div id="skill-container">
                <Skill imgSrc={html5Logo} alt="html" />
                <Skill imgSrc={css3Logo} alt="css" />
                <Skill imgSrc={jsLogo} alt="javascript" />
                <Skill imgSrc={reactLogo} alt="react" />
                <Skill imgSrc={githubLogo} alt="github" />
                <Skill imgSrc={nodejsLogo} alt="nodejs" />
                <Skill imgSrc={mongodbLogo} alt="mongodb" />
                <Skill imgSrc={mysqlLogo} alt="mysql" />
                <Skill imgSrc={handlebarsLogo} alt="handlebars" />
            </div>
        </div>        
    )
}

export default Resume