import React from 'react';

const PostCard = ({ title, subreddit, author }) => {
  return (
    <div className="post-card" style={{ marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>r/{subreddit} • Posted by u/{author}</p>
    </div>
  );
};

export default PostCard;