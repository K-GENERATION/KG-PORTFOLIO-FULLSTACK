import { Link } from 'react-router-dom';

function ContactSummary() {
  return (
    <section className="home-contact-summary">
      <h2>CONTACTEZ-MOI DIRECTEMENT</h2>
      <p>Pour commander un service, pour me posez une question, pour echanger sur un projet, pour me proposer une opportunité, pour une consultation, ...</p>
      <Link to="/contact" className="btn-primary">Cliquez ICI</Link>
    </section>
  );
}

export default ContactSummary;