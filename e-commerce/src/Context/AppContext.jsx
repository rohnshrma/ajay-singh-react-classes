import React, { createContext, useReducer, useState } from "react";
import initialProducts from "../data/products_data";

// Create Context
const AppContext = createContext();

// Initial cart state
const initialCartState = {
  cartItems: [],
  total: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
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

    case "DELETE": {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.deleteId
      );
      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { cartItems: updatedItems, total: updatedTotal };
    }

    case "UPDATE": {
      const { id, updateQty } = action;
      const item = state.cartItems.find((item) => item.id === id);
      if (!item) return state;

      const newQty = item.quantity + updateQty;
      let updatedItems;

      if (newQty <= 0) {
        updatedItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        updatedItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        );
      }

      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { cartItems: updatedItems, total: updatedTotal };
    }

    default:
      return state;
  }
};

// Provider Component
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
    numReviews: 0,
  });

  // ✅ These handlers are now defined INSIDE and use local state/dispatch
  const addItemHandler = () => {
    setProducts((prev) => [product, ...prev]);
    setProduct({
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
    });
    setIsAddVisible(false);
  };

  const addToCartHandler = (newProduct) => {
    // console.log(newProduct);
    dispatch({ type: "ADD", newProduct });
  };

  const removeFromCartHandler = (deleteId) => {
    dispatch({ type: "DELETE", deleteId });
  };

  const updateTaskHandler = ({ id, updateQty }) => {
    dispatch({ type: "UPDATE", id, updateQty });
  };

  const showAddForm = () => setIsAddVisible(true);
  const hideAddForm = () => setIsAddVisible(false);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        product,
        setProduct,
        isAddVisible,
        setIsAddVisible,
        addItemHandler,
        addToCartHandler,
        removeFromCartHandler,
        updateTaskHandler,
        showAddForm,
        hideAddForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
