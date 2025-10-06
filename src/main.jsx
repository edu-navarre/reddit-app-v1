import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from './App';
import Search from './Features/Search/Search';
import PostDetail from './Features/Posts/PostDetail';
import CategoryPage from './Features/Categories/CategoryPage';
import './Styles/global.css';

import { Navigate } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/category/popular" />} />
          <Route path="search" element={<Search />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="category/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);