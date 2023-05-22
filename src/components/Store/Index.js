import { configureStore } from "@reduxjs/toolkit";

import UISlice from "./UI-createSlice";
const store = configureStore({
  reducer: { ui: UISlice.reducer },
});
export default store;
