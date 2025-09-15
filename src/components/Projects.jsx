import React from 'react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="projects scroll-animate">
      <div className="container">
        <h2 className="section-title scroll-animate">Featured Projects</h2>
        <p className="section-subtitle scroll-animate">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card scroll-animate hover-lift-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      <i className={tech.icon}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
