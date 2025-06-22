import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import CartItem from "./CartItem";

const CartSummary = () => {
  const { cart } = useContext(AppContext);
  const { cartItems, total } = cart;

  return (
    <>
      <h1>Cart</h1>

      <div className="cart-items mb-4">
        {cartItems.map((cartItem) => (
          <CartItem details={cartItem} key={cartItem.id} />
        ))}
      </div>

      <div className="total d-flex align-items-center justify-content-between bg-light text-dark">
        <h2 className="mb-3">Total</h2>
        <h4>: ₹{total.toFixed(2)}</h4>
      </div>
    </>
  );
};

export default CartSummary;
