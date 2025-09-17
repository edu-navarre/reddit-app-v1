import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '1rem' }}>
          <h3>{post.title}</h3>
          <p>r/{post.subreddit} • Posted by u/{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;