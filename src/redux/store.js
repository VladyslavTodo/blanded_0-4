import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slice';

export const store = configureStore({
  reducer: todoSlice.reducer,
});
