'use client';
import React, { useState, useEffect, useCallback } from 'react';
import "./headerNew.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-detect active section using Intersection Observer
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Theme toggle
    const toggleTheme = useCallback(() => {
        setIsDarkMode(prev => {
            const newMode = !prev;
            document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    }, []);

    // Load saved theme (client-side only)
    useEffect(() => {
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
            
            setIsDarkMode(shouldUseDark);
            document.documentElement.setAttribute('data-theme', shouldUseDark ? 'dark' : 'light');
        };

        // Only run on client side to avoid hydration mismatch
        initializeTheme();
    }, []);

    // Smooth scroll to section
    const scrollToSection = useCallback((href: string) => {
        const element = document.querySelector(href) as HTMLElement;
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const navItems = [
        { href: '#home', label: 'Home', icon: 'uil-home' },
        { href: '#about', label: 'About', icon: 'uil-user' },
        { href: '#skills', label: 'Skills', icon: 'uil-file-alt' },
        { href: '#qualification', label: 'Qualification', icon: 'uil-graduation-cap' },
        { href: '#portfolio', label: 'Portfolio', icon: 'uil-scenery' },
        { href: '#contact', label: 'Contact', icon: 'uil-message' }
    ];
    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav container">
                {/* Enhanced Logo */}
                <div className="nav__logo-wrapper">
                    <div className="nav__logo" onClick={() => scrollToSection('#home')}>
                        <div className="logo__icon">
                            <i className="bx bx-code-alt"></i>
                        </div>
                        <div className="logo__text">
                            <span className="logo__name">Korramis</span>
                            <span className="logo__subtitle">Portfolio</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className={`nav__menu ${isMenuOpen ? 'nav__menu-open' : ''}`}>
                    <ul className="nav__list">
                        {navItems.map((item) => (
                            <li key={item.href} className="nav__item">
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className={`nav__link ${
                                        activeNav === item.href ? 'nav__link-active' : ''
                                    }`}
                                >
                                    <i className={`uil ${item.icon} nav__icon`}></i>
                                    <span className="nav__text">{item.label}</span>
                                    <div className="nav__indicator"></div>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Close Button */}
                    <button className="nav__close" onClick={toggleMenu}>
                        <i className="uil uil-times"></i>
                    </button>
                </div>

                {/* Right Side Controls */}
                <div className="nav__controls">
                    {/* Theme Toggle */}
                    <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                        <div className="theme-toggle__track">
                            <div className={`theme-toggle__thumb ${isDarkMode ? 'theme-toggle__thumb-dark' : ''}`}>
                                <i className={`uil ${isDarkMode ? 'uil-moon' : 'uil-sun'}`}></i>
                            </div>
                        </div>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="nav__toggle" onClick={toggleMenu}>
                        <div className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="nav__overlay" onClick={toggleMenu}></div>
            )}
        </header>
    );
}

export default Header