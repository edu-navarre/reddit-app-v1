import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from './postDetailSlice';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, comments, status, error } = useSelector(state => state.postDetail);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (status === 'loading') return <p>Loading post...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>r/{post.subreddit} • u/{post.author}</p>
      <hr />
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} style={{ marginBottom: '1rem' }}>
          <p><strong>u/{comment.author}</strong>: {comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;