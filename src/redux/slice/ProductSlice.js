import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "blog",
  initialState: {
    value: null,
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.value = action.payload;
    },
    removeProducts: (state, action) => {
      state.value = null;
    },
  },
});

export const { addAllProducts, removeProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
