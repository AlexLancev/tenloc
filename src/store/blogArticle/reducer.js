import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../services/planesService';

export const getblogArticle = createAsyncThunk('GET_ARTICLE', async (id, thunkAPI) => {
  try {
    return await planesService.getBlogArticle(id);
  } catch(error) {
     return thunkAPI.rejectWithValue(error.response.data)
  }
});

const getblogArticleSlice = createSlice({
  name: 'blogArticle',
  initialState: {
    blogArticleArr: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null
  },
  reducers: {
    resetBlogArticleErrors: (state) => {
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getblogArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getblogArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogArticleArr = action.payload[0];
      })
      .addCase(getblogArticle.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      })
  }
});

export const { resetBlogArticleErrors } = getblogArticleSlice.actions;
export default getblogArticleSlice.reducer;