import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [statut, setStatut] = useState(null); // null | 'envoi' | 'succes' | 'erreur'
  const [erreurMessage, setErreurMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validerFormulaire = () => {
    if (!formData.nom.trim() || !formData.email.trim() || !formData.sujet.trim() || !formData.message.trim()) {
      return 'Il faut remplir tous les champs avant d\'envoyer votre message.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Veuillez entrer un email valide.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erreurValidation = validerFormulaire();
    if (erreurValidation) {
      setStatut('erreur');
      setErreurMessage(erreurValidation);
      return;
    }

    setStatut('envoi');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatut('succes');
        setFormData({ nom: '', email: '', sujet: '', message: '' });
      } else {
        setStatut('erreur');
        setErreurMessage(data.error || 'Une erreur est survenue, veuillez réessayer un autre canal.');
      }
    } catch (error) {
      setStatut('erreur');
      setErreurMessage('Impossible de contacter le serveur.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nom">Votre nom complet</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Votre adresse email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sujet">Le sujet de votre message</label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Redigez votre message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn-primary" disabled={statut === 'envoi'}>
        {statut === 'envoi' ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {statut === 'succes' && (
        <p className="form-toast form-toast-success">Votre message est envoyé avec succès, je vous contacterai bientôt !</p>
      )}

      {statut === 'erreur' && (
        <p className="form-toast form-toast-error">{erreurMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;