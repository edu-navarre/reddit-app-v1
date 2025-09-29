import edditlogo from '../assets/eddit-logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../Features/Search/searchSlice';

function Header() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-sm)',
        backgroundColor: 'var(--color-card)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={edditlogo} alt="Eddit Logo" width={40} />
        <h1 style={{ marginLeft: 'var(--space-sm)', fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>
          Eddit
        </h1>
      </div>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: 'var(--space-xs)' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Reddit"
          style={{
            padding: 'var(--space-xs) var(--space-sm)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            fontSize: 'var(--font-size-md)',
          }}
        />
        <button type="submit" className="btn">Search</button>
      </form>
    </header>
  );
}

export default Header;