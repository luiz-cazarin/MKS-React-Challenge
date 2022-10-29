import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "events",
  initialState: {
    arr: [],
  },
  reducers: {
    newOrder(state, { payload }) {
      return {
        ...state,
        arr: state.arr.concat(payload),
      };
    },

    removeOrder(state, { payload }) {
      return {
        arr: state.arr.filter((item: any) => item.id !== payload),
      };
    },
  },
});

export const { newOrder, removeOrder } = slice.actions;

export const selectOrders = (state: any) => state.orders;

export default slice.reducer;
