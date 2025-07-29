import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const exisitingItem = state.cartItems.find(
        (item) => item.id === newProduct.id
      );
      if (exisitingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.total += newProduct.price;
      } else {
        state.cartItems = [{ ...newProduct, quantity: 1 }, ...state.cartItems];
        state.total += newProduct.price;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { id, updateQty } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (!item) return;

      const newQty = item.quantity + updateQty;
      if (newQty <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        );
      }
      state.total = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
