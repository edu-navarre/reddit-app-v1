import Search from './Features/Search/Search';
import Categories from './Features/Categories/Categories';
import PostsList from './Features/Posts/Posts';
import Header from './Components/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
      <h1>Reddit App</h1>
      <ErrorBoundary>
        <PostsList />
      </ErrorBoundary>
    </div>
  );
}

export default App;