import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch posts from r/popular
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('http://localhost:4000/api/popular');
  const data = await response.json();
  return data.data.children.map((post) => post.data); // Extract post data
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;