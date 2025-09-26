import { Link } from 'react-router-dom';

const PostCard = ({ id, title, subreddit, author }) => (
  <div
    className="post-card"
    style={{
      backgroundColor: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      borderRadius: '8px',
      padding: 'var(--space-sm)',
      marginBottom: 'var(--space-md)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}
  >
    <h3 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)' }}>
      <Link to={`/post/${id}`}>{title}</Link>
    </h3>
    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-muted)' }}>
      r/{subreddit} • Posted by u/{author}
    </p>
  </div>
);

export default PostCard;