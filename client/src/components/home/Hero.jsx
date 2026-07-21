import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>KINGSON<br />GUERRIER</h1>
        <p className="hero-subtitle">
          Administrateur d'affaires | Technologue | Web Developer | Project Manager
        </p>
        <div className="hero-tags">
          <span>🔵 Administration</span>
          <span>🟢 Technologie</span>
          <span>🔴 Innovation</span>
        </div>
        <div className="hero-buttons">
          <a href="/cv.pdf" download className="btn-primary">⬇ Télécharger CV</a>
          <Link to="/projects" className="btn-secondary">👁 Voir mes projets</Link>
        </div>
      </div>
      <div className="hero-image">
      <img src="/images/logo.png" alt="" className="hero-logo-bg" />
      <img src="/images/KG1.png        " alt="Kingson Guerrier" className="hero-photo" />
      </div>
    </section>
  );
}


export default Hero;