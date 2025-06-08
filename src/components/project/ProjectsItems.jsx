import React from 'react'

const ProjectsItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.Image} alt={item.title} className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.Link} className="project__button" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </div>
  )
}

export default ProjectsItems
