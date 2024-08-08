import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: {}, // Инициализируем массив для хранения бронирований
  },
  reducers: {
    orderCurrent: (state, action) => {
      state.bookings = action.payload;
    },
  },
});

export const { orderCurrent } = bookingSlice.actions;
export default bookingSlice.reducer;
