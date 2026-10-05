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

  const filtreActif = categorie !== 'Tous' || recherche !== '';
  const [aLaUne, ...autres] = articles;

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <span className="blog-hero-tag">Blog</span>
        <h1>Opinions personnelles</h1>
        <p>Toutes mes réflexions sur la technologie, l'IA, le management et la gestion de projets en un seul clic.</p>

        <div className="blog-search">
          <input
            type="search"
            placeholder="Faites une recherche..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            aria-label="Rechercher un article"
          />
        </div>
      </header>

      <div className="blog-container">
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

        {loading ? (
          <p className="blog-empty">Chargement...</p>
        ) : articles.length === 0 ? (
          <p className="blog-empty">Aucun article trouvé.</p>
        ) : filtreActif ? (
          <div className="blog-grid">
            {articles.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>
        ) : (
          <>
            <BlogCard post={aLaUne} featured />
            {autres.length > 0 && (
              <>
                <h2 className="blog-section-title">Derniers articles</h2>
                <div className="blog-grid">
                  {autres.map((p) => <BlogCard key={p.id} post={p} />)}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;