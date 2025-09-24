import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard';

const Posts = () => {
  const { posts, status, error } = useSelector((state) => state.categories); // Use posts from the categories slice

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          subreddit={post.subreddit}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default Posts;