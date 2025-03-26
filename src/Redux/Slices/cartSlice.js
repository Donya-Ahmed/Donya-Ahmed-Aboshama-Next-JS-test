import { createSlice } from "@reduxjs/toolkit";
import TotalQuantity from "@/Helpers/TotalQuantity";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    counter: 0,
    cartData: [],
  },
  reducers: {
    addToCart(state, action) {
      const { product, count } = action.payload;
      const existingProduct = state.cartData.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity = count;
      } else {
        state.cartData.push({ ...product, quantity: count });
      }

      state.counter = TotalQuantity(state.cartData);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addQuantity(state, action) {
      state.counter = state.counter + 1;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeQuantity(state, action) {
      if (state.counter > 0) {
        state.counter = state.counter - 1;
      }
    },
    updateQuantity(state, action) {
      state.counter = action.payload;
    },
    removeFromCart(state, action) {
      const productId = action.payload.id;
      const productToRemove = state.cartData.find(
        (item) => item.id === productId
      );

      if (productToRemove) {
        state.counter = state.counter - (productToRemove.quantity || 1);
        state.cartData = state.cartData.filter((item) => item.id !== productId);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateProducts(state, action) {
      state.cartData = [...action.payload];
    },
  },
});

export const {
  addToCart,
  addQuantity,
  removeQuantity,
  removeFromCart,
  updateProducts,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
