'use client';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import ProjectsItems from './ProjectsItems'

// Define types
type ProjectData = {
  id: number;
  Image: string;
  title: string;
  category: string;
  description: string;
  demoLink: string;
  githubLink: string;
  techStack: string[];
};

type NavItem = {
  name: string;
};

const Projects = () => {
    const [item, setItem] = useState<NavItem>({name: "all"});
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
      if(item.name === "all") {
        setProjects(projectsData);
      }

      else {
        const newProjects = projectsData.filter((project) => {
          return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects);
      }
    }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    setItem({ name: target.textContent?.toLowerCase() || "" });
    setActive(index);
    };
  return (
    <div>
      <div className="project__filters">
      {projectsNav.map((item, index) => {
        return (
            <span  onClick={(e) =>{
                handleClick(e, index)
            }}
             className={`${active === index ? 'active-work' :""}project__item`} key={index}>{item.name}</span>  
        )
      })}
    </div>

    <div className="project__container container grid">
      {projects.map((project) => {
          return <ProjectsItems item={project} key={project.id} />;
      })}
    </div>
    </div>
  )
}

export default Projects