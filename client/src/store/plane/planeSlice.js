import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../services/planesService';

export const getPlane = createAsyncThunk('GET_PLANE', async (id, thunkAPI) => {
  try {
    return await planesService.getPlane(id);
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

const planeSlice = createSlice({
  name: 'plane',
  initialState: {
    plane: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null
  },
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlane.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlane.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload[0];
      })
      .addCase(getPlane.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      })
  }
});

export const { resetPlaneErrors } = planeSlice.actions;
export default planeSlice.reducer;