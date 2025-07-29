import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const renderStars = (rating, total = 5) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = total - full - (half ? 1 : 0);
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
};

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card h-100 shadow p-3 mb-5 bg-white rounded"
      style={{ width: "20rem" }}
    >
      <img
        src={product.image}
        alt={product.name || "Product image"}
        className="card-img-top img-fluid"
        style={{
          height: "200px",
          objectFit: "cover",
          borderBottom: "1px solid #ccc",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-6 text-truncate">{product.name}</h5>

        {/* Price and Rating Row */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">
            ${parseFloat(product.price).toFixed(2)}
          </span>
          <span className="text-warning small">
            {renderStars(product.rating)} ({product.numReviews})
          </span>
        </div>

        <button
          className="btn btn-dark mt-auto"
          onClick={() => dispatch(addToCart(product))}
          disabled={product.countInStock === 0}
          aria-label={`Add ${product.name} to cart`}
        >
          {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
