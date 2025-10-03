import Search from './Features/Search/Search';
import Categories from './Features/Categories/Categories';
import PostsList from './Features/Posts/Posts';
import Header from './Components/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './Features/Posts/postsSlice';

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
          <Search />
        </ErrorBoundary>
        <ErrorBoundary>
          <PostsList />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;