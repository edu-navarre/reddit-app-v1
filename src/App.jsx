// import Search from './Features/Search/Search';
// import Categories from './Features/Categories/Categories';
// import PostsList from './Features/Posts/Posts';
// import Header from './Components/Header';
// import ErrorBoundary from './Components/ErrorBoundary';
// import './App.css';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchPosts } from './Features/Posts/postsSlice';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return (
//     <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>
//       <Header />
      
//       <ErrorBoundary>
//         <Categories />
//       </ErrorBoundary>
//       <div className="main-content">
//         <ErrorBoundary>
//           <Search />
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <PostsList />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

// export default App;

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