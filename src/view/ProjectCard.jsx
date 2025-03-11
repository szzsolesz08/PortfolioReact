function ProjectCard({ name, description, image, technologies, github }) {
    return (
        <div className="project-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="technologies">
                {technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                ))}
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );
}

export default ProjectCard;
