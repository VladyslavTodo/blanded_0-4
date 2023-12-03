import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
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
    deleteTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      console.log(state);
    },
    updateTodos: (state, { payload }) => {
      const { id, changedText } = payload;
      state.todos = state.todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              text: changedText,
            }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodos } = todoSlice.actions;
// const todoReducer = todoSlice.reducer;
