import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice'; // Use the correct action for fetching posts
import PostCard from '../../Components/PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts()); // Dispatch the fetchPosts action
    }
  }, [status, dispatch]);

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