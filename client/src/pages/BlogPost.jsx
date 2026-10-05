import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const dateAffichee = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <article className="blog-post">
      <Link to="/blog" className="blog-back">← Retour au blog</Link>
      <span className="blog-post-category">{post.categorie}</span>
      <h1>{post.titre}</h1>
      <time dateTime={post.date}>{dateAffichee} · Par Kingson Guerrier</time>
      {post.image && <img src={post.image} alt={post.titre} className="blog-post-image" />}
      <div className="blog-post-content">
        {post.contenu.split('\n').filter(Boolean).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default BlogPost;