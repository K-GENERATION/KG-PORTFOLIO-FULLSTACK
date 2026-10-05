import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tempsDeLecture } from '../components/blog/BlogCard';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copie, setCopie] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data) => setPost(data.find((p) => String(p.id) === id) || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="blog-empty">Chargement...</p>;

  if (!post) {
    return (
      <div className="notfound-page">
        <h1>Article introuvable</h1>
        <Link to="/blog" className="btn-primary">Retour au blog</Link>
      </div>
    );
  }

  const date = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
  const url = window.location.href;
  const titreEnc = encodeURIComponent(post.titre);
  const urlEnc = encodeURIComponent(url);

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch { /* ignoré */ }
  };

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <Link to="/blog" className="blog-back">← Retour au blog</Link>
        <span className="blog-post-category">{post.categorie}</span>
        <h1>{post.titre}</h1>
        <div className="blog-post-meta">
          <img src="/images/logo.png" alt="" />
          <div>
            <strong>Kingson Guerrier</strong>
            <span>{date} · {tempsDeLecture(post.contenu)} min de lecture</span>
          </div>
        </div>
      </header>

      {post.image && <img src={post.image} alt={post.titre} className="blog-post-image" />}

      <div className="blog-post-content">
        {post.contenu.split('\n').filter(Boolean).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <footer className="blog-share">
        <span>Partager cet article</span>
        <div>
          <a href={`https://wa.me/?text=${titreEnc}%20${urlEnc}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlEnc}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlEnc}`} target="_blank" rel="noopener noreferrer">Facebook</a>
          <button onClick={copier}>{copie ? 'Lien copié ✓' : 'Copier le lien'}</button>
        </div>
      </footer>
    </article>
  );
}

export default BlogPost;