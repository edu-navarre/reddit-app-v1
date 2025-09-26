import { Link } from 'react-router-dom';

const PostCard = ({ id, title, subreddit, author }) => (
  <div className="post-card" style={{ marginBottom: '1rem' }}>
    <h3>
      <Link to={`/post/${id}`}>{title}</Link>
    </h3>
    <p>r/{subreddit} • Posted by u/{author}</p>
  </div>
);

export default PostCard;