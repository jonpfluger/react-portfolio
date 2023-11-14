import React, { useState } from 'react';
import Project from './Project'

import projectsJSON from '../projectData'

function Portfolio() {
    const [projectList, setProjectList] = useState(projectsJSON);
    
    return (
        <div className="container">
            <div className="row g-3">
                {projectList.map(project => (
                    <Project
                        key={project.id}
                        title={project.title}
                        desc={project.description}
                        tech={project.tech}
                        imagePath={project.imagePath}
                        alt={project.alt}
                        link={project.link}
                        // repo={project.githubRepo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio