import { Link } from 'react-router-dom';
import QuoteRotator from './QuoteRotator';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>KINGSON<br />GUERRIER</h1>
        <p className="hero-subtitle">
          Administrateur d'affaires | Consultant en TIC
        </p>
        <div className="domains-chart">
  
  <div className="domains-tree">
    <div className="domains-root">DOMAINES DE TRAVAIL</div>
    <div className="domains-branches">
      <div className="domain-node">Business Management</div>
      <div className="domain-node">Entreprenariat</div>
      <div className="domain-node">Technologie</div>
      <div className="domain-node">Gestion de projets</div>
      <div className="domain-node">Développement de logiciels</div>
    <div className="domain-node">Analyse de données</div>
    </div>
  </div>
</div>
        <div className="hero-buttons">
          <a href="/cv.pdf" download className="btn-primary">Voir mon CV</a>
          <Link to="/projects" className="btn-secondary">Voir mes projets</Link>
        </div>

        <QuoteRotator />
      </div>

      <div className="hero-image">
        <img src="/images/KG1.png" alt="Kingson Guerrier" className="hero-photo" />
      </div>
    </section>
  );
}

export default Hero;