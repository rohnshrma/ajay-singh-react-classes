import React from "react";
import CartItem from "./CartItem";

const CartSummary = ({ cart, onDelete, onUpdate }) => {
  const { cartItems, total } = cart;
  return (
    <>
      <h1>Cart</h1>

      <div className="cart-items mb-4">
        {cartItems.map((cartItem) => (
          <CartItem
            details={cartItem}
            key={cartItem.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
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
