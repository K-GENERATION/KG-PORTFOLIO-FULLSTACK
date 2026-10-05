import { useState, useEffect } from 'react';

const VIDE = { titre: '', categorie: 'Technologie', image: '', resume: '', contenu: '' };

// Réduit l'image à 1200 px max et la compresse en JPEG
const reduireImage = (file) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 1200;
      const ratio = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('Compression impossible'))),
        'image/jpeg',
        0.82
      );
    };
    img.onerror = () => reject(new Error('Image illisible'));
    img.src = url;
  });

function Admin() {
  const [token, setToken] = useState(sessionStorage.getItem('adminToken') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(VIDE);
  const [uploading, setUploading] = useState(false);

  const loadPosts = () =>
    fetch('/api/posts')
      .then((r) => r.json())
      .then((d) => setPosts(Array.isArray(d) ? d : []))
      .catch(() => {});

  useEffect(() => {
    if (token) loadPosts();
  }, [token]);

  const logout = () => {
    sessionStorage.removeItem('adminToken');
    setToken('');
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
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
    } catch {
      setMessage('Impossible de contacter le serveur.');
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setMessage('');
    try {
      const blob = await reduireImage(file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'image/jpeg', Authorization: `Bearer ${token}` },
        body: blob,
      });
      if (res.status === 401) {
        logout();
        setMessage('Session expirée, reconnecte-toi.');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setForm((f) => ({ ...f, image: data.url }));
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch {
      setMessage("❌ Échec de l'envoi de l'image.");
    } finally {
      setUploading(false);
    }
  };

  const publish = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.status === 401) {
      logout();
      setMessage('Session expirée, reconnecte-toi.');
      return;
    }
    const data = await res.json();
    if (data.success) {
      setMessage('✅ Article publié !');
      setForm(VIDE);
      loadPosts();
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  const remove = async (id) => {
    if (!window.confirm('Supprimer cet article ?')) return;
    const res = await fetch(`/api/admin/posts/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) {
      logout();
      setMessage('Session expirée, reconnecte-toi.');
      return;
    }
    loadPosts();
  };

  if (!token) {
    return (
      <div className="admin-page">
        <h1>Administration</h1>
        <form onSubmit={login} className="admin-form">
          <label htmlFor="user">Identifiant</label>
          <input
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />

          <label htmlFor="pwd">Mot de passe</label>
          <input
            id="pwd"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

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

        <label htmlFor="image">Image de couverture (optionnelle)</label>
        <input id="image" type="file" accept="image/*" onChange={handleImage} />
        {uploading && <p>Envoi de l'image...</p>}
        {form.image && (
          <div className="admin-preview">
            <img src={form.image} alt="Aperçu" />
            <button type="button" onClick={() => setForm({ ...form, image: '' })}>
              Retirer l'image
            </button>
          </div>
        )}

        <label htmlFor="resume">Résumé</label>
        <textarea
          id="resume"
          name="resume"
          rows="2"
          value={form.resume}
          onChange={handleChange}
          required
        />

        <label htmlFor="contenu">Contenu (une ligne vide = nouveau paragraphe)</label>
        <textarea
          id="contenu"
          name="contenu"
          rows="10"
          value={form.contenu}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary" disabled={uploading}>
          Publier
        </button>
        {message && <p className="form-toast">{message}</p>}
      </form>

      <h2>Articles publiés</h2>
      <ul className="admin-list">
        {posts.map((p) => (
          <li key={p.id}>
            <span>{p.titre}</span>
            <button onClick={() => remove(p.id)} className="admin-delete">
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;