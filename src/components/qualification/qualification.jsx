import React, {useState} from 'react'
import './qualification.css'
import Certification from "../../assets/Certification.pdf";



const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualication__tabs">
                <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex ' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon">Education</i>
                </div>

                <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ?'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Phatthalung School</h3>
                            <span className="qualification__subtitle">High School Intensive English Programs</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2012 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                     <div className="qualification__data">
                        <div></div>     
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bangkok University</h3>
                            <span className="qualification__subtitle">Bachelor of Engineering Multimedia and Entertainment Engineering</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2019 - 2023
                            </div>
                        </div>
                    </div>

                     <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Westride Bootcamp Full-Stack Developer</h3>
                            <span className="qualification__subtitle">Learning Full-Stack Development</span>
                            <a download = '' href = {Certification}>Download Certificate</a>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                 <div className={toggleState === 2 ?'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">The Developing Interactive Drum For Recording And Control Game (Senior Project)</h3>
                            <span className="qualification__subtitle">Objectives <br/>- To develop interactive drums which can adapt with AI:Audio Addictive Drums 2 <br/>- To Future the interactive innovation for working in multimedia and entertainment fields.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                     <div className="qualification__data">
                        <div></div>     
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Miracle Life Coach Company Limited</h3>
                            <span className="qualification__subtitle"><h4>Graphic Design & Editor (Intern) <br/></h4>• Designed a recommendatory diary ofb America's tourist attracti June - July 2022 ons and sale it on Amazon website <br/> • Video editing: overview and suggestion of product</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>June - July 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">🏎️ McLaren Mockup Website</h3>
                            <span className="qualification__subtitle">A modern, responsive landing page designed for McLaren. Built with HTML, CSS, and JavaScript, showcasing layout skills and clean UI presentation. Deployed on Render.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> November - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                     <div className="qualification__data">
                        <div></div>     
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">🧩 Pokémon API Web Application</h3>
                            <span className="qualification__subtitle">A responsive React application that fetches and displays Pokémon data from a public API. Built with modern React practices and deployed on Render.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>October - 2024
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">🎬 Movie Store Web Application</h3>
                            <span className="qualification__subtitle">A full-featured movie store web application built with React. Users can browse and search movies via the TMDB API, add them to a cart, and receive quantity-based discounts. The app uses local storage to persist cart state across sessions.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> March - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Qualification