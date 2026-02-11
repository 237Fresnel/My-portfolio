import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Code, Book, Briefcase, Award, Heart, Terminal, Sparkles, Sun, Moon, ExternalLink, Calendar, Folder, Users, TrendingUp, Database, Brain, Zap, CheckCircle, Target } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Secrétaire Générale Adjointe",
      company: "ENSPY",
      period: "2024 – 2025",
      description: "Organisation, communication stratégique, gestion d'équipe et autonomie dans un environnement académique exigeant.",
      tags: ["Leadership", "Communication", "Gestion d'équipe"],
      icon: Users
    },
    {
      title: "Professeure de cours particuliers",
      company: "Complétude, Toulouse",
      period: "Depuis 10/2025",
      description: "Accompagnement personnalisé d'élèves du primaire et secondaire avec adaptation pédagogique pour améliorer résultats et confiance.",
      tags: ["Pédagogie", "Suivi personnalisé"],
      icon: Book
    },
    {
      title: "Stage Enseignement Mathématiques",
      company: "Lycée de Ngoa Ekélé, Yaoundé",
      period: "01/2024 – 03/2024",
      description: "Plus de 120 heures de cours en classes de 6e, 4e, Première et Terminale. Transmission de concepts complexes, pédagogie et clarté de communication.",
      tags: ["Mathématiques", "120h de cours", "Pédagogie"],
      icon: Award
    },
    {
      title: "Stage Aide Magasinier",
      company: "Maison DG, Yaoundé",
      period: "07/2023 – 08/2023",
      description: "Gestion des stocks, organisation du dépôt et préparation des commandes. Découverte des systèmes d'information.",
      tags: ["Gestion", "Organisation"],
      icon: Briefcase
    },
    {
      title: "Soutien Scolaire",
      company: "Auto-entrepreneur, Yaoundé",
      period: "2020 – 2025",
      description: "Plus de 10 élèves accompagnés de la 6e à la Terminale en Mathématiques, Physique, Chimie et Informatique. Accompagnement personnalisé, logique analytique et rigueur méthodologique.",
      tags: ["Multi-matières", "10+ élèves", "Rigueur"],
      icon: Target
    }
  ];

  const projets = [
    {
      title: "Système d'Hypervision avec 360Visio",
      period: "2025 – 2026",
      description: "Adaptation d'un système d'hypervision pour la surveillance d'événements en collaboration avec la startup 360Visio. Développement de solutions de monitoring temps réel.",
      technologies: ["Python", "Monitoring", "Real-time"],
      status: "En cours",
      icon: TrendingUp,
      color: "#8b5cf6"
    },
    {
      title: "VSA - Visual Surveillance Algorithm",
      period: "2024 – 2025",
      description: "Développement d'outils Python pour la collecte et traitement d'images, extraction de données via OpenPose, intégration base de données et visualisations pour analyse comportementale avec génération d'alertes automatiques.",
      technologies: ["Python", "OpenPose", "Computer Vision", "SQL", "Alertes"],
      status: "Terminé",
      icon: Camera,
      color: "#6366f1"
    },
    {
      title: "Modèle de Prédiction du Lupus",
      period: "2024",
      description: "Exploration et préparation de données médicales, modélisation supervisée et évaluation de modèle prédictif pour prédire la probabilité de survenue du lupus. Déploiement avec Flask.",
      technologies: ["Python", "Scikit-learn", "Flask", "ML"],
      status: "Terminé",
      icon: Brain,
      color: "#a78bfa"
    },
    {
      title: "Challenge Indabax - Data Exploration",
      period: "2025",
      description: "Nettoyage, exploration et visualisation de données pour un challenge académique. Préparation complète de datasets et création de visualisations interactives.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      status: "Terminé",
      icon: Database,
      color: "#4facfe"
    }
  ];

  const formations = [
    {
      school: "IMT MINES ALBI",
      degree: "École d'ingénieur généraliste",
      location: "Albi, France",
      period: "2025 – 2027",
      focus: "Ingénierie de la Donnée en double diplôme",
      skills: ["Data Analysis", "Project Management", "Transition écologique"],
      courses: ["Machine Learning", "Analyse de données", "IA", "Systèmes formels"]
    },
    {
      school: "École Nationale Supérieure Polytechnique",
      degree: "Formation ingénieur",
      location: "Yaoundé, Cameroun",
      period: "2017 – 2020",
      focus: "Projets en analyse de données, IA et conception logicielle",
      skills: ["Data Science", "AI", "Software Design"],
      courses: ["Programmation web", "POO", "Base de données relationnelles"]
    },
    {
      school: "Université de Yaoundé I",
      degree: "Licence Mathématiques + DIPES I",
      location: "Yaoundé, Cameroun",
      period: "2021 – 2024",
      focus: "Mathématiques et Enseignement Secondaire",
      skills: ["Mathématiques", "Pédagogie"],
      courses: ["Probabilités et statistiques", "Analyse"]
    }
  ];

  const competences = {
    "Données & Analytics": {
      items: ["SQL (intermédiaire)", "Python (pandas, numpy, sklearn)", "PowerBI", "Tableau basics", "Excel (VBA)", "Rédaction scientifique"],
      icon: Database
    },
    "Machine Learning": {
      items: ["Classification supervisée", "Feature engineering", "Nettoyage de données", "Modélisation prédictive", "Déploiement (Flask)"],
      icon: Brain
    },
    "Outils & Technologies": {
      items: ["Jupyter", "VSCode", "Git/GitHub", "Overleaf (LaTeX)", "Django (débutante)", "MySQL"],
      icon: Terminal
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

  const certifications = [
    {
      title: "Programmation Orientée Objet en Java",
      year: "2024",
      icon: CheckCircle
    }
  ];

  const interets = [
    { icon: "🎵", text: "Musique" },
    { icon: "📚", text: "Lecture" },
    { icon: "🍳", text: "Cuisine" },
    { icon: "🧶", text: "Tricotage" },
    { icon: "🌊", text: "Écologie - Challenge Convergence IMT" }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`portfolio ${isDarkMode ? 'dark' : 'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #6366f1;
          --secondary: #8b5cf6;
          --accent: #a78bfa;
          --success: #10b981;
          --warning: #f59e0b;
        }

        /* Dark Theme - ANCIEN MODE SOMBRE (restauré) */
        .portfolio.dark {
          --bg-primary: #020617;
          --bg-secondary: #0f172a;
          --bg-tertiary: #1e293b;
          --text-primary: #f8fafc;
          --text-secondary: rgba(248, 250, 252, 0.8);
          --text-tertiary: rgba(248, 250, 252, 0.6);
          --border-color: rgba(99, 102, 241, 0.2);
          --shadow-color: rgba(0, 0, 0, 0.4);
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
          --gradient-3: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
          --card-bg: rgba(15, 23, 42, 0.6);
          --card-hover: rgba(99, 102, 241, 0.1);
        }

        /* Light Theme - NOUVEAU MODE CLAIR */
        .portfolio.light {
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #e2e8f0;
          --text-primary: #0f172a;
          --text-secondary: #334155;
          --text-tertiary: #64748b;
          --border-color: rgba(99, 102, 241, 0.3);
          --shadow-color: rgba(99, 102, 241, 0.1);
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          --gradient-3: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
          --card-bg: rgba(255, 255, 255, 0.8);
          --card-hover: rgba(99, 102, 241, 0.05);
      }

        body {
          font-family: 'Outfit', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          overflow-x: hidden;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .portfolio.dark body,
        .portfolio.dark {
          background: #020617 !important;
      }

        .portfolio.light body,
        .portfolio.light {
          background: #ffffff !important;
      }

        .portfolio {
          position: relative;
          min-height: 100vh;
        }

        /* Animated Background */
        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(167, 139, 250, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
          opacity: ${isDarkMode ? 1 : 0.5};
          transition: opacity 0.3s ease;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 2rem;
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          z-index: 100;
          transition: all 0.3s ease;
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-2);
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* Theme Toggle */
        .theme-toggle {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .theme-toggle:hover {
          background: var(--card-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px var(--shadow-color);
        }

        .theme-toggle svg {
          color: var(--primary);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
          margin-top: 80px;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease-out;
          font-family: 'Space Grotesk', sans-serif;
        }

        .hero-text .subtitle {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-weight: 600;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-text .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 10px 30px var(--shadow-color);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Space Grotesk', sans-serif;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          margin-top: 0.5rem;
        }

        .hero-visual {
          position: relative;
          animation: fadeIn 1s ease-out 0.4s both;
        }

        .profile-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 3rem;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 60px var(--shadow-color);
          position: relative;
          overflow: hidden;
        }

        .portfolio.dark .profile-card,
        .portfolio.dark .experience-card,
        .portfolio.dark .formation-card,
        .portfolio.dark .project-card,
        .portfolio.dark .competence-category,
        .portfolio.dark .interet-card,
        .portfolio.dark .certification-item {
          background: rgba(15, 23, 42, 0.95) !important;
          backdrop-filter: blur(30px);
      }

        .portfolio.light .profile-card,
        .portfolio.light .experience-card,
        .portfolio.light .formation-card,
        .portfolio.light .project-card,
        .portfolio.light .competence-category,
        .portfolio.light .interet-card,
        .portfolio.light .certification-item {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(30px);
      }

        .profile-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: var(--gradient-2);
          opacity: 0.05;
          transform: rotate(45deg);
        }

        .contact-info {
          position: relative;
          z-index: 1;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .contact-item svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--card-hover);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
        }

        .social-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px var(--shadow-color);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 50px;
          color: var(--success);
          font-weight: 600;
          margin-top: 2rem;
          animation: pulse 2s infinite;
        }

        .availability-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          animation: blink 1.5s infinite;
        }

        /* Section */
        .section {
          min-height: 100vh;
          padding: 6rem 2rem;
          position: relative;
          z-index: 1;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-tertiary);
        }

        /* Project Cards */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-2);
          transform: scaleY(0);
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px var(--shadow-color);
        }

        .project-card:hover::before {
          transform: scaleY(1);
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .project-info {
          flex: 1;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .project-period {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--card-hover);
          padding: 0.4rem 1rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-bottom: 0.5rem;
        }

        .project-status {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-left: 0.5rem;
        }

        .status-active {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-completed {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border: 1px solid var(--border-color);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: var(--card-hover);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.3s;
        }

        .tech-tag:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        /* Experience Cards */
        .experience-grid {
          display: grid;
          gap: 2rem;
        }

        .experience-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 2rem;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-2);
          transform: scaleY(0);
          transition: transform 0.3s;
        }

        .experience-card:hover {
          transform: translateX(10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px var(--shadow-color);
        }

        .experience-card:hover::before {
          transform: scaleY(1);
        }

        .experience-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--gradient-2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .experience-content {
          flex: 1;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .experience-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .experience-company {
          color: var(--primary);
          font-weight: 600;
        }

        .experience-period {
          background: var(--card-hover);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }

        .experience-description {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tag {
          padding: 0.5rem 1rem;
          background: var(--card-hover);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Formation Cards */
        .formation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .formation-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .formation-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: var(--gradient-2);
          opacity: 0;
          transition: opacity 0.3s;
          transform: rotate(45deg);
        }

        .formation-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px var(--shadow-color);
        }

        .formation-card:hover::after {
          opacity: 0.05;
        }

        .formation-content {
          position: relative;
          z-index: 1;
        }

        .formation-school {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .formation-degree {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .formation-location {
          color: var(--text-tertiary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .formation-period {
          display: inline-block;
          background: var(--card-hover);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-bottom: 1.5rem;
        }

        .formation-focus {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .formation-courses {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .courses-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Competences Grid */
        .competences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .competence-category {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
        }

        .competence-category:hover {
          border-color: var(--primary);
          box-shadow: 0 20px 40px var(--shadow-color);
          transform: translateY(-5px);
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .category-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--gradient-2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .competence-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .competence-item {
          padding: 0.75rem 1.25rem;
          background: var(--card-hover);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 500;
          transition: all 0.3s;
          cursor: default;
        }

        .competence-item:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--shadow-color);
        }

        /* Certifications */
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 3rem auto 0;
        }

        .certification-item {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s;
        }

        .certification-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px var(--shadow-color);
        }

        .certification-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--gradient-2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .certification-content {
          flex: 1;
        }

        .certification-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .certification-year {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          font-family: 'JetBrains Mono', monospace;
        }

        /* Interets */
        .interets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .interet-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s;
        }

        .interet-card:hover {
          transform: scale(1.05);
          border-color: var(--primary);
          box-shadow: 0 15px 35px var(--shadow-color);
        }

        .interet-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .interet-text {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-cta {
          text-align: center;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Space Grotesk', sans-serif;
        }

        .cta-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .cta-btn-primary {
          background: var(--gradient-2);
          color: white;
        }

        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px var(--shadow-color);
        }

        .cta-btn-secondary {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }

        .cta-btn-secondary:hover {
          background: var(--card-hover);
          transform: translateY(-3px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: var(--primary);
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
          }

          .nav-links {
            display: none;
          }

          .formation-grid,
          .competences-grid,
          .contact-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .experience-card {
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }
        }

        /* Footer */
        .footer {
          background: var(--card-bg);
          border-top: 1px solid var(--border-color);
          padding: 3rem 2rem;
          text-align: center;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-text {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .footer-heart {
          color: #ef4444;
          animation: pulse 1.5s infinite;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
      `}</style>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Fresnel Grace KENGNE TUEGUEM</h1>
            <div className="subtitle">Étudiante Ingénieure Data</div>
            <p className="description">
              Passionnée par l'analyse de données et la modélisation prédictive, je recherche à contribuer à des projets data-driven innovants. Double diplôme en Ingénierie de la Donnée à IMT MINES ALBI.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Projets Data</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Expériences</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Diplômes</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
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
                  Disponible pour stage
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

      {/* Projects Section */}
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
                <div key={index} className="project-card">
                  <div className="project-header">
                    <div className="project-icon" style={{background: projet.color}}>
                      <IconComponent size={28} color="white" />
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{projet.title}</h3>
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
                </div>
              );
            })}
          </div>

          {/* Compétences Techniques Acquises */}
          <div style={{marginTop: '4rem', textAlign: 'center'}}>
            <h3 style={{fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Space Grotesk, sans-serif'}}>
              Compétences Techniques Acquises
            </h3>
            <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8'}}>
              Collecte, nettoyage, exploration, préparation et visualisation des données. Mise en place de modèles prédictifs et déploiement avec Flask (Python).
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Expériences Professionnelles</h2>
            <p className="section-subtitle">Mon parcours professionnel et mes réalisations</p>
          </div>
          
          <div className="experience-grid">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="experience-card">
                  <div className="experience-icon">
                    <IconComponent size={28} />
                  </div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-title">{exp.title}</h3>
                        <div className="experience-company">{exp.company}</div>
                      </div>
                      <div className="experience-period">{exp.period}</div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="tags">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Formations</h2>
            <p className="section-subtitle">Mon parcours académique</p>
          </div>
          
          <div className="formation-grid">
            {formations.map((formation, index) => (
              <div key={index} className="formation-card">
                <div className="formation-content">
                  <h3 className="formation-school">{formation.school}</h3>
                  <div className="formation-degree">{formation.degree}</div>
                  <div className="formation-location">{formation.location}</div>
                  <div className="formation-period">{formation.period}</div>
                  <p className="formation-focus">{formation.focus}</p>
                  <div className="tags">
                    {formation.skills.map((skill, i) => (
                      <span key={i} className="tag">{skill}</span>
                    ))}
                  </div>
                  {formation.courses && (
                    <div className="formation-courses">
                      <div className="courses-label">Cours suivis</div>
                      <div className="tags">
                        {formation.courses.map((course, i) => (
                          <span key={i} className="tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certifications-list">
            <h3 style={{fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif'}}>
              Certifications
            </h3>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="certification-item">
                  <div className="certification-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="certification-content">
                    <div className="certification-title">{cert.title}</div>
                    <div className="certification-year">{cert.year}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competences Section */}
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
                <div key={index} className="interet-card">
                  <span className="interet-icon">{interet.icon}</span>
                  <div className="interet-text">{interet.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Réalisé par Fresnel Grace KENGNE TUEGUEM
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
    </div>
  );
};

export default Portfolio;
