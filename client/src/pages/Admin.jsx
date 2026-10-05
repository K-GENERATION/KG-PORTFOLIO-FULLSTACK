import { useState, useEffect } from 'react';

function Admin() {
  const [token, setToken] = useState(sessionStorage.getItem('adminToken') || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    titre: '', categorie: 'Technologie', image: '', resume: '', contenu: '',
  });

  const loadPosts = () =>
    fetch('/api/posts').then((r) => r.json()).then(setPosts).catch(() => {});

  useEffect(() => { if (token) loadPosts(); }, [token]);

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success) {
      sessionStorage.setItem('adminToken', data.token);
      setToken(data.token);
      setPassword('');
      setMessage('');
    } else {
      setMessage(data.error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('adminToken');
    setToken('');
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const publish = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 401) { logout(); setMessage('Session expirée, reconnecte-toi.'); return; }
    if (data.success) {
      setMessage('✅ Article publié !');
      setForm({ titre: '', categorie: 'Technologie', image: '', resume: '', contenu: '' });
      loadPosts();
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  const remove = async (id) => {
    if (!window.confirm('Supprimer cet article ?')) return;
    await fetch(`/api/admin/posts/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    loadPosts();
  };

  if (!token) {
    return (
      <div className="admin-page">
        <h1>Administration</h1>
        <form onSubmit={login} className="admin-form">
          <label htmlFor="pwd">Mot de passe</label>
          <input id="pwd" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn-primary">Se connecter</button>
          {message && <p className="form-toast form-toast-error">{message}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-top">
        <h1>Nouvel article</h1>
        <button onClick={logout} className="btn-secondary">Déconnexion</button>
      </div>

      <form onSubmit={publish} className="admin-form">
        <label htmlFor="titre">Titre</label>
        <input id="titre" name="titre" value={form.titre} onChange={handleChange} required />

        <label htmlFor="categorie">Catégorie</label>
        <select id="categorie" name="categorie" value={form.categorie} onChange={handleChange}>
          <option>Technologie</option>
          <option>Gestion de projets</option>
          <option>IA</option>
          <option>Management</option>
          <option>Développement local</option>
        </select>

        <label htmlFor="image">Image (chemin, ex: /images/blog/a1.jpg)</label>
        <input id="image" name="image" value={form.image} onChange={handleChange} />

        <label htmlFor="resume">Résumé</label>
        <textarea id="resume" name="resume" rows="2" value={form.resume}
          onChange={handleChange} required />

        <label htmlFor="contenu">Contenu (une ligne vide = nouveau paragraphe)</label>
        <textarea id="contenu" name="contenu" rows="10" value={form.contenu}
          onChange={handleChange} required />

        <button type="submit" className="btn-primary">Publier</button>
        {message && <p className="form-toast">{message}</p>}
      </form>

      <h2>Articles publiés</h2>
      <ul className="admin-list">
        {posts.map((p) => (
          <li key={p.id}>
            <span>{p.titre}</span>
            <button onClick={() => remove(p.id)} className="admin-delete">Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;