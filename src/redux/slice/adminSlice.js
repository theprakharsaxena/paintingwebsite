import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    addAdmin: (state, action) => {
      state.value = action.payload;
    },
    removeAdmin: (state, action) => {
      state.value = null;
    },
  },
});

export const { addAdmin, removeAdmin } = adminSlice.actions;
export default adminSlice.reducer;
