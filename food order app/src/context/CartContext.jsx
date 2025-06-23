import { createContext, useReducer, useEffect, useState } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const exisitingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      console.log(exisitingItem);

      if (exisitingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case "UPDATE_ITEM":
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        const filteredItems = state.cartItems.filter((item) => item.id !== id);
        const newTotal = filteredItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return {
          ...state,
          cartItems: filteredItems,
          total: newTotal,
        };
      }
      const updatedCartItems = state.cartItems.map((item) => {
        return item.id === id ? { ...item, quantity } : item;
      });

      const newTotal = updatedCartItems.reduce((sum, item) => {
        console.log(sum, item);
        return sum + item.price * item.quantity;
      }, 0);
      return {
        ...state,
        cartItems: updatedCartItems,
        total: newTotal,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://webigeeks-56786-default-rtdb.firebaseio.com/menu.json"
      );
      const data = await response.json();
      console.log(data);
      setMenu(data);

      console.log("menu =>", menu);
    };
    fetchMenu();
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch, menu }}>
      {children}
    </CartContext.Provider>
  );
};
