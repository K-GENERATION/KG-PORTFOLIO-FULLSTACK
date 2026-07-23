import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Logo Kingson Guerrier" className="navbar-logo" />
        <div>
          <span className="navbar-name">KINGSON GUERRIER</span>
          <span className="navbar-subtitle">Administrateur d'affaires | Consultant en TIC</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">ACCEUIL</Link></li>
        <li><Link to="/about">BIOGRAPHIE</Link></li>
        <li><Link to="/skills">COMPÉTENCES</Link></li>
        <li><Link to="/projects">PROJETS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="navbar-actions">
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="fr">FR</option>
          <option value="ht">HT</option>
          <option value="en">EN</option>
        </select>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <a href="/cv.pdf" download className="btn-cv">Télécharger mon CV</a>
      </div>
    </nav>
  );
}

export default Navbar;