import React from 'react'

const Info = () => {
  const stats = [
    {
      icon: 'bx-award',
      title: 'Experience',
      subtitle: '1+ Years Coding',
      count: '365+'
    },
    {
      icon: 'bx-briefcase-alt', 
      title: 'Projects',
      subtitle: 'Completed Works',
      count: '10+'
    },
    {
      icon: 'bx-code-alt',
      title: 'Technologies',
      subtitle: 'Skills Mastered',
      count: '15+'
    }
  ];

  return (
    <div className='about__info grid'>
      {stats.map((stat, index) => (
        <div key={index} className="about__box">
          <i className={`bx ${stat.icon} about__icon`}></i>
          <h3 className="about__title">{stat.title}</h3>
          <span className="about__subtitle">{stat.subtitle}</span>
          <div className="about__count">{stat.count}</div>
        </div>
      ))}
    </div>
  )
}

export default Info