import React, { useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">FGK</div>
        <div className="nav-right">
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <li><a href="#accueil" onClick={closeMenu}>Accueil</a></li>
            <li><a href="#projets" onClick={closeMenu}>Projets</a></li>
            <li><a href="#experiences" onClick={closeMenu}>Expériences</a></li>
            <li><a href="#formations" onClick={closeMenu}>Formations</a></li>
            <li><a href="#competences" onClick={closeMenu}>Compétences</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="menu-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      </nav>
      {/* Overlay pour fermer le menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
    );
};

export default Navbar;