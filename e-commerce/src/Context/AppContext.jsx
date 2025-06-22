import React, { createContext, useReducer, useState } from "react";
import initialProducts from "../data/products_data";

// Context
const AppContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const { newProduct } = action;
    const existingItem = state.cartItems.find(
      (item) => item.id === newProduct.id
    );
    let updatedItems, updatedTotal;

    if (existingItem) {
      updatedItems = state.cartItems.map((item) =>
        item.id === newProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updatedTotal = state.total + newProduct.price;
    } else {
      updatedItems = [{ ...newProduct, quantity: 1 }, ...state.cartItems];
      updatedTotal = state.total + newProduct.price;
    }

    return { cartItems: updatedItems, total: updatedTotal };
  }

  if (action.type === "DELETE") {
    const { deleteId } = action;
    const updatedItems = state.cartItems.filter((item) => item.id !== deleteId);
    const updatedTotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { cartItems: updatedItems, total: updatedTotal };
  }

  if (action.type === "UPDATE") {
    const { id, updateQty } = action;
    const item = state.cartItems.find((item) => item.id === id);
    if (!item) return state;

    const newQty = item.quantity + updateQty;
    let updatedItems, updatedTotal;

    if (newQty <= 0) {
      updatedItems = state.cartItems.filter((item) => item.id !== id);
    } else {
      updatedItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      );
    }

    updatedTotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { cartItems: updatedItems, total: updatedTotal };
  }

  return state;
};

const addItemHandler = () => {
  setProducts((prev) => [product, ...prev]);
  setProduct(initialProduct); // optional reset
  setIsAddVisible(false);
};

const addToCartHandler = (newProduct) => dispatch({ type: "ADD", newProduct });

const removeFromCartHandler = (deleteId) =>
  dispatch({ type: "DELETE", deleteId });

const updateTaskHandler = ({ id, updateQty }) =>
  dispatch({ type: "UPDATE", id, updateQty });

const showAddForm = () => setIsAddVisible(true);
const hideAddForm = () => setIsAddVisible(false);

// Initial cart state
const initialCartState = {
  cartItems: [],
  total: 0,
};

// Provider
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    brand: "",
    category: "",
    description: "",
    image: "",
    rating: 0,
    countInStock: 0,
  });

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        dispatch,
        product,
        setProduct,
        isAddVisible,
        setIsAddVisible,
        showAddForm,
        hideAddForm,
        addItemHandler,
        addToCartHandler,
        removeFromCartHandler,
        updateTaskHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
