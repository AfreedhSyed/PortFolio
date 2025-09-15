import React from 'react';
import { experience } from '../constants';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const Experience = () => {
  useScrollAnimations();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title scroll-animate">Experience & Education</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <div key={item.id} className="timeline-item scroll-animate">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-left">
                    <h3 className="experience-company">{item.company}</h3>
                    <h4 className="experience-position">{item.position}</h4>
                  </div>
                  <div className="experience-right">
                    <div className="experience-duration">{item.duration}</div>
                    <div className="experience-location">{item.location}</div>
                  </div>
                </div>
                <p className="experience-description">{item.description}</p>
                {item.achievements && (
                  <div className="experience-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.technologies && (
                  <div className="experience-technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
