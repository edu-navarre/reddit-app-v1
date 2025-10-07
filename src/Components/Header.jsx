import edditlogo from '../assets/eddit-logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../Features/Search/searchSlice';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to change route
  const { status, error } = useSelector(state => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(fetchSearchResults(query)); // Dispatch search
      navigate('/search'); // Show Search.jsx
    }
  };

  return (
    <header className={styles.headers}>

      {/* Left: Logo + Title */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={styles.headerTitleContainer}>
          <img src={edditlogo} alt="Eddit Logo" width={40} />
          <h1 className={styles.headerTitle}>eddit</h1>
        </div>
      </Link>

      {/* Center: Search Bar */}
      <div className={styles.searchBarContainer}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input className={styles.searchInput}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Eddit"
          />
        </form>
      </div>

      {/* Right: Empty or future controls */}
      <div style={{ width: '40px', flexShrink: 0 }}></div>
    </header>
  );
}

export default Header;