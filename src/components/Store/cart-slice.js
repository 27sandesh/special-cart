import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newitem = action.payload;

      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
          title: newitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = newitem.price + existingItem.totalprice;
      }
    },
    removeItemCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      state.quantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
  },
});

export default CartSlice;
export const CartActions = CartSlice.actions;
