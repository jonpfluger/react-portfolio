import React, { useState } from 'react';
import headshot from '../images/me-2.png'

function About() {
    return (
        <div id='about-me' className="container my-3 flex-md-column flex-lg-row">
            <img id='headshot' src={headshot} alt="Recent picture of Jon Pfluger" />
            <div id='bio'>
                <h2>Full Stack Web Developer</h2>
                <p>Hi, I'm Jon! I love to code and learn new things. I've been a computer person my entire life. I've been working as a web developer for 2 years. I enjoy designing websites that work with both PC and mobile platforms. I have always been passionate about user-friendly design for software applications. I'm a firm believer that anyone should be able to use your application, even those who are not "tech-savvy".</p>
            </div>
        </div>
    )
}

export default About