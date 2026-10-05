import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  const dateAffichee = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="blog-card">
      <div className="blog-card-image">
        {post.image && <img src={post.image} alt={post.titre} />}
        <span className="blog-card-category">{post.categorie}</span>
      </div>
      <div className="blog-card-body">
        <time dateTime={post.date}>{dateAffichee}</time>
        <h3>{post.titre}</h3>
        <p>{post.resume}</p>
        <Link to={`/blog/${post.id}`} className="blog-read-more">
          Lire l'article →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;