import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async (category = 'popular') => {
//     const response = await fetch(`https://www.reddit.com/r/${category}.json`);
//     const data = await response.json();
//     return data.data.children.map(post => post.data);
//   }
// );

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return [
      { id: '1', title: 'Mock Post One', subreddit: 'reactjs', author: 'user123' },
      { id: '2', title: 'Mock Post Two', subreddit: 'webdev', author: 'dev456' },
    ];
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
        state.error = null;
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