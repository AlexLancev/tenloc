import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import planesService from "../services/planesService";

export const getBlog = createAsyncThunk("GET_BLOG", async (_, thunkAPI) => {
  try {
    return await planesService.getBlog();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogArr: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogArr = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.blogArr = null;
      });
  },
});

export default blogSlice.reducer;
