import React from 'react';

function Project(props) {
    const { title, desc, tech, link, imagePath, alt } = props
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="my-3 projects card">
                <a href={link} target="_blank" rel="noreferrer">
                    <img className="project-images card-img-top" src={imagePath} alt={alt} />
                </a>

                <h4 className="card-title mt-2 mx-3"><a href={link} target="_blank" rel="noreferrer">{title}</a></h4>

                <div className="card-body">
                    <h6 className="card-subtitle">Description</h6>
                    <p>{desc}</p>
                    <h6 className="card-subtitle">Technology Used</h6>
                    <p>{tech}</p>
                    {/* {link ? <a className="card-link project-links" href={link} target="_blank" rel="noreferrer"><i className="mx-2 bi bi-link-45deg"></i>Link</a> : null}
                    {repo ? <a className="card-link project-links" href={repo} target="_blank" rel="noreferrer"><i className="mx-2 bi bi-github"></i>Repo</a>  : null} */}
                </div>
            </div>
        </div>
    )
}

export default Project