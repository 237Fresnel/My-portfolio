import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Code, Book, Briefcase, Award, Heart, Terminal, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Professeure de cours particuliers",
      company: "Complétude, Toulouse",
      period: "Depuis 10/2025",
      description: "Accompagnement personnalisé d'élèves du primaire et secondaire avec adaptation pédagogique pour améliorer résultats et confiance.",
      tags: ["Pédagogie", "Suivi personnalisé"]
    },
    {
      title: "Stage Enseignement Mathématiques",
      company: "Lycée de Ngoa Ekélé, Yaoundé",
      period: "01/2024 – 03/2024",
      description: "Plus de 120 heures de cours en classes de 6e, 4e, Première et Terminale. Développement de compétences pédagogiques.",
      tags: ["Mathématiques", "120h de cours"]
    },
    {
      title: "Assistant Support Informatique",
      company: "Maison DG, Yaoundé",
      period: "07/2023 – 08/2023",
      description: "Collaboration maintenance informatique, support technique et découverte des systèmes d'information.",
      tags: ["IT Support", "Maintenance"]
    },
    {
      title: "Soutien Scolaire",
      company: "Yaoundé, Cameroun",
      period: "09/2021 – 06/2025",
      description: "Plus de 10 élèves accompagnés de la 6e à la Terminale en Mathématiques, Physique, Chimie et Informatique.",
      tags: ["Multi-matières", "10+ élèves"]
    }
  ];

  const formations = [
    {
      school: "IMT MINES ALBI",
      degree: "École d'ingénieur généraliste",
      location: "Albi, France",
      period: "2025 – 2027",
      focus: "Ingénierie de la Donnée en double diplôme",
      skills: ["Data Analysis", "Project Management", "Transition écologique"]
    },
    {
      school: "École Nationale Supérieure Polytechnique",
      degree: "Formation ingénieur",
      location: "Yaoundé, Cameroun",
      period: "2017 – 2020",
      focus: "Projets en analyse de données, IA et conception logicielle",
      skills: ["Data Science", "AI", "Software Design"]
    },
    {
      school: "Université de Yaoundé I",
      degree: "Licence Mathématiques + DIPES I",
      location: "Yaoundé, Cameroun",
      period: "2021 – 2024",
      focus: "Mathématiques et Enseignement Secondaire",
      skills: ["Mathématiques", "Pédagogie"]
    }
  ];

  const competences = {
    "Programmation": ["Python", "Java", "C", "JavaScript", "React", "PHP", "HTML/CSS", "LaTeX", "Prolog", "Matlab"],
    "Data & Outils": ["PowerBI", "Jupyter Notebook", "Google Colab", "MySQL", "Excel", "VSCode", "Overleaf"],
    "Soft Skills": ["Travail en équipe", "Autonomie", "Curiosité", "Discipline", "Organisation", "Polyvalence"],
    "Langues": ["Français (natif)", "Anglais (B2)"]
  };

  const interets = [
    { icon: "🎵", text: "Musique" },
    { icon: "📚", text: "Lecture" },
    { icon: "🍳", text: "Cuisine" },
    { icon: "🧶", text: "Tricotage" },
    { icon: "🌊", text: "Écologie - Challenge Convergence IMT" }
  ];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #6366f1;
          --secondary: #8b5cf6;
          --accent: #a78bfa;
          --dark: #0f172a;
          --darker: #020617;
          --light: #f8fafc;
          --white: #ffffff;
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
          --gradient-3: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
        }

        body {
          font-family: 'Outfit', sans-serif;
          background: var(--darker);
          color: var(--light);
          overflow-x: hidden;
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
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 2rem;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
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
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--light);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          color: var(--accent);
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
        }

        .hero-text .subtitle {
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-weight: 600;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-text .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(248, 250, 252, 0.8);
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
          background: rgba(99, 102, 241, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: all 0.3s;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(248, 250, 252, 0.7);
          margin-top: 0.5rem;
        }

        .hero-visual {
          position: relative;
          animation: fadeIn 1s ease-out 0.4s both;
        }

        .profile-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 3rem;
          border: 1px solid rgba(99, 102, 241, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
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
          color: var(--light);
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
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s;
          cursor: pointer;
        }

        .social-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 50px;
          color: #4ade80;
          font-weight: 600;
          margin-top: 2rem;
          animation: pulse 2s infinite;
        }

        .availability-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #4ade80;
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
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(248, 250, 252, 0.6);
        }

        /* Experience Cards */
        .experience-grid {
          display: grid;
          gap: 2rem;
        }

        .experience-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
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
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .experience-card:hover::before {
          transform: scaleY(1);
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
          color: var(--light);
          margin-bottom: 0.5rem;
        }

        .experience-company {
          color: var(--primary);
          font-weight: 600;
        }

        .experience-period {
          background: rgba(99, 102, 241, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--accent);
        }

        .experience-description {
          color: rgba(248, 250, 252, 0.8);
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
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }

        /* Formation Cards */
        .formation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .formation-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
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
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
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
          color: var(--light);
          margin-bottom: 0.5rem;
        }

        .formation-degree {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .formation-location {
          color: rgba(248, 250, 252, 0.6);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .formation-period {
          display: inline-block;
          background: rgba(99, 102, 241, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .formation-focus {
          color: rgba(248, 250, 252, 0.8);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        /* Competences Grid */
        .competences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .competence-category {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: all 0.3s;
        }

        .competence-category:hover {
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--light);
          display: flex;
          align-items: center;
          gap: 0.75rem;
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
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          color: var(--light);
          font-weight: 500;
          transition: all 0.3s;
          cursor: default;
        }

        .competence-item:hover {
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
        }

        /* Interets */
        .interets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .interet-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
          text-align: center;
          transition: all 0.3s;
        }

        .interet-card:hover {
          transform: scale(1.05);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
        }

        .interet-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .interet-text {
          font-size: 1.1rem;
          color: var(--light);
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
        }

        .cta-description {
          font-size: 1.2rem;
          color: rgba(248, 250, 252, 0.7);
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
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
        }

        .cta-btn-secondary {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }

        .cta-btn-secondary:hover {
          background: rgba(99, 102, 241, 0.1);
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
            gap: 1rem;
            flex-wrap: wrap;
          }

          .formation-grid,
          .competences-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        /* Footer */
        .footer {
          background: rgba(15, 23, 42, 0.8);
          border-top: 1px solid rgba(99, 102, 241, 0.2);
          padding: 3rem 2rem;
          text-align: center;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-text {
          color: rgba(248, 250, 252, 0.6);
          margin-bottom: 1rem;
        }

        .footer-heart {
          color: #ef4444;
          animation: pulse 1.5s infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">FK</div>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#experiences">Expériences</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#interets">Intérêts</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
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
                <div className="stat-number">120+</div>
                <div className="stat-label">Heures de cours</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Élèves accompagnés</div>
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
                <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(248, 250, 252, 0.7)'}}>
                  Stage 4 mois dès avril 2026<br/>
                  Alternance 1 an dès septembre 2026
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown size={32} color="#6366f1" />
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
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
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
            ))}
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
                </div>
              </div>
            ))}
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
            {Object.entries(competences).map(([category, items], index) => (
              <div key={index} className="competence-category">
                <h3 className="category-title">
                  <div className="category-icon">
                    {category === "Programmation" && <Code size={20} />}
                    {category === "Data & Outils" && <Terminal size={20} />}
                    {category === "Soft Skills" && <Sparkles size={20} />}
                    {category === "Langues" && <Book size={20} />}
                  </div>
                  {category}
                </h3>
                <div className="competence-list">
                  {items.map((item, i) => (
                    <div key={i} className="competence-item">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interets Section */}
      <section id="interets" className="section">
        <div className="section-container">
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
                <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--light)'}}>Informations de Contact</h3>
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
                    LinkedIn Profile
                  </a>
                </div>
                <div className="contact-item">
                  <Github size={20} />
                  <a href="https://github.com/237Fresnel" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                    GitHub @237Fresnel
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
          <p className="footer-text">© 2026 - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
