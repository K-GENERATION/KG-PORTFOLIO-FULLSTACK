import { useState } from 'react';
import AccordionCategory from '../components/skills/AccordionCategory';

const categories = [
  {
    title: 'BUSINEES MANAGEMENT',
    items: [
      { name: 'Planification stratégique', percentage: 90 },
      { name: 'Gestion administrative', percentage: 90 },
      { name: 'Gouvernance organisationnelle', percentage: 85 },
      { name: 'Gestion des opérations', percentage: 85 },
      { name: 'Prise de décision', percentage: 90 },
      { name: 'Gestion financière de base', percentage: 75 },
      { name: 'Élaboration de politiques administratives', percentage: 80 },
      { name: 'Management des organisations', percentage: 88 },
    ],
  },
  {
    title: 'ENTREPRENEURIAT',
    items: [
      { name: "Création d'entreprise", percentage: 80 },
      { name: "Élaboration de plans d'affaires (Business Plan)", percentage: 85 },
      { name: 'Études de faisabilité', percentage: 80 },
      { name: 'Modélisation économique', percentage: 70 },
      { name: 'Développement de projets entrepreneuriaux', percentage: 85 },
      { name: 'Innovation et transformation numérique', percentage: 90 },

    ],
  },
  {
    title: 'TECHNOLOGIES DE L\'INFORMATION ET LA COMMUNICATION (TIC)',
    items: [
      { name: 'Windows Server', percentage: 75 },
      { name: 'Linux', percentage: 80 },
      { name: 'Virtualisation (VirtualBox)', percentage: 90 },
      { name: 'Microsoft Office', percentage: 95 },
      { name: 'Google Workspace', percentage: 95 },
      { name: 'Intelligence Artificielle', percentage: 80 },
      { name: 'Prompt Engineering', percentage: 85 },
      { name: 'Git & GitHub', percentage: 80 },
    ],
  },
  {
    title: 'DEVELOPPEMENT WEB FULL-STACK',
    items: [
      { name: 'HTML5', percentage: 90 },
      { name: 'CSS3', percentage: 85 },
      { name: 'JavaScript', percentage: 80 },
      { name: 'React.js', percentage: 60 },
      { name: 'Next.js', percentage: 60 },
      { name: 'Responsive Design', percentage: 90 },
      { name: 'Tailwind CSS', percentage: 65 },
      { name: 'Node.js', percentage: 75 },
      { name: 'Express.js', percentage: 75 },
      { name: 'Django', percentage: 55 },
      { name: 'FastAPI', percentage: 50 },
      { name: 'PHP', percentage: 65 },
      { name: 'MySQL', percentage: 80 },
      { name: 'PostgreSQL', percentage: 60 },
      { name: 'WordPress', percentage: 80 },
      { name: 'Git', percentage: 80 },
      { name: 'GitHub', percentage: 75 },
      { name: 'Railway', percentage: 65 },
      { name: 'Netlify', percentage: 60 },
      { name: 'Vercel (en apprentissage)', percentage: 40 },
    ],
  },
  {
    title: 'GESTION D PROJETS',
    items: [
      { name: 'Planification et coordination de projets', percentage: 90 },
      { name: "Gestion d'équipes", percentage: 75 },
      { name: 'Élaboration de cahiers des charges', percentage: 85 },
      { name: 'Gestion des ressources', percentage: 80 },
      { name: 'Suivi des activités', percentage: 85 },
      { name: 'Gestion budgétaire', percentage: 80 },
      { name: "Organisation d'événements", percentage: 90 },
      { name: 'Reporting et évaluation', percentage: 85 },
    ],
  },
  {
    title: 'ANALYSE DE DONNEES',
    items: [
      { name: 'Collecte et traitement des données', percentage: 80 },
      { name: 'Nettoyage des données', percentage: 75 },
      { name: 'Analyse statistique descriptive', percentage: 75 },
      { name: 'Visualisation de données', percentage: 78 },
      { name: 'Tableaux de bord', percentage: 75 },
      { name: 'Microsoft Excel avancé', percentage: 90 },
      { name: 'Python (Pandas)', percentage: 65 },
      { name: 'Scikit-learn (bases)', percentage: 45 },
      { name: 'Power BI (en apprentissage)', percentage: 40 },
    ],
  },
  {
    title: 'COMPETENCES INTERPERSONNELLES',
    items: [
      { name: 'Communication professionnelle', percentage: 88 },
      { name: 'Résolution de problèmes', percentage: 85 },
      { name: "Esprit d'analyse", percentage: 85 },
      { name: "Travail d'équipe", percentage: 90 },
      { name: 'Gestion du temps', percentage: 85 },
      { name: "Sens de l'organisation", percentage: 88 },
      { name: 'Adaptabilité', percentage: 90 },
      { name: 'Créativité', percentage: 80 },
      { name: 'Rigueur', percentage: 88 },
      { name: "Esprit d'initiative", percentage: 88 },
      { name: 'Apprentissage continu', percentage: 92 },
    ],
  },
  {
    title: 'LANGUES',
    items: [
      { name: 'Français', percentage: 100 },
      { name: 'Créole Haïtien', percentage: 100 },
      { name: 'Anglais (intermédiaire / professionnel en progression)', percentage: 60 },
      { name: 'Espagnol', percentage: 60 },
    ],
  },
];

function Skills() {
  const [openIndex, setOpenIndex] = useState(0); // premier ouvert par défaut

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="skills-page">
      <h1>COMPETENCES</h1>
      <p className="skills-intro">
        Kingson possède un profil hybride alliant management, technologie et analyse de données. Cliquez sur
        chaque catégorie pour découvrir les détail de ses compétences.
      </p>

      <div className="accordion-list">
        {categories.map((cat, index) => (
          <AccordionCategory
            key={index}
            icon={cat.icon}
            title={cat.title}
            items={cat.items}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;