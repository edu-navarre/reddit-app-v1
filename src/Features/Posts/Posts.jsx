import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostDetails } from './postsSlice';
import PostCard from '../../Components/PostCard';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostDetails());
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

export default PostsList;