import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    selectedCategory: 'popular',
    availableCategories: ['popular', 'reactjs', 'webdev', 'javascript'],
  },
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;