import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  fetchSearchResults,
  clearSearch,
} from './searchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { query, results, status, error } = useSelector((state) => state.search);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(input));
    dispatch(fetchSearchResults(input));
  };

  const handleClear = () => {
    setInput('');
    dispatch(clearSearch());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Search Reddit..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      {status === 'loading' && <p>Searching...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          {results.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>r/{post.subreddit} • u/{post.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;