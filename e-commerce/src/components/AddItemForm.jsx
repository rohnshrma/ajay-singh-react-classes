import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const AddItemForm = ({ onAdd, onHide }) => {
  const { product, setProduct } = useContext(AppContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(); // This uses the current `product` from context
    onHide(); // Closes the form modal
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
                value={product.name}
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Product Price"
                name="price"
                value={product.price}
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                name="image"
                value={product.image}
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                name="category"
                value={product.category}
                onChange={changeHandler}
              >
                <option value="">Select Category</option>
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
                value={product.rating}
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Brand"
                name="brand"
                value={product.brand}
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Number of Reviews"
                name="numReviews"
                value={product.numReviews}
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Stock Count"
                name="countInStock"
                value={product.countInStock}
                onChange={changeHandler}
              />
            </div>

            <div className="col-md-12">
              <textarea
                rows="3"
                className="form-control"
                placeholder="Product Description"
                name="description"
                value={product.description}
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
