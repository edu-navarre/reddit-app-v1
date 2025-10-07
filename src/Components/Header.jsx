import edditlogo from '../assets/eddit-logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../Features/Search/searchSlice';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 👈 Hook to change route
  const { status, error } = useSelector(state => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchSearchResults(query)); // 🔍 Dispatch search
      navigate('/search'); // 🚀 Show Search.jsx
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
        padding: '0 1rem',
        height: '4rem',
      }}
    >
      {/* Left: Logo + Title */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src={edditlogo} alt="Eddit Logo" width={40} />
          <h1
            style={{
              margin: 'var(--space-sm)',
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-primary)',
              padding: '0',
            }}
          >
            eddit
          </h1>
        </div>
      </Link>

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
  );
}

export default Header;