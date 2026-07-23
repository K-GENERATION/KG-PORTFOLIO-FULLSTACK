import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>KINGSON<br />GUERRIER</h1>
        <p className="hero-subtitle">
          Administrateur d'affaires | Consultant en TIC
        </p>
        <div className="hero-tags">
          <span>La technologie n'est pas une option,<br /> mais une nécessité organisationnelle</span>
        </div>
        <div className="hero-buttons">
          <a href="/cv.pdf" download className="btn-primary">Télécharger mon CV</a>
          <Link to="/projects" className="btn-secondary">Voir mes projets</Link>
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