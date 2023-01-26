import React, { useState } from 'react';
import Project from './Project'

import projectsJSON from '../Projects.json'

function Portfolio(props) {
    const [projectList, setProjectList] = useState(projectsJSON);
    return (
        <>
            {projectList.map(project => (
                <Project
                    id={project.id}
                    title={project.title}
                    desc={project.description}
                    tech={project.tech}
                    imageName={project.imageName}
                    alt={project.alt}
                    link={project.deployedLink}
                    repo={project.githubRepo}
                />
            ))}
        </>
    )
}

export default Portfolio