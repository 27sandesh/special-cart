import { createSlice } from "@reduxjs/toolkit";
const UISlice = createSlice({
  name: "UI",
  initialState: {
    CartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.CartIsVisible = !state.CartIsVisible;
    },
  },
});
export const uiActions = UISlice.actions;
export default UISlice;
