function EducationCard({ diplome, institution, statut }) {
  return (
    <div className="education-card">
      <div className="education-icon"></div>
      <div className="education-details">
        <h4>{diplome}</h4>
        <p>{institution}</p>
        {statut && <span className="education-status">{statut}</span>}
      </div>
    </div>
  );
}

export default EducationCard;