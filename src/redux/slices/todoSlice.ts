import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPropsTodosAll } from '../interfaces/IPropsTodosAll';
import type { IPropsTodosArr } from '../interfaces/IPropsTodosArr';

const initialState: IPropsTodosArr = {
  todos: [
    {
      id: 0,
      email: '',
      name: '',
      role: '',
      avatar: '',
      creationAt: '',
      updatedAt: '',
    },
  ],
  isLoading: false,
  error: null,
};

export const axiosTodosData = createAsyncThunk(
  'todos/axiosTodosData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/users',
      });

      if (response.status !== 200) {
        throw new Error('failed request todos');
      }

      const data = await response.data as IPropsTodosAll[];
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue('failed request todos');
      }
      return rejectWithValue('failed request todos');
    }
  },
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<IPropsTodosAll[]>) {
      state.todos = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction <null | Error>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosTodosData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(axiosTodosData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todos = action.payload;
      })
      .addCase(axiosTodosData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export const { setTodo, setIsLoading, setError } = todoSlice.actions;
export default todoSlice.reducer;
