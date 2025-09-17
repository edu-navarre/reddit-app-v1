import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Features/Search/searchSlice';
import postsReducer from '../Features/Posts/postsSlice';
import categoriesReducer from '../Features/Categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    posts: postsReducer,
    categories: categoriesReducer,
  },
});