function ProjectCard({ projet }) {
  const statutClass = {
    'Réalisé': 'statut-realise',
    'Terminé': 'statut-realise',
    'En cours': 'statut-encours',
    'En développement': 'statut-encours',
    'Conception': 'statut-conception',
  }[projet.statut] || 'statut-conception';

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={projet.image} alt={projet.nom} />
        {projet.badge && <span className="project-badge">{projet.badge}</span>}
      </div>

      <div className="project-card-body">
        <h3>{projet.nom}</h3>
        {projet.titre && <p className="project-subtitle">{projet.titre}</p>}
        <p className="project-description">{projet.description}</p>

        {projet.role && (
          <p className="project-role"><strong>Rôle :</strong> {projet.role}</p>
        )}

        {projet.technologies.length > 0 && (
          <div className="project-tech-list">
            {projet.technologies.map((tech, i) => (
              <span key={i} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-card-footer">
          <span className={`project-statut ${statutClass}`}>{projet.statut}</span>
          {projet.lien && (
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="btn-project">
              Voir le projet →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;