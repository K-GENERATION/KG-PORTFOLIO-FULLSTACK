function ContactInfo() {
  const socials = [
    { nom: 'LinkedIn', lien: 'https://linkedin.com/in/kingson-guerrier', color: '#0A66C2' },
    { nom: 'GitHub', lien: 'https://github.com/K-GENERATION', color: '#333333' },
    { nom: 'Facebook', lien: 'https://www.facebook.com/share/1buzZj3feG/', color: '#1877F2' },
    { nom: 'WhatsApp', lien: 'https://wa.me/50942512660', color: '#25D366' },
  ];

  return (
    <div className="contact-info">
      <h2>Restons connecter</h2>
      <p className="contact-info-text">
        Une opportunité de collaboration, une question, un projet à discuter ? Contactez-moi directement ou via mes réseaux professionnels.
      </p>

      <div className="contact-details">
        <div className="contact-detail-item">
          <div>
            <span className="contact-label">Email</span>
            <a href="mailto:Kgdaevi018@gmail.com">Kgdaevi018@gmail.com</a>
          </div>
        </div>

        <div className="contact-detail-item">
          <div>
            <span className="contact-label">Téléphones</span>
            <a href="tel:+50942512660">+509 4251-2660</a>
            <a href="tel:+50936357288">+509 3635-7288</a>
          </div>
        </div>

        <div className="contact-detail-item">
          <div>
            <span className="contact-label">Adresses</span>
            <span>Cap-Haïtien et Ouanaminthe, Haïti</span>
          </div>
        </div>
      </div>

      <div className="contact-socials">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="social-badge"
            style={{ '--social-color': social.color }}
          >
            <span>{social.nom}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;