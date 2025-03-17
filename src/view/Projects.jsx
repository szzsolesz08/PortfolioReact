import React from 'react';
import { projects } from '../assets/data/Projects';
import ProjectCard from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Projects() {
    useScrollAnimation();
    return (
        <section className="projects-section" id="projects">
            <h2 className="animate-on-scroll">My Projects</h2>
            <div className="projects-grid stagger-children animate-on-scroll">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;