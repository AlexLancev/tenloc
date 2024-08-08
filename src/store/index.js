import { configureStore } from '@reduxjs/toolkit';

import toursIdReducer from './tourId/tourIdSlice';
import toursReducer from './tours/toursSlice';
import blogReducer from './blog/reducer';
import searchCounterSlice from './search/reducer';
import bookingReducer from './order/bookingReducer';
import blogId from './blogId/reducer';

export const store = configureStore({
  reducer: {
    tours: toursReducer,
    tourId: toursIdReducer,
    blog: blogReducer,
    blogId: blogId,
    search: searchCounterSlice,
    booking: bookingReducer,
  },
});
