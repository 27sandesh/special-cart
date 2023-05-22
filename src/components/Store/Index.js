import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import { CartAction } from "../Store/cart-slice";

import UISlice from "./UI-createSlice";
const store = configureStore({
  reducer: { ui: UISlice.reducer, cart: CartSlice.reducer },
});
export default store;
