import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="mx-auto">
            <Link className="navbar-link m-2" to="/">About Me</Link>
            <Link className="navbar-link m-2" to="/portfolio">Portfolio</Link>
            <Link className="navbar-link m-2" to="/resume">Resume</Link>
            <Link className="navbar-link m-2" to="/contact">Contact</Link>
        </nav>
    )
}

export default Navigation