import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="cta">
      <h2>Envie de collaborer ou de me recruter ?</h2>
      <p>Découvrez mon parcours, mes compétences et mes réalisations.</p>
      <Link to="/contact">Me contacter</Link>
    </section>
  );
}

export default CTA;