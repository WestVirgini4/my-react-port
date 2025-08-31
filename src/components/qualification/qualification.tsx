'use client';
import React, { useState } from 'react';
import './qualificationNew.css';

// Use string path for Next.js static assets
const Certification = "/my-react-port/assets/Certification.pdf";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

    const educationData = [
        {
            year: "2012-2018",
            title: "High School Diploma",
            subtitle: "Intensive English Programs",
            institution: "Phatthalung School",
            description: "Completed high school with focus on English language programs",
            icon: "bx-school"
        },
        {
            year: "2019-2023",
            title: "Bachelor's Degree",
            subtitle: "Multimedia & Entertainment Engineering",
            institution: "Bangkok University",
            description: "Specialized in multimedia technologies, digital media, and interactive systems",
            icon: "bx-graduation"
        },
        {
            year: "2024",
            title: "Full-Stack Bootcamp",
            subtitle: "Web Development Program",
            institution: "Westride Development",
            description: "Intensive training in modern web technologies and full-stack development",
            icon: "bx-code-alt",
            certificate: Certification
        }
    ];

    const experienceData = [
        {
            year: "June 2025 - Present",
            title: "eQNode Earthquake Monitoring System",
            subtitle: "Full-Stack Developer",
            institution: "Real-time earthquake monitoring dashboard with comprehensive sensor data management and alert system",
            description: "Real-time earthquake monitoring system with sensor data visualization and alert management",
            icon: "bx-planet",
            link: "https://eqnode.cloud/signin"
        },
        {
            year: "June-July 2022",
            title: "Graphic Design & Video Editor",
            subtitle: "Internship Position",
            institution: "Miracle Life Coach Company",
            description: "Designed tourist attraction diary for Amazon marketplace and created product overview videos",
            icon: "bx-palette"
        },
        {
            year: "2022-2023",
            title: "Interactive Drum System",
            subtitle: "Senior Project",
            institution: "Bangkok University",
            description: "Developed interactive drums compatible with AI Audio Addictive Drums 2 for multimedia entertainment",
            icon: "bx-music"
        },
        {
            year: "October 2024",
            title: "Pokémon API Application",
            subtitle: "React Web App",
            institution: "Personal Project",
            description: "Built responsive React application fetching Pokémon data with modern React practices",
            icon: "bx-game"
        },
        {
            year: "November 2024",
            title: "McLaren Landing Page",
            subtitle: "Frontend Project",
            institution: "Personal Project", 
            description: "Modern responsive landing page using HTML, CSS, JavaScript with clean UI design",
            icon: "bx-car"
        },
        {
            year: "March 2025",
            title: "Movie Store Application",
            subtitle: "Full-Stack Project",
            institution: "Personal Project",
            description: "Complete movie store with TMDB API integration, cart system, and local storage persistence",
            icon: "bx-movie"
        }
    ];
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                {/* Modern Tab Buttons */}
                <div className="qualification__tabs">
                    <button 
                        className={`qualification__button ${activeTab === 'education' ? 'qualification__active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        <div className="qualification__button-content">
                            <i className="bx bx-graduation qualification__icon"></i>
                            <span>Education</span>
                        </div>
                    </button>

                    <button 
                        className={`qualification__button ${activeTab === 'experience' ? 'qualification__active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <div className="qualification__button-content">
                            <i className="bx bx-briefcase-alt qualification__icon"></i>
                            <span>Experience</span>
                        </div>
                    </button>
                </div>

                {/* Content Sections */}
                <div className="qualification__sections">
                    {/* Education Content */}
                    <div className={`qualification__content ${activeTab === 'education' ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__timeline">
                            {educationData.map((item, index) => (
                                <div key={index} className="qualification__item">
                                    <div className="qualification__marker">
                                        <i className={`bx ${item.icon}`}></i>
                                    </div>
                                    <div className="qualification__card">
                                        <div className="qualification__year">{item.year}</div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <h4 className="qualification__subtitle">{item.subtitle}</h4>
                                        <p className="qualification__institution">{item.institution}</p>
                                        <p className="qualification__description">{item.description}</p>
                                        {item.certificate && (
                                            <a 
                                                href={item.certificate} 
                                                download="Westride_Certificate.pdf"
                                                className="qualification__certificate"
                                            >
                                                <i className="bx bx-download"></i>
                                                Download Certificate
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Content */}
                    <div className={`qualification__content ${activeTab === 'experience' ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__timeline">
                            {experienceData.map((item, index) => (
                                <div key={index} className="qualification__item">
                                    <div className="qualification__marker">
                                        <i className={`bx ${item.icon}`}></i>
                                    </div>
                                    <div className="qualification__card">
                                        <div className="qualification__year">{item.year}</div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <h4 className="qualification__subtitle">{item.subtitle}</h4>
                                        <p className="qualification__institution">{item.institution}</p>
                                        <p className="qualification__description">{item.description}</p>
                                        {item.link && (
                                            <a 
                                                href={item.link} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="qualification__link"
                                            >
                                                <i className="bx bx-link-external"></i>
                                                Visit Project
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification