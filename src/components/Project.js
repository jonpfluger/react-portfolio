import React, { useState } from 'react';

function Project(props) {
    const { id, title, desc, tech, link, repo, imagePath, alt } = props
    return (
        <div key={id} className="my-5 projects container card col-lg-3 col-md-6 col-sm-12">
            <img className="project-images card-img-top" src={imagePath} alt={alt} />
            <h4 className="card-title">{title}</h4>
            <div classname="card-body">
                <p className="card-text">{desc}</p>
                <p className="card-text">{tech}</p>
                <a className="project-links mx-5" href={link}><i className="mx-2 bi bi-link-45deg"></i>Link</a>
                <a className="project-links mx-5" href={repo}><i className="mx-2 bi bi-github"></i>Repo</a>
            </div>
        </div>
    )
}

export default Project