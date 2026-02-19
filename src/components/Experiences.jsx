import React from 'react';
import { Book, Award, Briefcase, Target, Users } from 'lucide-react';

const Experiences = () => {
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
      title: "Professeure de cours particuliers à domicile",
      company: "Complétude, Toulouse",
      period: "Depuis 10/2025",
      description: "Accompagnement personnalisé d'élèves du primaire et secondaire avec adaptation des méthodes pédagogiques pour améliorer les résultats scolaires et la confiance en soi. Évaluation des besoins, définition d'objectifs pédagogiques et suivi régulier des progrès en lien avec les familles.",
      tags: ["Pédagogie", "Suivi personnalisé", "Adaptation"],
      icon: Book
    },
    {
      title: "Stage Enseignement Mathématiques",
      company: "Lycée de Ngoa Ekélé, Yaoundé",
      period: "01/2024 – 03/2024",
      description: "Aide à l'enseignant de Mathématiques SIMO T. Christian dans ses classes : 6e 5, 4e All, Première A et Terminale C. Développement des compétences en pédagogie. Capacité à organiser et planifier des séances de travail, plus de 120 heures de cours.",
      tags: ["Mathématiques", "100h de cours", "Pédagogie"],
      icon: Award
    },
    {
      title: "Stage Assistant Support Informatique & Opérations",
      company: "Maison DG, Yaoundé",
      period: "07/2023 – 08/2023",
      description: "Découverte du fonctionnement global de l'entreprise et de son organisation interne. Support technique et gestion des incidents utilisateurs. Participation à l'analyse et à la structuration de données internes. Contribution à l'amélioration des outils numériques.",
      tags: ["Support IT", "Gestion incidents", "Analyse de données"],
      icon: Briefcase
    },
    {
      title: "Soutien Scolaire",
      company: "Auto-entrepreneur, Yaoundé",
      period: "09/2021 – 06/2025",
      description: "Pour des élèves de 6e à la Terminale en Mathématiques, Physique, Chimie et Informatique. Plus de 10 élèves accompagnés.",
      tags: ["Multi-matières", "Passion", "Rigueur"],
      icon: Target
    }
  ];

  return (
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
  );
};

export default Experiences;
