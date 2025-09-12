import { createSlice } from '@reduxjs/toolkit';

const initialState = { status: 'idle' };

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    activate: state => { state.status = 'active' },
    deactivate: state => { state.status = 'idle' },
  },
});

export const { activate, deactivate } = exampleSlice.actions;
export default exampleSlice.reducer;