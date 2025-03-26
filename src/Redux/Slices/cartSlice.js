import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    counter: 0,
    cartData: [],
  },
  reducers: {
    addToCart(state, action) {
      state.counter = state.counter + 1;
      state.cartData = [...state.cartData, action.payload];
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
