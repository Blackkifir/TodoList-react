import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  isDone: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    setIsDone(state, action: PayloadAction<boolean>) {
      state.isDone = action.payload;
    },
  },
});

export const { setTodos, setIsDone } = todoSlice.actions;
export default todoSlice.reducer;
