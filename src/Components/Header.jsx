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
        padding: '0 1rem',
        height: '4rem',
      }}
    >
      {/* Left: Logo + Title */}
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <img src={edditlogo} alt="Eddit Logo" width={40} />
        <h1
          style={{
            marginLeft: 'var(--space-sm)',
            fontSize: 'var(--font-size-xl)',
            color: 'var(--color-primary)',
          }}
        >
          eddit
        </h1>
      </div>

      {/* Center: Search Bar */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem',
        }}
      >
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: 'var(--space-xs)', maxWidth: '600px', width: '100%' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Eddit"
            style={{
              backgroundColor: 'var(--color-bg)',
              flex: 1,
              padding: 'var(--space-xs) var(--space-sm)',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              fontSize: 'var(--font-size-md)',
            }}
          />
        </form>
      </div>

      {/* Right: Empty or future controls */}
      <div style={{ width: '40px', flexShrink: 0 }}></div>
    </header>
  )
};

export default Header;