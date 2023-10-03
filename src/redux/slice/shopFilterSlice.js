// filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  priceRange: {
    min: 0,
    max: 100,
  },
};

const shopFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setCategory, setPriceRange } = shopFilterSlice.actions;

export default shopFilterSlice.reducer;
