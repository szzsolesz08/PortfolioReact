import React from 'react';

function ProjectCard({ title, description, image, technologies, github }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="project-footer">
                <a href={github} className="github-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
