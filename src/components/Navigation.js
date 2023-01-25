import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link className="m-2" to="/">About Me</Link>
            <Link className="m-2" to="/Portfolio">Portfolio</Link>
            <Link className="m-2" to="/Resume">Resume</Link>
            <Link className="m-2" to="/Contact">Contact</Link>
        </nav>
    )
}

export default Navigation