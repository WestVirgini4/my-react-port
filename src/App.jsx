import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/qualification'
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
export const App = () => {
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

export default App;

