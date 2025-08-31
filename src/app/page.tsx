'use client';
import React from 'react'
// App.css removed - using globals.css instead
import Header from '../components/header/Header';
import Home from '../components/header/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Qualification from '../components/qualification/qualification'
import Project from '../components/project/Project';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

export default function HomePage() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About />
      <Skills />
      <Qualification />
      <Project />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}