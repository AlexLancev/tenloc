import { createSlice } from '@reduxjs/toolkit';

const orderCounterSlice = createSlice({
  name: 'order',
  initialState: {
    orderName: '',
  },
  reducers: {
    orderCurrent: (state, action) => {
      state.orderName = action.payload;
    },
  },
});

export const { orderCurrent } = orderCounterSlice.actions;
export default orderCounterSlice.reducer;
