import React from 'react';
import { Database, Brain, Terminal, Sparkles, Book, Layers } from 'lucide-react';

const Competences = () => {
  const competences = {
    "Analyse de données": {
      items: ["SQL (intermédiaire)", "Python (pandas, numpy, sklearn)", "PowerBI(Tableaux basiques)", "Excel", "Rédaction scientifique"],
      icon: Database
    },
    "Machine Learning": {
      items: ["Feature engineering", "Classification supervisée", "Classification non supervisée", "Modélisation prédictive", "Déploiement (Flask)"],
      icon: Brain
    },
    "Outils & Technologies": {
      items: ["Jupyter", "VSCode", "Git/GitHub", "Overleaf (LaTeX)", "Django (débutante)", "MySQL"],
      icon: Terminal
    },
    "Langages de programmation": {
      items: ["Java", "Python", "C", "Prolog", "JavaScript"],
      icon: Layers
    },
    "Soft Skills": {
      items: ["Autonome", "Résolution de problèmes", "Communication claire", "Travail en équipe", "Organisation", "Curiosité"],
      icon: Sparkles
    },
    "Langues": {
      items: ["Français (langue maternelle)", "Anglais (B2 - Intermédiaire)"],
      icon: Book
    }
  };

  const interets = [
    { 
      icon: "🎵", 
      text: "Musique",
      description: "La musique comme source d'inspiration et de créativité.",
      /*link: "https://spotify.com/placeholder" */
    },
    { 
      icon: "📚", 
      text: "Lecture",
      description: "Passionnée par la littérature scientifique, les romans contemporains et les essais sur la technologie et l'innovation.",
      /*link: "https://goodreads.com/placeholder" */
    },
    { 
      icon: "🍳", 
      text: "Cuisine",
      description: "miam-miam",
      /*link: "https://cooking-blog.com/placeholder*/
    },
    { 
      icon: "🧶", 
      text: "Tricotage",
      description: "Passionnée par le tricot et la création de vêtements à la main.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7394033075380195328/?originTrackingId=HY913TLu%2FB89oDXeysR95g%3D%3D" 
    },
    { 
      icon: "🌊", 
      text: "Écologie",
      description: "Participation à la 3e édition du Challenge Convergence de l'IMT « Mer, sea tech & économie bleue ». Engagement pour un avenir durable.",
      link: "https://www.imt.fr/challenge-convergence/"
    }
  ];

  return (
    <section id="competences" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">Technologies et savoir-faire</p>
        </div>
        
        <div className="competences-grid">
          {Object.entries(competences).map(([category, data], index) => {
            const IconComponent = data.icon;
            return (
              <div key={index} className="competence-category">
                <h3 className="category-title">
                  <div className="category-icon">
                    <IconComponent size={20} />
                  </div>
                  {category}
                </h3>
                <div className="competence-list">
                  {data.items.map((item, i) => (
                    <div key={i} className="competence-item">{item}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Centres d'Intérêts */}
        <div style={{marginTop: '6rem'}}>
          <div className="section-header">
            <h2 className="section-title">Centres d'Intérêts</h2>
            <p className="section-subtitle">Ce qui me passionne au quotidien</p>
          </div>
          
          <div className="interets-grid">
            {interets.map((interet, index) => (
              <a 
                key={index} 
                href={interet.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="interet-card"
              >
                <div className="interet-tooltip">
                  <p className="interet-description">{interet.description}</p>
                </div>
                <span className="interet-icon">{interet.icon}</span>
                <div className="interet-text">{interet.text}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
