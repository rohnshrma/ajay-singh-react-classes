import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [item, getItem] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  const nameHandler = (e) => {
    getItem((prev) => {
      return {
        name: e.target.value,
        price: prev.price,
        quantity: prev.quantity,
        category: prev.category,
      };
    });
  };
  const priceHandler = (e) => {
    getItem((prev) => {
      return {
        name: prev.name,
        price: e.target.value,
        quantity: prev.quantity,
        category: prev.category,
      };
    });
  };
  const quantityHandler = (e) => {
    getItem((prev) => {
      return {
        name: prev.name,
        price: prev.price,
        quantity: e.target.value,
        category: prev.category,
      };
    });
  };
  const categoryHandler = (e) => {
    getItem((prev) => {
      return {
        name: prev.name,
        price: prev.price,
        quantity: prev.quantity,
        category: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(item);
    onAdd(item);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="row justify-content-between">
          <div className="form-group col-2">
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
          <div className="form-group col-2">
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
          <div className="form-group col-2">
            {/* <label for="exampleFormControlInput1">Email address</label> */}
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product Quantity"
              name="quantity"
              onChange={quantityHandler}
            />
          </div>
          <div className="form-group col-2">
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
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItemForm;
