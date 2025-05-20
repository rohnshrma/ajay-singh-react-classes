import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [item, getItem] = useState({
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
  });

  const nameHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.length + 1,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: e.target.value,
      };
    });
  };
  const priceHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: e.target.value,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const imageHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: e.target.value,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const categoryHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: e.target.value,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const descHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: e.target.value,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const brandHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: e.target.value,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const countInStockHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: e.target.value,
        rating: prev.rating,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const ratingHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: e.target.value,
        numReviews: prev.numReviews,
        name: prev.name,
      };
    });
  };
  const numReviewsHandler = (e) => {
    getItem((prev) => {
      return {
        id: prev.id,
        image: prev.image,
        description: prev.description,
        brand: prev.brand,
        category: prev.category,
        price: prev.price,
        countInStock: prev.countInStock,
        rating: prev.rating,
        numReviews: e.target.value,
        name: prev.name,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(item);
    onAdd(item);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="card p-3">
          <div className="card-title text-center ">
            {" "}
            <strong>Add Product</strong>
          </div>
          <div className="card-body">
            <div className="row mt-2">
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Name"
                    onChange={nameHandler}
                    name="name"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Price"
                    name="price"
                    onChange={priceHandler}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter image URL"
                    name="image"
                    onChange={imageHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlSelect1">Example select</label> */}
                  <select
                    className="form-control"
                    id="Category"
                    name="category"
                    onChange={categoryHandler}
                  >
                    <option value="Electronis">Electronis</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Ratings"
                    onChange={ratingHandler}
                    name="rating"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Brand"
                    onChange={brandHandler}
                    name="brand"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Number Reviews"
                    onChange={numReviewsHandler}
                    name="numReviews"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product description"
                    onChange={descHandler}
                    name="description"
                  />
                </div>
              </div>
            </div>
            <div className="row m-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItemForm;
