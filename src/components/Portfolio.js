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
                    image={project.image}
                    deployedLink={project.link}
                    githubRepo={project.repo}
                />
            ))}
        </>
    )
}

export default Portfolio