import React from "react";
import { FaTrash } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

const CartItem = ({ details }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, quantity, price } = details;

  return (
    <div className="py-3 px-2 border rounded shadow-sm cart-item d-flex gap-2 align-items-start">
      {/* Image section */}
      <div className="m-3" style={{ width: "100px", flexShrink: 0 }}>
        <img
          src={image}
          alt={name}
          className="img-fluid rounded"
          style={{ height: "100px", objectFit: "cover" }}
        />
      </div>

      {/* Info and actions section */}
      <div className="flex-grow-1 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <h6
            className="text-truncate me-2"
            title={name}
            style={{ marginBottom: "0.5rem", maxWidth: "80%" }}
          >
            {name}
          </h6>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => dispatch(removeFromCart(id))}
          >
            <FaTrash />
          </button>
        </div>

        <div className="d-flex justify-content-between text-muted small mb-2">
          <span>{category}</span>
          <span>₹{price}</span>
        </div>

        {/* Quantity controls */}
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-sm btn-success rounded-pill px-2"
            style={{ width: "28px", height: "28px", lineHeight: "1" }}
            onClick={() => dispatch(updateQuantity({ id, updateQty: -1 }))}
          >
            -
          </button>

          <span
            className="mx-1"
            style={{ minWidth: "20px", textAlign: "center" }}
          >
            {quantity}
          </span>

          <button
            className="btn btn-sm btn-success rounded-pill px-2"
            style={{ width: "28px", height: "28px", lineHeight: "1" }}
            onClick={() => dispatch(updateQuantity({ id, updateQty: 1 }))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
