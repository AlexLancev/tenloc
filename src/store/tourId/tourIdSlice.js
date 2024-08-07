import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import service from '../services/service';

export const getTourId = createAsyncThunk('GET_TOURID', async (id, thunkAPI) => {
  try {
    return await service.getTourId(id);
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

const tourIdSlice = createSlice({
  name: 'tourId',
  initialState: {
    tourId: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null
  },
  reducers: {
    resetTourIdErrors: (state) => {
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTourId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTourId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tourId = action.payload[0];
      })
      .addCase(getTourId.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.tourId = null;
      })
  }
});

export const { resetTorIdErrors } = tourIdSlice.actions;
export default tourIdSlice.reducer;