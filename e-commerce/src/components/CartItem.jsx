import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ details, onDelete, onUpdate }) => {
  const { id, image, name, category, quantity, price } = details;
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
            maxWidth: "80%",
            marginBottom: "16px", // Adjust this value if needed (e.g., "200px")
          }}
          title={name} // Show full name on hover
        >
          {name}
        </h6>
        <div className="details  d-flex align-items-center justify-content-between">
          <p>{category}</p>
          <p>{price}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            onClick={() => onUpdate({ id, updateQty: -1 })}
            className="btn btn-sm btn-success"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => onUpdate({ id, updateQty: 1 })}
            className="btn btn-sm btn-success"
          >
            +
          </button>
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
