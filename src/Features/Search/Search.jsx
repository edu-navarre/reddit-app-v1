import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from './searchSlice';
import PostCard from '../../Components/PostCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results, status, error } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchSearchResults(query));
    }
  };

  if (status === 'loading') return <p>Loading search results...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (status === 'succeeded' && results.length === 0) return <p>No results found for "{query}".</p>;

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          style={{
            width: '40%',
            padding: 'var(--space-xs) var(--space-sm)',
            border: '1px solid var(--color-border)',
            borderRadius: '20px',
            fontSize: 'var(--font-size-md)',
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Reddit"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            subreddit={post.subreddit}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;