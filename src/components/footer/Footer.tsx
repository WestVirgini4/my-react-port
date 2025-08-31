import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Korramis</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/jamyjamssig.exe/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-instagram"></i>
                 </a>

                 <a href="https://www.facebook.com/korramis.katesaeng" className="home__social-icon" target="_blank" rel="noreferrer">
                     <i className="uil uil-facebook-f"></i>
                 </a>

                <a href="https://github.com/WestVirgini4" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className='footer__copy'>Korramis All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer