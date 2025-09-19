import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     return [
//       { id: '1', title: 'Mock Post One', subreddit: 'reactjs', author: 'user123' },
//       { id: '2', title: 'Mock Post Two', subreddit: 'webdev', author: 'dev456' },
//     ];
//   }
// );

export const fetchPostDetails = createAsyncThunk(
  'posts/fetchPostDetails',
  async (id) => {
    const response = await fetch(`https://www.reddit.com/comments/${id}.json`);
    const data = await response.json();
    return data[0].data.children[0].data; // Extract post details
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: { 
    posts: [], 
    post: null, 
    status: 'idle', 
    error: null 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;