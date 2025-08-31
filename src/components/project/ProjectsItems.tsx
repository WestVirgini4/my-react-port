import React from 'react'

// Define the type for project item
type ProjectItem = {
  id: number;
  Image: string;
  title: string;
  category: string;
  description: string;
  demoLink: string;
  githubLink: string;
  techStack: string[];
};

type ProjectsItemsProps = {
  item: ProjectItem;
};

const ProjectsItems = ({ item }: ProjectsItemsProps) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="project__img-container">
        <img src={item.Image} alt={item.title} className="project__img" loading="lazy" />
        <div className="project__overlay">
          <div className="project__buttons">
            <a href={item.demoLink} className="project__button project__button--demo" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i> Demo
            </a>
            <a href={item.githubLink} className="project__button project__button--github" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i> Code
            </a>
          </div>
        </div>
      </div>
      
      <div className="project__content">
        <h3 className="project__title">{item.title}</h3>
        <p className="project__description">{item.description}</p>
        
        <div className="project__tech-stack">
          {item.techStack.map((tech, index) => (
            <span key={index} className="project__tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsItems
