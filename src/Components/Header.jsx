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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-card)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: 'var(--space-xs)', marginLeft: '1rem'}}>
        <img src={edditlogo} alt="Eddit Logo" width={40} />
        <h1
          style={{ 
            marginLeft: 'var(--space-sm)',
            fontSize: 'var(--font-size-xl)',
            color: 'var(--color-primary)',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            }}>
          eddit
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
            borderRadius: '20px',
            fontSize: 'var(--font-size-md)',
          }}
        />
        <button type="submit" className="btn">Search</button>
      </form>
    </header>
  );
}

export default Header;