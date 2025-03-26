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
    addQuantity(state) {
      state.counter += 1;
    },
    removeQuantity(state) {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
    updateQuantity(state, action) {
      state.counter = action.payload;
    },
    removeFromCart(state, action) {
      const productId = action.payload.id;
      state.cartData = state.cartData.filter((item) => item.id !== productId);
      state.counter = TotalQuantity(state.cartData); // Ensure counter updates correctly
    },
    updateProducts(state, action) {
      state.cartData = action.payload;
      state.counter = TotalQuantity(state.cartData);
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
