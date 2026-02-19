import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      school: "IMT MINES ALBI",
      degree: "École d'ingénieur généraliste",
      location: "Albi, France",
      period: "2025 – 2027",
      focus: "Ingénierie de la Donnée en double diplôme",
      skills: ["Data Analysis", "Project Management", "Transition écologique"],
      courses: ["Machine Learning", "Analyse de données", "IA", "Optimisation", "Design Thinking"],
      link: "https://www.imt-mines-albi.fr/fr/integrer-une-formation/ingenieur-generaliste/option-ingenierie-de-la-donnee-pour-systemes-information-et-systemes-energetiques"
    },
    {
      school: "École Nationale Supérieure Polytechnique",
      degree: "École d'ingénieur généraliste",
      location: "Yaoundé, Cameroun",
      period: "2023 – 2027",
      focus: "Génie Informatique",
      skills: ["Software Design", "IA", "Bases de données", "Systèmes et réseaux"],
      courses: ["Programmation web", "POO", "Base de données relationnelles", "Réseaux informatiques", "Tests logiciels"],
      link: "https://polytechnique.cm/?page_id=836"
    },
    {
      school: "Université de Yaoundé I",
      degree: "Licence Mathématiques + DIPES I",
      location: "Yaoundé, Cameroun",
      period: "2021 – 2024",
      focus: "Mathématiques et Enseignement Secondaire",
      skills: ["Mathématiques", "Pédagogie"],
      courses: ["Probabilités et statistiques", "Analyse", "Logique"],
      link: "https://facsciences.uy1.cm/le-departement-de-mathematiques/"
    },
    /*
    {
      school: "Ecole Normale Supérieure",
      degree: "Diplôme de Professeur en Enseignement Secondaire (DIPES I)",
      location: "Yaoundé, Cameroun",
      period: "2021 – 2024",
      focus: "Mathématiques et Enseignement Secondaire",
      skills: ["Mathématiques", "Pédagogie"],
      courses: ["Probabilités et statistiques", "Analyse", "Logique", "Psychologie de l'enfant", "Didactique des Mathématiques"],
      link: "https://www.ens-yde.cm/formations/mathematiques/"
    }*/
  ];

  const certifications = [
    {
      title: "Programmation Orientée Objet en Java",
      year: "2024",
      icon: CheckCircle,
      link: "https://coursera.org/share/ae46175279c010f465a172323c6228c0"
    }
  ];

  return (
    <section id="formations" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Formations</h2>
          <p className="section-subtitle">Mon parcours académique</p>
        </div>
        
        <div className="formation-grid">
          {formations.map((formation, index) => (
            <a 
              key={index} 
              href={formation.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="formation-card"
            >
              <div className="formation-content">
                <h3 className="formation-school">
                  {formation.school}
                  <ExternalLink size={18} className="formation-link-icon" />
                </h3>
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
            </a>
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
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link-icon">
                  <div className="certification-content">
                    <div className="certification-title">{cert.title}</div>
                    <div className="certification-year">{cert.year}</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Formations;
