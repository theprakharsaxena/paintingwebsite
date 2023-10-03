// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "240px",
};

const drawerWidthSlice = createSlice({
  name: "drawerwidth",
  initialState,
  reducers: {
    setDrawerWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDrawerWidth,  } = drawerWidthSlice.actions;

export default drawerWidthSlice.reducer;
