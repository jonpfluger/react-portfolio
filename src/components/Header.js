import React, { useState } from 'react';
import logo3 from '../images/logo3.png'
import Navigation from './Navigation'

function Header() {
    return (
        <>
            <img src={logo3} />
            <Navigation />
        </>
    )
}

export default Header