import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard';

const Posts = () => {
  const categoryState = useSelector((state) => state.categories);
  const defaultState = useSelector((state) => state.posts);

  const isCategoryActive = categoryState.status === 'succeeded' && categoryState.posts.length > 0;
  const posts = isCategoryActive ? categoryState.posts : defaultState.posts;
  const status = isCategoryActive ? categoryState.status : defaultState.status;
  const error = isCategoryActive ? categoryState.error : defaultState.error;

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (status === 'succeeded' && !posts) return <p>⚠️ Post not found or removed.</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          subreddit={post.subreddit}
          author={post.author}
          preview={post.preview}
          media={post.media}
          thumbnail={post.thumbnail}
          num_comments={post.num_comments}
        />
      ))}
    </div>
  );
};

export default Posts;