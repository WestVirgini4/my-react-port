'use client';
import React, { useState, useEffect } from 'react';
import { skillsData } from './SkillsData';
import "./skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll animation
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % skillsData.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToCategory = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <section className="skills section" id='skills'>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div 
        className="skills__container container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Auto-scroll Skills Content */}
        <div className="skills__content-container">
          <div 
            className="skills__content-slider"
            style={{ transform: `translateX(-${activeCategory * 100}%)` }}
          >
            {skillsData.map((category) => (
              <div key={category.id} className="skills__content">
                <div className="skills__header">
                  <i className={`${category.icon} skills__icon`}></i>
                  <div>
                    <h3 className="skills__title">{category.title}</h3>
                    <span className="skills__subtitle">{category.category}</span>
                  </div>
                </div>

                <div className="skills__box">
                  <div className="skills__group">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="skills__data">
                        <div className="skills__icon-wrapper">
                          <i className={`bx ${skill.icon} skills__tech-icon`} title={skill.name}></i>
                        </div>
                        <div className="skills__info">
                          <h3 className="skills__name">{skill.name}</h3>
                          <span className={`skills__level skills__level-${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="skills__indicators">
          {skillsData.map((_, index) => (
            <button
              key={index}
              className={`skills__dot ${activeCategory === index ? 'skills__dot-active' : ''}`}
              onClick={() => goToCategory(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;