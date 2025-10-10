import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Posts/postsSlice';
import PostCard from '../../Components/PostCard';
import PostSkeleton from '../../Components/PostSkeleton';
import ErrorMessage from '../../Components/ErrorMessage';

// This component displays search results only. Input logic lives in Header.jsx.
const Search = () => {
  const dispatch = useDispatch();
  const { results, status, error } = useSelector(state => state.search);
  const popularPosts = useSelector(state => state.posts.posts);

  // Fetch popular posts only if no search results are present
  useEffect(() => {
    if (status === 'idle' || (status === 'succeeded' && results.length === 0)) {
      dispatch(fetchPosts());
    }
  }, [dispatch, status, results.length]);

  if (status === 'loading') {
    return (
      <div style={{ padding: 0 }}> 
        {[...Array(1)].map((_, i) => <PostSkeleton noPadding key={i} />)}
      </div>
    );
  }
  if (status === 'failed') {
  return (
    <ErrorMessage
      message="Unable to load search results"
      subtext="This could be due to a temporary network issue or an invalid query."
      onRetry={() => dispatch(fetchPosts())}
    />
  );
}

  const postsToRender = results.length > 0 ? results : popularPosts;

  return postsToRender.length > 0 ? (
    <div>
      {postsToRender.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          subreddit={post.subreddit}
          author={post.author}
          preview={post.preview}
          media={post.media}
          num_comments={post.num_comments}
        />
      ))}
    </div>
  ) : <p>No posts found.</p>;
};

export default Search;