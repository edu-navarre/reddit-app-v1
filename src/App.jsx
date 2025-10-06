import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchPosts } from './Features/Posts/postsSlice';
import Header from './Components/Header';
import Categories from './Features/Categories/Categories';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>
      <Header />
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
      <div className="main-content">
        <ErrorBoundary>
          <Outlet /> {/* This is where route-specific content will render */}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;