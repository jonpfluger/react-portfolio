import React, { useState } from 'react';
import resumeImg from '../images/resume-screenshot.PNG'

function Resume() {
    return (



        <div id="resume-container" className="container my-3 py-3">

            <a href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing"><img id="resume-image" src={resumeImg} alt="Image preview of Jon Pfluger's resume." /></a>

            <div id="resume-link" className="m-2">
                <a href="https://docs.google.com/document/d/15JxKsIpPExDUdPZU6gfVDYMFnJTn4_bCNZaYphbnpO0/edit?usp=sharing"><i class="bi bi-link-45deg"></i>Resume Link</a>
            </div>

            <div className="m-2">
                <a href="./pdf/jon-pfluger-resume.pdf" download="jon-pfluger-resume"><i id="resume-download" class="bi bi-cloud-arrow-down"></i>Download</a>
            </div>

        </div>
        
    )
}

export default Resume