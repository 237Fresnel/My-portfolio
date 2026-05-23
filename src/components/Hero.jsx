import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Info } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>KENGNE TUEGUEM Fresnel Grace</h1>
          <div className="subtitle">Étudiante Ingénieure Data</div>
          <p className="description">
Étudiante ingénieure en double diplôme, actuellement en Master 1 en Ingénierie de la Donnée, avec un fort intérêt pour le Big Data et l’analyse de données, je recherche une alternance me permettant d’acquérir de nouvelles compétences et d’évoluer dans un environnement orienté data. 
Motivée, je souhaite intégrer une équipe dynamique afin d’apprendre et de mettre en pratique mes connaissances.
          </p>          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Projets Data</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
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
            <div className="profile-photo-wrapper">
  <div className="profile-photo-container">
    {/* OPTION 1: Si vous avez une photo, décommentez la ligne ci-dessous et commentez le placeholder */}
    <img src="/photo-profile.jpeg" alt="KENGNE TUEGUEM Fresnel Grace" className="profile-photo" /> 
    
    {/* OPTION 2: Placeholder avec initiales (actuel) */}
    {/* <div className="profile-photo-placeholder">FGK</div> */}
  </div>
  
  {/* Cercles animés */}
  <div className="photo-ring photo-ring-1"></div>
  <div className="photo-ring photo-ring-2"></div>
  <div className="photo-ring photo-ring-3"></div>
</div>

            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <span>tueguemfresnel@gmail.com</span>
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
                Disponible pour alternance 
                <div className="alternance-tooltip">
                  <div className="tooltip-title">
                    <Info size={18} />
                    Calendrier d'alternance
                  </div>
                  <div className="tooltip-content">
                    <div className="tooltip-item">Dernière semaine de Toussaint + 3 prochaines semaines en entreprise</div>
                    <div className="tooltip-item">Semaines de Noël + semaine suivante en entreprise</div>
                    <div className="tooltip-item">Stage PFE de 6-7 mois en entreprise à partir de février 2027</div>
                  </div>
                </div>
              </div>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                Alternance 1 an dès le 31 août 2026
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
