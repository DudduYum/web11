import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let foundItem = state.cart.find((item) => item.element.id === action.payload.element.id);
      if (foundItem) {
        foundItem.quantity += action.payload.quantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    incrementQuantity: (state, action) => {
      let foundItem = state.cart.find((item) => item.element.id === action.payload.element.id);
      if (foundItem) {
        foundItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      let foundItem = state.cart.find((item) => item.element.id === action.payload.element.id);
      if (foundItem) {
        if (foundItem.quantity > 1) {
          foundItem.quantity -= 1;
        } else {
          let index = state.cart.indexOf(foundItem);
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;