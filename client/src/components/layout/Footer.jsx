import { Link } from 'react-router-dom';

function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* Colonne 1 : identité */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Logo Kingson Guerrier" className="footer-logo" />
            <span>KINGSON GUERRIER</span>
          </div>
          <p className="footer-tagline">
            Administrateur d'affaires | Consultant en TIC.
          </p>
        </div>

        {/* Colonne 2 : navigation rapide */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">Biographie</Link></li>
            <li><Link to="/experience">Expériences</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : contact et réseaux */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:Kgdaevi018@gmail.com">Kgdaevi018@gmail.com</a></li>
            <li><a href="tel:+50942512660">+509 4251-2660</a></li>
          </ul>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/kingson-guerrier" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/images/socials/ldn.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/K-GENERATION" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/images/socials/gt.png" alt="GitHub" />
            </a>
            <a href="https://facebook.com/share/1buzZj3feG/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="/images/socials/fb.png" alt="Facebook" />
            </a>
            <a href="https://wa.me/50942512660" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
           <img src="/images/socials/wh.png" alt="WhatsApp" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {anneeActuelle} Kingson Guerrier. Tous droits réservés.</p>
        <p className="footer-tech">Conçu et développé avec React, Node.js & Express</p>
      </div>
    </footer>
  );
}

export default Footer;