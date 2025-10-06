import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Posts/postsSlice';
import PostCard from '../../Components/PostCard';

// This component displays search results only. Input logic lives in Header.jsx.
const Search = () => {
  const dispatch = useDispatch();
  const { results, status, error } = useSelector(state => state.search);
  const popularPosts = useSelector(state => state.posts.items); // adjust if needed

  // Fetch popular posts only if no search results are present
  useEffect(() => {
    if (status === 'idle' || (status === 'succeeded' && results.length === 0)) {
      dispatch(fetchPosts());
    }
  }, [dispatch, status, results.length]);

  if (status === 'loading') return <p>Loading search results...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

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
        />
      ))}
    </div>
  ) : <p>No posts found.</p>;
};

export default Search;