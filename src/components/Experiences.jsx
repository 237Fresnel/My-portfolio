import React from 'react';
import { Book, Award, Briefcase, Target, Users } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: "Stagiaire Data Analyst (Process Mining)",
      company: "IMT Mines Albi (Projet INFINITY – MECAPROTEC)",
      period: "04/2026 – aujourd’hui",
      description: "Analyse de processus industriels à partir de données réelles dans le cadre d’activités de process mining, exploration et modélisation de flux de données afin d’identifier des patterns et anomalies, collaboration avec des équipes académiques et industrielles dans le cadre du projet INFINITY.",
      tags: ["Process Mining", "Analyse de données", "Modélisation de données", "Détection d’anomalies"],
      icon: Award
    },
    /*{
      title: "Stage Enseignement Mathématiques",
      company: "Lycée de Ngoa Ekélé, Yaoundé",
      period: "01/2024 – 03/2024",
      description: "Aide à l'enseignant de Mathématiques SIMO T. Christian dans ses classes : 6e 5, 4e All, Première A et Terminale C. Développement des compétences en pédagogie. Capacité à organiser et planifier des séances de travail, plus de 120 heures de cours.",
      tags: ["Mathématiques", "100h de cours", "Pédagogie"],
      icon: Award
    },*/
    {
      title: "Stage Assistant Gestion de données",
      company: "Entreprise Maison DG, Yaoundé",
      period: "06/2025 – 08/2025",
      description: "Découverte du fonctionnement global de l'entreprise et de son organisation interne, participation à l'analyse et à la structuration de données internes, contribution à l'amélioration des outils numériques, accompagnement technique et gestion des incidents utilisateurs. ",
      tags: ["Analyse de données","Support technique", "Gestion incidents" ],
      icon: Briefcase
    },
    {
      title: "Professeure de cours particuliers à domicile",
      company: "Auto-entrepreneur",
      period: "Depuis 09/2021",
      description: "Accompagnement personnalisé d'élèves du primaire et secondaire avec adaptation des méthodes pédagogiques pour améliorer les résultats scolaires et la confiance en soi. Évaluation des besoins, définition d'objectifs pédagogiques et suivi régulier des progrès en lien avec les familles.",
      tags: ["Pédagogie", "Suivi personnalisé", "Adaptation"],
      icon: Book
    }
    /*{
      title: "Soutien Scolaire",
      company: "Auto-entrepreneur, Yaoundé",
      period: "09/2021 – 06/2025",
      description: "Pour des élèves de 6e à la Terminale en Mathématiques, Physique, Chimie et Informatique. Plus de 10 élèves accompagnés.",
      tags: ["Multi-matières", "Passion", "Rigueur"],
      icon: Target
    }*/
  ];

  return (
    <section id="experiences" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Expériences Professionnelles</h2>
          <p className="section-subtitle">Mon parcours professionnel</p>
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
