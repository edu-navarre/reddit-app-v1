import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostDetails = createAsyncThunk(
  'postDetail/fetchPostDetails',
  async (id) => {
    // await new Promise(resolve => setTimeout(resolve, 200)); simulate delay
    const response = await fetch(`http://localhost:4000/comments/${id}`);
    const data = await response.json();
    return {
      post: data.post,
      comments: data.comments,
    };
  }
);

const postDetailSlice = createSlice({
  name: 'postDetail',
  initialState: { post: null, comments: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload.post;
        state.comments = action.payload.comments;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postDetailSlice.reducer;