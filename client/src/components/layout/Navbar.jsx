import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Logo Kingson Guerrier" className="navbar-logo" />
        <div>
          <span className="navbar-name">KINGSON GUERRIER</span>
          <span className="navbar-subtitle">Administrateur d'affaires<br />Consultant en TIC</span>
        </div>
      </div>

      <button
        className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}

      <ul className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>ACCUEIL</Link></li>
        <li><Link to="/about" onClick={closeMenu}>BIOGRAPHIE</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>EXPÉRIENCES</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>PROJETS</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>

        <li className="navbar-actions-mobile">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'light' ? 'Clair' : 'Sombre'}
          </button>
        </li>
      </ul>

      <div className="navbar-actions">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? 'Clair' : 'Sombre'}
        </button>
        <a href="/cv.pdf" download className="btn-cv">Télécharger mon CV</a>
      </div>
    </nav>
  );
}

export default Navbar;