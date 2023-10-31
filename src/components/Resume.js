import React, { useState } from 'react';
import resumeImg from '../images/resume-screenshot.PNG'

function Resume() {
    return (



        <div id="resume-container" className="container my-3 py-3">

            <a target="_blank" href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing"><img id="resume-image" src={resumeImg} alt="Image preview of Jon Pfluger's resume." /></a>

            <div id="resume-link" className="m-2">
                <a target="_blank" href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing"><i class="bi bi-link-45deg"></i>Resume Link</a>
            </div>

            <h6>Technical Skills</h6>
            <p>
                Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GraphQL
            </p>
            <p>Applications: GitHub, MongoDB, MySQL</p>
            <p>
                Tools: Express, React, Node, Handlebars, jQuery, Bootstrap, Sequelize, Mongoose
            </p>
        </div>
        
    )
}

export default Resume