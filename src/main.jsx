import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from './App';
import Search from './Features/Search/Search';
import PostDetail from './Features/Posts/PostDetail';
import CategoryPage from './Features/Categories/CategoryPAge';
import './Styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);