import { Link } from 'react-router-dom';

function BioSummary() {
  return (
    <section className="bio-summary">
      <div className="bio-summary-image">
        <img src="/images/about-1.png" alt="Kingson Guerrier" />
      </div>

      <div className="bio-summary-text">
        <h2>BIOGRAPHIE - EN RESUME </h2>
        <p>
          Kingson Guerrier est un professionnel diplômé avec plus de cinq (5) ans 
          d’expériences en gestion administrative, coordination de projets et gestion financière 
          associative. Il a une solide expérience dans le suivi budgétaire, la gestion des ressources 
          (humaines, matérielles, financières, …), la supervision d’équipes et la production de rapports 
          financiers. Il est très à l’aise avec les outils informatiques et est motivé à structurer 
          efficacement les opérations administratives et financières d’une organisation.
        </p>
        <p>
          Il poursuit actuellement un DUT en TIC à l'ISTEAH et en renforçant
          ses compétences en Data Analytics, développement web Full-Stack et gestion de projets.
        </p>
        <p className="bio-summary-quote">
          « Tourner le dos à la tech, c'est regarder l'avenir dans un rétroviseur »
        </p>

        <Link to="/about" className="btn-primary">Plus de détails</Link>
      </div>
    </section>
  );
}

export default BioSummary;