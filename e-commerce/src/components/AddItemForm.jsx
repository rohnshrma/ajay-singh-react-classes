import React, { useState } from "react";

const AddItemForm = ({ onAdd, onHide }) => {
  const [item, setItem] = useState({
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

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(item);
    onAdd(item);
    onHide();
  };
  return (
    <>
      <form
        className="m-5 shadow-lg rounded border"
        id="addProductForm"
        onSubmit={submitHandler}
      >
        <div className="card p-3">
          <button
            className="btn btn-sm btn-outline-danger cancelBtn"
            onClick={() => onHide()}
          >
            X
          </button>
          <div className="card-title text-center ">
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  >
                    <option selected disabled>
                      Category
                    </option>
                    <option value="Electronics">Electronics</option>
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
