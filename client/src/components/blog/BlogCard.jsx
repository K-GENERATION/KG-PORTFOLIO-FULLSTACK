import { Link } from 'react-router-dom';

export function tempsDeLecture(texte = '') {
  const mots = texte.trim().split(/\s+/).length;
  return Math.max(1, Math.round(mots / 200));
}

function BlogCard({ post, featured = false }) {
  const date = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <article className={`blog-card ${featured ? 'blog-card-featured' : ''}`}>
      <Link to={`/blog/${post.id}`} className="blog-card-image" aria-label={post.titre}>
        {post.image ? (
          <img src={post.image} alt="" />
        ) : (
          <div className="blog-card-placeholder">{post.categorie.charAt(0)}</div>
        )}
        <span className="blog-card-category">{post.categorie}</span>
      </Link>

      <div className="blog-card-body">
        <div className="blog-meta">
          <time dateTime={post.date}>{date}</time>
          <span>·</span>
          <span>{tempsDeLecture(post.contenu)} min de lecture</span>
        </div>
        <h3><Link to={`/blog/${post.id}`}>{post.titre}</Link></h3>
        <p>{post.resume}</p>
        <div className="blog-card-footer">
          <div className="blog-author">
            <img src="/images/logo.png" alt="" />
            <span>Kingson Guerrier</span>
          </div>
          <Link to={`/blog/${post.id}`} className="blog-read-more">Lire →</Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;