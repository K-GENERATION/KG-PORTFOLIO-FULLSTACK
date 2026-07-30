import { Link } from 'react-router-dom';

function ContactSummary() {
  return (
    <section className="home-contact-summary">
      <h2>Travaillons ensemble</h2>
      <p>Une question, un projet, une opportunité ? N'hésitez pas à me contacter.</p>
      <Link to="/contact" className="btn-primary">Me contacter</Link>
    </section>
  );
}

export default ContactSummary;