import { Link } from 'react-router-dom';

const highlights = [
  { poste: 'Directeur Central', organisation: 'MhatriX NG', periode: 'En cours' },
  { poste: 'Coordonnateur Général', organisation: 'Questions Pour les Surdoués (QPS)', periode: '2021 - 2025' },
  { poste: 'Directeur Général', organisation: 'CADREH', periode: '2024 - 2025' },
];

function ExperienceSummary() {
  return (
    <section className="home-summary-section">
      <h2>Mon parcours</h2>
      <div className="summary-cards">
        {highlights.map((item, i) => (
          <div className="summary-card" key={i}>
            <h4>{item.poste}</h4>
            <p>{item.organisation}</p>
            <span>{item.periode}</span>
          </div>
        ))}
      </div>
      <Link to="/experience" className="btn-secondary">Voir toutes mes expériences</Link>
    </section>
  );
}

export default ExperienceSummary;