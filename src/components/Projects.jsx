import React from 'react';
import { Camera, Calendar, TrendingUp, Database, Brain, BarChart3, ExternalLink,Award } from 'lucide-react';

const Projects = () => {
  const projets = [
    {
      title: "Projet d'analyse de données",
      period: "2026",
      description: "analyser les hits des dernières décennies pour dénicher les facteurs déterminants afin de faire un hit.",
      technologies: [ "Matplotlib", "Plotly", "Pandas", "sklearn"],
      status: "Terminé",
      icon: Award,
      color: "#4acff4",
      link: "https://colab.research.google.com/drive/18fPXEYYJ8aaLV6Lg93rYb8c9sGMEGjaI?authuser=3" 
    },
    {
      title: "Projet de Visualisation de Données",
      period: "2025",
      description: "Création de tableaux de bord interactifs et visualisations avancées pour l'analyse exploratoire de grands ensembles de données. Utilisation de PowerBI et Python pour générer des insights actionnables et des rapports dynamiques.",
      technologies: ["PowerBI", "Python", "Matplotlib", "Plotly", "Pandas"],
      status: "En cours",
      icon: BarChart3,
      color: "#10b981",
      link: "https://app.powerbi.com/links/bxPCEtYpDU?ctid=c52528b4-09d5-422b-bde4-32b5b0271115&pbi_source=linkShare" 
    },
    {
      title: "Système d'Hypervision avec 360Visio",
      period: "2025 – 2026",
      description: "Adaptation d'un système d'hypervision pour la surveillance d'événements en collaboration avec la startup 360Visio. Développement de solutions de monitoring temps réel.",
      technologies: ["Python", "Monitoring", "Real-time"],
      status: "Terminé",
      icon: TrendingUp,
      color: "#8b5cf6",
      link: "https://www.figma.com/make/XPzQAWdRj9n6sxLSzWOUcd/LVL-1---FigmaMake?p=f" 
    },
    {
      title: "VSA - Visual Surveillance Algorithm",
      period: "2024 – 2025",
      description: "Développement d'outils Python pour la collecte et traitement d'images, extraction de données via OpenPose, intégration base de données et visualisations pour analyse comportementale avec génération d'alertes automatiques.",
      technologies: ["Python", "OpenPose", "Computer Vision", "SQL", "Alertes"],
      status: "Terminé",
      icon: Camera,
      color: "#6366f1",
      link: "" 
    },
    {
      title: "Modèle de Prédiction du Lupus",
      period: "2024",
      description: "Exploration et préparation de données médicales, modélisation supervisée et évaluation de modèle prédictif pour prédire la probabilité de survenue du lupus. Déploiement avec Flask.",
      technologies: ["Python", "Scikit-learn", "Flask", "ML"],
      status: "Terminé",
      icon: Brain,
      color: "#a78bfa",
      link: "https://colab.research.google.com/drive/1FPA7KvlNZQ_RiDH3aIyTqbxggs0GXND5?authuser=1" 
    },
    {
      title: "Challenge Indabax - Data Exploration",
      period: "2025",
      description: "Nettoyage, exploration et visualisation de données pour un challenge académique. Préparation complète de datasets et création de visualisations interactives.",
      technologies: ["Python", "Pandas"],
      status: "Terminé",
      icon: Database,
      color: "#4facfe",
      link: "https://colab.research.google.com/drive/1M2LWsvhd3yHq8fgkHnHAWv8HrbyazWhv?authuser=1" 
    }
  ];

  return (
    <section id="projets" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projets Académiques</h2>
          <p className="section-subtitle">Projets data science et machine learning</p>
        </div>
        
        <div className="projects-grid">
          {projets.map((projet, index) => {
            const IconComponent = projet.icon;
            return (
              <a 
                key={index} 
                href={projet.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card"
              >
                <div className="project-header">
                  <div className="project-icon" style={{background: projet.color}}>
                    <IconComponent size={28} color="white" />
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">
                      {projet.title}
                      <ExternalLink size={18} className="project-link-icon" />
                    </h3>
                    <div>
                      <span className="project-period">
                        <Calendar size={14} />
                        {projet.period}
                      </span>
                      <span className={`project-status ${projet.status === 'En cours' ? 'status-active' : 'status-completed'}`}>
                        {projet.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="project-description">{projet.description}</p>
                <div className="project-technologies">
                  {projet.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
