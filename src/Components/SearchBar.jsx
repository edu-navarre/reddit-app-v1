import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from './searchSlice';
import SearchBar from '../../Components/SearchBar';

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