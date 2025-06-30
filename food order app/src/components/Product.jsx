import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, NavLink } from "react-router-dom";

const Product = () => {
  const { menu, dispatch } = useContext(CartContext);
  const { id } = useParams();
  const productId = parseInt(id);

  console.log("product page => ", menu, productId);

  const dish = menu && menu.find((dish) => dish.id === productId);
  console.log(dish);

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: dish,
    });
  };

  if (dish) {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <NavLink to="/menu" className="btn btn-outline-danger">
              ← Back to Menu
            </NavLink>
          </div>
        </div>
        <div className="product d-flex justify-content-center">
          <div className="col-lg-4">
            <img
              src={dish.image}
              alt={dish.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-7 ms-4">
            <div className="">
              <h4 className="text-muted">
                {dish.category}/{dish.subCategory}
              </h4>
              <h2 className="fw-bold">{dish.name}</h2>
              <span
                className={`badge ${
                  dish.vegNonVeg === "veg" ? "bg-success" : "bg-danger"
                } mb-2 fs-6`}
              >
                {dish.vegNonVeg}
              </span>
            </div>
            <p className="my-3">{dish.description}</p>
            <p className="fs-4 fw-bold text-danger mb-3">₹{dish.price}</p>
            <button className="btn btn-danger btn-lg" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="product d-flex justify-content-center">
      <div className="text-center">
        <h2>Dish Not Found</h2>
        <NavLink to="/menu" className="btn btn-danger mt-3">
          Back to Menu
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
