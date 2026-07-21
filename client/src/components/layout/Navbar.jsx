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
          <span className="navbar-subtitle">Business Administrator & Web Developer</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
        <a href="/cv.pdf" download className="btn-cv">Télécharger CV</a>
      </div>
    </nav>
  );
}

export default Navbar;