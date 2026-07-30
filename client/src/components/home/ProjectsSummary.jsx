import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';

function ProjectsSummary() {
  const projetsAffiches = projectsData.slice(0, 3);

  return (
    <section className="home-summary-section">
      <h2>Mes projets récents</h2>
      <div className="summary-cards">
        {projetsAffiches.map((projet) => (
          <div className="summary-card" key={projet.id}>
            <img src={projet.image} alt={projet.nom} className="summary-card-img" />
            <h4>{projet.nom}</h4>
            <p>{projet.statut}</p>
          </div>
        ))}
      </div>
      <Link to="/projects" className="btn-secondary">Explorer tous mes projets</Link>
    </section>
  );
}

export default ProjectsSummary;