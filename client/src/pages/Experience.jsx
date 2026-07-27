import { useState } from 'react';
import TimelineItem from '../components/experience/TimelineItem';
import EducationCard from '../components/experience/EducationCard';
import AccordionCategory from '../components/skills/AccordionCategory';
import FloatingIcons from '../components/skills/FloatingIcons';

// ===== DONNÉES: EXPÉRIENCES =====
const experiences = [
  {
    poste: 'Directeur Central',
    organisation: 'MhatriX NG',
    periode: 'En cours',
    statut: 'En cours',
    taches: [
      "Nomination du personnel de bureau et création d'entités si besoin",
      "Élaboration, suivi et supervision du portefeuille de projets de l'association",
      'Nomination d\'un coordonnateur pour chaque projet',
      'Réception et publication du rapport final de chaque projet',
      "Élaboration du rapport annuel des projets réalisés par l'association",
    ],
  },
  {
    poste: 'Stage en technologie',
    organisation: "Ecoporc+ d'Haïti",
    periode: 'Avril - Juin 2026',
    statut: 'Terminé',
    taches: [
      "Conception, développement et hébergement d'une plateforme web pour l'entreprise",
      "Conception et réalisation du logo de l'entreprise",
      "Création de la page Instagram de l'entreprise",
      "Création de la page LinkedIn de l'entreprise",
    ],
  },
  {
    poste: 'Opérateur de caméra',
    organisation: 'Constellation Casino',
    periode: '2025',
    statut: 'Terminé',
    taches: [
      'Surveillance permanente des caméras pour détecter fraudes et comportements suspects',
      'Rédaction des rapports quotidiens',
    ],
  },
  {
    poste: 'Professeur informatique',
    organisation: 'Institution Jean Paul II & Institution Royale de Ouanaminthe',
    periode: '2024 - 2026',
    statut: 'Terminé',
    taches: [
      'Dispense du cours',
      'Configuration du laboratoire',
      'Préparation et correction des examens',
      "Surveillance d'examens",
    ],
  },
  {
    poste: 'Intendant Général',
    organisation: 'MhatriX NG',
    periode: '2021 - 2025',
    statut: 'Terminé',
    taches: [
      "Nomination du personnel de bureau et création d'entités si besoin",
      "Élaboration, suivi et supervision de l'exécution du budget",
      'Allocation de ressources financières et matérielles aux différents projets',
      "Inventaire des matériels après l'exécution de chaque projet",
      "Réception et archivage des rapports financiers et pièces justificatives",
      "Publication de l'état des comptes, coordination de la collecte de fonds et paiement de la patente",
    ],
  },
  {
    poste: 'Directeur Général des activités économiques',
    organisation: 'CADREH',
    periode: '2024 - 2025',
    statut: 'Terminé',
    taches: [
      'Définition de la vision économique du centre et planification des activités (MuSo, AVEC, etc.)',
      'Supervision de la collecte des cotisations, gestion des fonds, prêts et rapports',
      'Direction du personnel financier et renforcement des capacités des équipes',
      "Évaluation des performances, production de rapports, développement de partenariats",
    ],
  },
  {
    poste: 'Coordonnateur Général',
    organisation: 'Questions Pour les Surdoués (QPS)',
    periode: '2021 - 2025',
    statut: 'Terminé',
    taches: [
      "Définition des objectifs du projet et élaboration du plan d'action détaillé",
      'Identification des risques potentiels et stratégies de mitigation',
      "Supervision de l'équipe de gestion : répartition des tâches, encadrement, motivation",
      "Point de contact principal entre l'équipe, les partenaires et parties prenantes",
      'Suivi et contrôle du budget, validation des dépenses du projet',
    ],
  },
  {
    poste: 'Superviseur de Production',
    organisation: 'Superior Sourcing (CODEVI)',
    periode: '2020',
    statut: 'Terminé',
    taches: [
      "Gestion et supervision d'une ligne de production de plus d'une vingtaine d'employés",
      "Lien entre les opérateurs et l'administration de l'entreprise",
      'Suivi et contrôle de la production et du processus de la paie',
      'Représentation des opérateurs auprès des ressources humaines',
    ],
  },
];

// ===== DONNÉES: FORMATIONS ACADÉMIQUES =====
const formations = [
  {
    diplome: "Diplôme en Administration des Affaires",
    institution: 'Université Publique du Nord au Cap-Haïtien (UPNCH)',
    statut: 'Obtenu',
  },
  {
    diplome: "Diplôme Universitaire Technique (DUT) en TIC",
    institution: "Institut des Sciences, des Technologies et des Études Avancées d'Haïti (ISTEAH)",
    statut: 'En cours',
  },
  {
    diplome: 'Formation en Développement Web (Niveau intermediaire)',
    institution: 'Organisation Internationale de la Francophonie (OIF) – DCLIC',
    statut: 'Obtenu',
  },
  {
    diplome: 'Formation en Data Analytics',
    institution: 'Google - Coursera',
    statut: 'En cours',
  },
  {
    diplome: 'Formation en Project Management',
    institution: 'Google - Coursera',
    statut: 'En cours',
  },
  {
    diplome: 'Formation en Cybersécurité',
    institution: 'Google - Coursera',
    statut: 'En cours',
  },
];

