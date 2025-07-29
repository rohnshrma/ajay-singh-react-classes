import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartSummary = () => {
  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items mb-4">
            {cartItems.map((cartItem) => (
              <CartItem details={cartItem} key={cartItem.id} />
            ))}
          </div>

          <div className="total d-flex align-items-center justify-content-between bg-light text-dark p-3 border rounded shadow-sm">
            <h4 className="mb-0">Total</h4>
            <h4 className="mb-0">₹{total.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
