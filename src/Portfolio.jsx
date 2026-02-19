import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`portfolio ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Experiences />
      <Formations />
      <Competences />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;