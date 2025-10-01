import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard';

// This component displays search results only. Input logic lives in Header.jsx.
const Search = () => {
  const { results, status, error } = useSelector(state => state.search);

  if (status === 'loading') return <p>Loading search results...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (status === 'succeeded' && results.length === 0) return <p>No results found.</p>;

  return results.length > 0 ? (
    <div>
      {results.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          subreddit={post.subreddit}
          author={post.author}
        />
      ))}
    </div>
  ) : null;
};

export default Search;