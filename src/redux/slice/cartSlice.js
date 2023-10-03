import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== productIdToRemove);
    },
    removeAllProductsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