// ===== DONNÉES: COMPÉTENCES (catégories accordéon) =====
const categories = [
  {
    title: 'Business Management',
    items: [
      { name: 'Planification stratégique', percentage: 90 },
      { name: 'Gestion administrative', percentage: 90 },
      { name: 'Gouvernance organisationnelle', percentage: 85 },
      { name: 'Gestion des opérations', percentage: 85 },
      { name: 'Optimisation des processus', percentage: 80 },
      { name: 'Prise de décision', percentage: 90 },
      { name: 'Gestion financière de base', percentage: 75 },
      { name: 'Élaboration de politiques administratives', percentage: 80 },
      { name: 'Analyse organisationnelle', percentage: 85 },
      { name: 'Management des organisations', percentage: 88 },
    ],
  },
  {
    title: 'Entrepreneuriat',
    items: [
      { name: "Création d'entreprise", percentage: 80 },
      { name: "Élaboration de plans d'affaires (Business Plan)", percentage: 85 },
      { name: 'Études de faisabilité', percentage: 80 },
      { name: 'Modélisation économique', percentage: 70 },
      { name: 'Développement de projets entrepreneuriaux', percentage: 85 },
      { name: 'Innovation et transformation numérique', percentage: 90 },
      { name: 'Développement de partenariats', percentage: 85 },
      { name: 'Gestion de la croissance', percentage: 75 },
    ],
  },
  {
    title: "Technologies de l'Information et de la Communication",
    items: [
      { name: 'Windows Server', percentage: 65 },
      { name: 'Linux', percentage: 60 },
      { name: 'Réseaux informatiques', percentage: 65 },
      { name: 'Virtualisation (VirtualBox)', percentage: 60 },
      { name: 'Gestion des utilisateurs et des permissions', percentage: 70 },
      { name: 'Microsoft Office', percentage: 95 },
      { name: 'Google Workspace', percentage: 90 },
      { name: 'Intelligence Artificielle', percentage: 80 },
      { name: 'Prompt Engineering', percentage: 85 },
      { name: 'Automatisation des tâches', percentage: 75 },
      { name: 'Cloud Computing (bases)', percentage: 65 },
      { name: 'Git & GitHub', percentage: 80 },
    ],
  },
  {
    title: 'Développement Web Full-Stack',
    items: [
      { name: 'HTML5', percentage: 90 },
      { name: 'CSS3', percentage: 85 },
      { name: 'JavaScript (ES6+)', percentage: 80 },
      { name: 'React.js', percentage: 78 },
      { name: 'Next.js', percentage: 60 },
      { name: 'Responsive Design', percentage: 85 },
      { name: 'Tailwind CSS', percentage: 65 },
      { name: 'Node.js', percentage: 75 },
      { name: 'Express.js', percentage: 75 },
      { name: 'Django', percentage: 55 },
      { name: 'FastAPI', percentage: 50 },
      { name: 'PHP', percentage: 65 },
      { name: 'MySQL', percentage: 80 },
      { name: 'PostgreSQL', percentage: 60 },
      { name: 'SQLite', percentage: 60 },
      { name: 'WordPress', percentage: 80 },
      { name: 'Git', percentage: 80 },
      { name: 'GitHub', percentage: 82 },
      { name: 'Railway', percentage: 65 },
      { name: 'Netlify', percentage: 75 },
    ],
  },
  {
    title: 'Gestion de Projets',
    items: [
      { name: 'Planification et coordination de projets', percentage: 90 } ,
      { name: "Gestion d'équipes", percentage: 88 },
      { name: 'Élaboration de cahiers des charges', percentage: 85 },
      { name: 'Gestion des ressources', percentage: 80 },
      { name: 'Gestion des risques', percentage: 75 },
      { name: 'Suivi des activités', percentage: 85 },
      { name: 'Gestion budgétaire', percentage: 80 },
      { name: "Organisation d'événements", percentage: 90 },
      { name: 'Leadership', percentage: 90 },
      { name: 'Reporting et évaluation', percentage: 85 },
    ],
  },
  {
    title: 'Analyse de Données',
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
      { name: 'Aide à la prise de décision', percentage: 85 },
    ],
  },
  {
    title: 'Compétences transversales',
    items: [
      { name: 'Leadership', percentage: 90 },
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
    title: 'Langues',
    items: [
      { name: 'Français', percentage: 100 },
      { name: 'Créole Haïtien', percentage: 100 },
      { name: 'Anglais', percentage: 60 },
      { name: 'Espagnol', percentage: 50 },
    ],
  },
];

function Experience() {
  const [activeTab, setActiveTab] = useState('experiences');
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="experience-page">
      <FloatingIcons />

      <div className="experience-header">
        <h1>EXPERIENCES, FORMATION ET COMPÉTENCES</h1>
        <p className="experience-quote">
          « Si vous ne savez pas dans quoi investir, investissez en vous » — Tugan Baranovsky
        </p>
      </div>

      {/* Onglets de navigation */}
      <div className="experience-tabs">
        <button
          className={activeTab === 'experiences' ? 'tab-active' : ''}
          onClick={() => setActiveTab('experiences')}
        >
          EXPERIENCES
        </button>
        <button
          className={activeTab === 'formations' ? 'tab-active' : ''}
          onClick={() => setActiveTab('formations')}
        >
          FORMATIONS
        </button>
        <button
          className={activeTab === 'competences' ? 'tab-active' : ''}
          onClick={() => setActiveTab('competences')}
        >
          COMPETENCES
        </button>
      </div>

      {/* Contenu selon l'onglet actif */}
      <div className="experience-content">

        {activeTab === 'experiences' && (
          <div className="timeline">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} />
            ))}
          </div>
        )}

        {activeTab === 'formations' && (
          <div className="education-list">
            {formations.map((formation, i) => (
              <EducationCard key={i} {...formation} />
            ))}
          </div>
        )}

        {activeTab === 'competences' && (
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
        )}

      </div>
    </div>
  );
}

export default Experience;