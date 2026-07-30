import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Oups... la page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;