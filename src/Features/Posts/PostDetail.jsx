import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  if (status === 'loading') return <p>Loading post...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>r/{post.subreddit} • Posted by u/{post.author}</p>
      <p>{post.selftext}</p>
      {/* Add comments or other details here */}
    </div>
  );
};

export default PostDetail;