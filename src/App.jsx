
import Search from './Features/Search/Search';
import Categories from './Features/Categories/Categories';
import PostsList from './Features/Posts/Posts';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Categories />
      <h1>Reddit App</h1>
      <PostsList />
    </div>
  );
}

export default App;