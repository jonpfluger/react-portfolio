import React, { useState } from 'react';

function Footer() {
    return (
        <footer className="flex-row px-1">
            <div>
                <a href="https://github.com/jonpfluger" target="_blank"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/jonathanjeffreypfluger/" target="_blank"><i className="bi bi-linkedin"></i></a>
                <a href="https://stackoverflow.com/users/19670475/jon-pfluger" target="_blank"><i className="bi bi-stack-overflow"></i></a>
            </div>

            <p>&copy; JP Dev Solutions LLC {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer