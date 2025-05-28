import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ details, onDelete }) => {
  const { id, image, name, category, description, quantity, price } = details;
  return (
    <div className="py-3 px-1 border rounded shadow-sm cart-item d-flex align-items-center justify-content-between">
      <div className="col-4">
        <img
          src={image}
          className="rounded"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </div>
      <div className="col-8" style={{ paddingRight: "10px" }}>
        <h6
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "80%", // Adjust this value if needed (e.g., "200px")
          }}
          title={name} // Show full name on hover
        >
          {name}
        </h6>
        <p>{category}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-sm btn-success">-</button>
          {quantity}
          <button className="btn btn-sm btn-success">+</button>
        </div>
      </div>
      <button
        className="delete btn btn-outline-danger btn-sm"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
