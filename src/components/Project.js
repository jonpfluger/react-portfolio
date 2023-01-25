import React, { useState } from 'react';

function Project(props) {
    return (
        <div key={props.id} className="card col-lg-3 col-md-6 col-sm-12 m-2">
            <h4 className="bg-primary card-title">{props.title}</h4>
            <div classname="card-body">
                <p className="card-text">{props.desc}</p>
                <p className="card-text">{props.tech}</p>
                <a href={props.link} className="card-text">Link</a>
                <a href={props.repo} className="card-text">Repo</a>
            </div>
        </div>
    )
}

export default Project