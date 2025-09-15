import React from 'react';
import { skills } from '../constants';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const Skills = () => {
  useScrollAnimations();

  // Flatten all skills from all categories into one array
  const allSkills = skills.flatMap(category => category.items);

  return (
    <section id="skills" className="skills scroll-animate">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-unified-grid">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item-unified">
              <div className="skill-icon-unified">
                <i className={skill.icon}></i>
              </div>
              <span className="skill-name-unified">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
