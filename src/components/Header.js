import React, { useState } from 'react';
import Navigation from './Navigation'
import logo from '../images/logo3.png'

function Header() {
    return (
        <header id="header">
            <img id="logo" src={logo} alt="Jon Pfluger's logo" />
            <Navigation />
        </header>
    )
}

export default Header