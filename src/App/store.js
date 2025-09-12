import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/counterSlice';
import exampleReducer from '../Features/Example/exampleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    example: exampleReducer,
  },
});