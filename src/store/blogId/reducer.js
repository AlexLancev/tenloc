import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import service from '../services/service';

export const getblogId = createAsyncThunk(
  'GET_BLOGID',
  async (id, thunkAPI) => {
    try {
      return await service.getBlogId(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getblogIdSlice = createSlice({
  name: 'blogId',
  initialState: {
    blogIdArr: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null,
  },
  reducers: {
    resetBlogIdErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getblogId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getblogId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogIdArr = action.payload[0];
      })
      .addCase(getblogId.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      });
  },
});

export const { resetBlogIdErrors } = getblogIdSlice.actions;
export default getblogIdSlice.reducer;
