import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Malheureusement... la page que vous cherchez n'existe pas ou n'est pas encore developpée</p>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;