import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../Features/Search/searchSlice';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <SearchBar query={query} setQuery={setQuery} />
        <button type="submit" style={{ marginTop: '1rem' }}>Search</button>
      </form>
    </div>
  );
};

export default Search;