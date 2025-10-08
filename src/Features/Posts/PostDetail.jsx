import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from './postDetailSlice';
import PostCard from '../../Components/PostCard';

import styles from '../../Components/PostCard.module.css';

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
      <PostCard
        id={post.id}
        title={post.title}
        subreddit={post.subreddit}
        author={post.author}
        preview={post.preview}
        media={post.media}
        showComments={false}
      />
      {comments.map(comment => (
        <div key={comment.id} 
        style={{
          marginBottom: '1rem',
          textAlign: 'left',
          borderBottom: '1px solid #ccc',
          paddingBottom: '0.5rem',
          marginLeft: '1rem', 
          width: '95%',
          wordWrap: 'break-word',
          overflowWrap: 'everywhere',
          whiteSpace: 'normal'
        }}>
          <p><strong>u/{comment.author}</strong></p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;