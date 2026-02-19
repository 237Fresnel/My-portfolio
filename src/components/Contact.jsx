import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-cta">
            <h2 className="cta-title">Travaillons Ensemble</h2>
            <p className="cta-description">
              Je suis actuellement à la recherche d'un stage de 4 mois à partir d'avril 2026 et d'une alternance d'1 an dès septembre 2026. N'hésitez pas à me contacter pour discuter de vos projets !
            </p>
            <div className="cta-buttons">
              <a href="mailto:fresnel.kengne_tueguem@mines-albi.fr" className="cta-btn cta-btn-primary">
                <Mail size={20} />
                M'envoyer un email
              </a>
              <a href="https://www.linkedin.com/in/fresnel-kengne-339647265" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="profile-card">
            <div className="contact-info">
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif'}}>Informations de Contact</h3>
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
              <div className="contact-item">
                <Linkedin size={20} />
                <a href="https://www.linkedin.com/in/fresnel-kengne-339647265" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                  @Fresnel Kengne
                </a>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <a href="https://github.com/237Fresnel" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                  @237Fresnel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
