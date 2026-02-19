import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Info } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Fresnel Grace Kengne</h1>
          <div className="subtitle">Étudiante Ingénieure Data</div>
          <p className="description">
Passionnée par l’analyse de données, la modélisation prédictive et la visualisation, je souhaite contribuer à des projets innovants guidés par la donnée. Etudiante en Ingénierie de la Donnée de l’IMT Mines Albi, je suis ouverte à approfondir mes compétences dans tout domaine qui me sera confié et à relever de nouveaux défis avec rigueur et curiosité.          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Projet Data</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Expériences</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Diplôme</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-photo-container">
              {/* OPTION 1: Si vous avez une photo, décommentez la ligne ci-dessous et commentez le placeholder */}
              {/* <img src="/photo-profile.jpg" alt="Fresnel Grace Kengne" className="profile-photo" /> */}
              
              {/* OPTION 2: Placeholder avec initiales (actuel) */}
              <div className="profile-photo-placeholder">FGK</div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <span>fresnel.kengne_tueguem@mines-albi.fr</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+33 7 82 17 06 09</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Albi, France</span>
              </div>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/fresnel-kengne-339647265" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/237Fresnel" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Github size={24} />
                </a>
              </div>

              <div className="availability-badge">
                Disponible pour stage/alternance
                <div className="alternance-tooltip">
                  <div className="tooltip-title">
                    <Info size={18} />
                    Calendrier d'alternance
                  </div>
                  <div className="tooltip-content">
                    <div className="tooltip-item">Dernière semaine de Toussaint + 3 prochaines semaines en entreprise</div>
                    <div className="tooltip-item">Semaines de Noël + semaine suivante en entreprise</div>
                    <div className="tooltip-item">Stage PFE de 6-7 mois à partir de février 2027</div>
                  </div>
                </div>
              </div>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                Stage 4 mois dès avril 2026<br/>
                Alternance 1 an dès septembre 2026
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
