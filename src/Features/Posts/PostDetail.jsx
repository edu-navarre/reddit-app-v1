import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from './postDetailSlice';
import PostCard from '../../Components/PostCard';
import PostSkeleton from '../../Components/PostSkeleton';
import ErrorMessage from '../../Components/ErrorMessage';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, comments, status, error } = useSelector(state => state.postDetail);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return (
      // check styling here
      <div style={{ padding: 0 }}> 
        {[...Array(1)].map((_, i) => <PostSkeleton noPadding key={i} />)}
      </div>
    );
  }
  if (status === 'failed') {
    return (
      <ErrorMessage
        message="Unable to load post details"
        subtext="This post may have been removed or there was a network issue."
        onRetry={() => dispatch(fetchPostDetails(id))}
      />
    );
  }
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