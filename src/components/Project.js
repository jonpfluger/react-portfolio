import React, { useState } from 'react';

function Project(props) {
    const { id, title, desc, tech, link, repo, imageName, alt } = props
    return (
        <div key={id} className="projects card col-lg-3 col-md-6 col-sm-12 m-2">
            <img className="project-images card-img-top" src={require(`../images/${imageName}`).default} alt={alt} />
            <h4 className="card-title">{title}</h4>
            <div classname="card-body">
                <p className="card-text">{desc}</p>
                <p className="card-text">{tech}</p>
                <a className="project-links" href={link}>Link</a>
                <a className="project-links" href={repo}>Repo</a>
            </div>
        </div>
    )
}

export default Project