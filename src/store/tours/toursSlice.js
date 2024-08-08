import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import service from '../services/service';

export const getTours = createAsyncThunk('GET_TOURS', async (_, thunkAPI) => {
  try {
    return await service.getTours();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const toursSlice = createSlice({
  name: 'tours',
  initialState: {
    tours: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      })
      .addCase(getTours.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.tours = null;
      });
  },
});

export default toursSlice.reducer;
