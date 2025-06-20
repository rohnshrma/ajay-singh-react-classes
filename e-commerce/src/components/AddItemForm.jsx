import React, { useContext, useReducer, useState } from "react";
import NewProductContext from "../Context/NewProductContext";

const initialState = {
  id: "",
  image: "",
  description: "",
  brand: "",
  category: "",
  price: "",
  countInStock: "",
  rating: "",
  numReviews: "",
  name: "",
};

const reducerFn = (state, action) => {
  return { ...state, [action.type]: action.payload };
};

const AddItemForm = ({ onAdd, onHide }) => {
  const [newProduct, dispatch] = useReducer(reducerFn, initialState);
  const { setProduct } = useContext(NewProductContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setProduct(newProduct);
    onAdd();
    onHide();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container my-5"
      style={{ maxWidth: "850px" }}
    >
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center rounded-top-4">
          <h5 className="mb-0">Add New Product</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={onHide}
          ></button>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Product Price"
                name="price"
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="image"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                name="category"
                defaultValue=""
                onChange={changeHandler}
              >
                <option disabled value="">
                  Select Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Rating (1-5)"
                name="rating"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Brand"
                name="brand"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Number of Reviews"
                name="numReviews"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Stock Count"
                name="countInStock"
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-12">
              <textarea
                rows="3"
                className="form-control"
                placeholder="Product Description"
                name="description"
                onChange={changeHandler}
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
  );
};

export default AddItemForm;
