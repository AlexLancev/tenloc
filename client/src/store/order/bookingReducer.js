import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [], // Инициализируем массив для хранения бронирований
  },
  reducers: {
    orderCurrent: (state, action) => {
      state.bookings.push(action.payload); // Добавляем новое бронирование в массив
    },
  },
});

export const { orderCurrent } = bookingSlice.actions;
export default bookingSlice.reducer;
