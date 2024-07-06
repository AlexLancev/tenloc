import { configureStore } from "@reduxjs/toolkit";
import planeReducer from "./plane/planeSlice";
import planesReducer from './planes/planesSlice';
import blogReducer from './blog/reducer';
import searchCounterSlice from "./search/reducer";
import bookingReducer from './order/bookingReducer';
import blogArticle from "./blogArticle/reducer";

export const store = configureStore({
  reducer: {
    planes: planesReducer,
    plane: planeReducer,
    search: searchCounterSlice,
    booking: bookingReducer,
    blog: blogReducer,
    article: blogArticle
  },
});
