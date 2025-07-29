import { createSlice } from "@reduxjs/toolkit";
import initialProducts from "../data/products_data";

const initialState = {
  products: initialProducts,
  product: {
    id: "",
    name: "",
    price: 0,
    brand: "",
    category: "",
    description: "",
    image: "",
    rating: 0,
    countInStock: 0,
    numReviews: 0,
  },
  isAddVisible: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products = [action.payload, ...state.products];
      state.product = initialState.product;
      state.isAddVisible = false;
    },
    setProduct: (state, action) => {
      state.product = { ...state.product, ...action.payload };
    },
    showAddForm: (state) => {
      state.isAddVisible = true;
    },
    hideAddForm: (state) => {
      state.isAddVisible = false;
    },
  },
});

export const { addItem, setProduct, showAddForm, hideAddForm } =
  productSlice.actions;
export default productSlice.reducer;
