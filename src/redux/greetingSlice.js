import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/greetings/';

const initialState = {
  greeting: {},
  status: 'idle',
  loading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await axios.get(url); // No need for try/catch

  return response.data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload;
        state.loading = false;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveGreeting } = greetingsSlice.actions;

export default greetingsSlice.reducer;
