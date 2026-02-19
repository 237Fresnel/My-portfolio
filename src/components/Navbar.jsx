import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">FGK</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#experiences">Expériences</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
