import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct, addItem } from "../store/productSlice";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    product = {
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
    },
  } = useSelector((state) => state.products || {});
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!product.name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (product.price <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (!product.category) {
      newErrors.category = "Category is required";
    }
    if (!product.image.trim()) {
      newErrors.image = "Image URL is required";
    }
    if (!product.brand.trim()) {
      newErrors.brand = "Brand is required";
    }
    if (product.rating < 0 || product.rating > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
    }
    if (product.numReviews < 0) {
      newErrors.numReviews = "Number of reviews cannot be negative";
    }
    if (product.countInStock < 0) {
      newErrors.countInStock = "Stock count cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newValue = ["price", "rating", "numReviews", "countInStock"].includes(
      name
    )
      ? value === ""
        ? 0
        : Number(value)
      : value;
    dispatch(setProduct({ [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowToast(true);
      return;
    }

    const newProduct = {
      ...product,
      id: uuidv4(),
    };

    dispatch(addItem(newProduct));
    navigate("/products");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "850px" }}>
      <style>
        {`
          .form-control::placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control::-webkit-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }
          .form-control:-ms-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }
        `}
      </style>
      {showToast && (
        <div className="toast show position-fixed bottom-0 end-0 m-3">
          <div className="toast-header">
            <strong className="me-auto">Form Errors</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">
            Please fix the following errors:
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="card shadow-lg rounded-4 border-0">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center rounded-top-4">
            <h5 className="mb-0">Add New Product</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Product Name"
                  name="name"
                  value={product.name}
                  onChange={changeHandler}
                  required
                  aria-label="Product Name"
                  aria-describedby="nameError"
                />
                {errors.name && (
                  <div id="nameError" className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className={`form-control ${errors.price ? "is-invalid" : ""}`}
                  placeholder="Product Price"
                  name="price"
                  value={product.price || ""}
                  onChange={changeHandler}
                  required
                  aria-label="Product Price"
                  aria-describedby="priceError"
                />
                {errors.price && (
                  <div id="priceError" className="invalid-feedback">
                    {errors.price}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className={`form-control ${errors.image ? "is-invalid" : ""}`}
                  placeholder="Image URL"
                  name="image"
                  value={product.image}
                  onChange={changeHandler}
                  required
                  aria-label="Image URL"
                  aria-describedby="imageError"
                />
                {errors.image && (
                  <div id="imageError" className="invalid-feedback">
                    {errors.image}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <select
                  className={`form-control ${
                    errors.category ? "is-invalid" : ""
                  }`}
                  name="category"
                  value={product.category}
                  onChange={changeHandler}
                  required
                  aria-label="Category"
                  aria-describedby="categoryError"
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Others">Others</option>
                </select>
                {errors.category && (
                  <div id="categoryError" className="invalid-feedback">
                    {errors.category}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  className={`form-control ${
                    errors.rating ? "is-invalid" : ""
                  }`}
                  placeholder="Rating (0-5)"
                  name="rating"
                  value={product.rating || ""}
                  onChange={changeHandler}
                  aria-label="Rating"
                  aria-describedby="ratingError"
                />
                {errors.rating && (
                  <div id="ratingError" className="invalid-feedback">
                    {errors.rating}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className={`form-control ${errors.brand ? "is-invalid" : ""}`}
                  placeholder="Brand"
                  name="brand"
                  value={product.brand}
                  onChange={changeHandler}
                  required
                  aria-label="Brand"
                  aria-describedby="brandError"
                />
                {errors.brand && (
                  <div id="brandError" className="invalid-feedback">
                    {errors.brand}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  min="0"
                  className={`form-control ${
                    errors.numReviews ? "is-invalid" : ""
                  }`}
                  placeholder="Number of Reviews"
                  name="numReviews"
                  value={product.numReviews || ""}
                  onChange={changeHandler}
                  aria-label="Number of Reviews"
                  aria-describedby="numReviewsError"
                />
                {errors.numReviews && (
                  <div id="numReviewsError" className="invalid-feedback">
                    {errors.numReviews}
                  </div>
                )}
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  min="0"
                  className={`form-control ${
                    errors.countInStock ? "is-invalid" : ""
                  }`}
                  placeholder="Stock Count"
                  name="countInStock"
                  value={product.countInStock || ""}
                  onChange={changeHandler}
                  aria-label="Stock Count"
                  aria-describedby="countInStockError"
                />
                {errors.countInStock && (
                  <div id="countInStockError" className="invalid-feedback">
                    {errors.countInStock}
                  </div>
                )}
              </div>
              <div className="col-md-12">
                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Product Description"
                  name="description"
                  value={product.description}
                  onChange={changeHandler}
                  aria-label="Product Description"
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-dark px-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
