import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategoryPosts = createAsyncThunk(
  'categories/fetchCategoryPosts',
  async (category) => {
    const response = await fetch(`http://localhost:4000/api/${category}`);
    const data = await response.json();
    return data.data.children.map((post) => post.data);
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchCategoryPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;