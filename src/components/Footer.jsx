import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Toujours en apprentissage, toujours en création. Construisons des choses incroyables ensemble.
        </p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/fresnel-kengne-339647265" target="_blank" rel="noopener noreferrer" className="social-btn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/237Fresnel" target="_blank" rel="noopener noreferrer" className="social-btn">
            <Github size={20} />
          </a>
        </div>
        <p className="footer-text" style={{marginTop: '1rem'}}>© 2026 - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
