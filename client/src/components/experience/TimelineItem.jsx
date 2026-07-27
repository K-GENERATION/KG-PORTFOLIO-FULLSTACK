function TimelineItem({ poste, organisation, periode, statut, taches }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3>{poste}</h3>
            <span className="timeline-org">{organisation}</span>
          </div>
          <span className={`timeline-badge ${statut === 'En cours' ? 'badge-active' : 'badge-done'}`}>
            {statut === 'En cours' ? 'En cours' : 'Terminé'}
          </span>
        </div>
        <span className="timeline-period">{periode}</span>
        <ul className="timeline-tasks">
          {taches.map((tache, i) => (
            <li key={i}>{tache}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;