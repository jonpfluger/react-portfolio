import React, { useState } from 'react';

function Project(props) {
    const { id, title, desc, tech, link, repo, imagePath, alt } = props
    return (
        <div key={id} className="col-12 col-md-6 col-lg-4">
            <div className="my-3 projects card">
                <img className="project-images card-img-top" src={imagePath} alt={alt} />
                <h4 className="card-title mt-2 mx-3">{title}</h4>
                <div className="card-body">
                    <p>{desc}</p>
                    <p>{tech}</p>
                    {link ? <a className="card-link project-links" href={link}><i className="mx-2 bi bi-link-45deg"></i>Link</a> : null}
                    <a className="card-link project-links" href={repo}><i className="mx-2 bi bi-github"></i>Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project