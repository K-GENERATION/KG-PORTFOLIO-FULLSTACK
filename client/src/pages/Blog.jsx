import { useState, useEffect } from 'react';
import BlogCard from '../components/blog/BlogCard';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorie, setCategorie] = useState('Tous');
  const [recherche, setRecherche] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['Tous', ...new Set(posts.map((p) => p.categorie))];

  const articles = posts
    .filter((p) => categorie === 'Tous' || p.categorie === categorie)
    .filter((p) => p.titre.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <h1>OPINIONM PERSONNNELLES</h1>
        <p>Des réflexions sur la technologie, l'IA, le management et la gestion de projets.</p>
      </header>

      <div className="blog-controls">
        <input
          type="search"
          placeholder="Rechercher un article..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          aria-label="Rechercher un article"
        />
        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${categorie === cat ? 'filter-active' : ''}`}
              onClick={() => setCategorie(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="blog-empty">Chargement...</p>
      ) : articles.length === 0 ? (
        <p className="blog-empty">Aucun article trouvé.</p>
      ) : (
        <div className="blog-grid">
          {articles.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;