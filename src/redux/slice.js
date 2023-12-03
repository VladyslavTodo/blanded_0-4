import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
// const todoReducer = todoSlice.reducer;
