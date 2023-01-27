import React, { useState } from 'react';
import Project from './Project'

import projectsJSON from '../projectData'

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
                    imagePath={project.imagePath}
                    alt={project.alt}
                    link={project.deployedLink}
                    repo={project.githubRepo}
                />
            ))}
        </>
    )
}

export default Portfolio