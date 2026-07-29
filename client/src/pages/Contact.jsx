import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>LES DIFFERENTES OPTIONS DE CONTACT</h1>
        <p>Une question, une opportunité de collaboration ? Contactez-moi.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;