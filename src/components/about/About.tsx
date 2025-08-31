'use client';
import React, { useState } from 'react'
import "./aboutNew.css";
import Info from "./Info";
// Use string paths for Next.js static assets
const AboutImg = "/my-react-port/assets/IMG_4972.JPG";
const CV = "/my-react-port/assets/korramis.pdf";

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/WestVirgini4",
      icon: "bxl-github",
      color: "#333"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "bxl-linkedin",
      color: "#0077b5"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jz.xy0s_/",
      icon: "bxl-instagram",
      color: "#e4405f"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/korramis.katesaeng",
      icon: "bxl-facebook",
      color: "#1877f2"
    }
  ];


  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      
      <div className="about__container container">
        {/* Profile Section */}
        <div className="about__profile">
          <div className="about__image-wrapper">
            <div className={`about__image-container ${isImageLoaded ? 'loaded' : ''}`}>
              <img 
                src={AboutImg} 
                alt="Korramis - Full Stack Developer" 
                className="about__img"
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="about__image-overlay">
                <div className="about__image-border"></div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="about__social">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="about__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color, '--delay': `${index * 0.1}s` } as React.CSSProperties}
                  title={social.name}
                >
                  <i className={`bx ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="about__content">
          {/* Statistics */}
          <Info />

          {/* Description */}
          <div className="about__text">
            <p className="about__description">
              I&apos;m a passionate <span className="highlight">Full Stack Developer</span> with a background in 
              Multimedia & Entertainment Engineering. I specialize in creating modern, 
              responsive web applications using cutting-edge technologies.
            </p>
            <p className="about__description">
              My journey combines technical expertise with creative problem-solving, 
              focusing on user experience and clean, maintainable code.
            </p>
          </div>

          {/* CV Download Button */}
          <div className="about__actions">
            <a 
              download="Korramis_CV.pdf" 
              href={CV} 
              className="cv-button"
              onClick={handleDownload}
            >
              <div className="cv-button__content">
                <div className="cv-button__icon">
                  <i className="bx bx-download"></i>
                </div>
                <div className="cv-button__text">
                  <span className="cv-button__title">Download CV</span>
                  <span className="cv-button__subtitle">
                    {downloadCount > 0 ? `Downloaded ${downloadCount} times` : 'PDF Format'}
                  </span>
                </div>
              </div>
              <div className="cv-button__arrow">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About