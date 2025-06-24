import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
const Product = () => {
  const { menu } = useContext(CartContext);
  const { id } = useParams();

  const dish = menu && menu.find((dish) => dish.id === id);
  if (dish) {
    return (
      <div className="product d-flex justify-content-center">
        <div className="col-lg-4">
          <img src={`${dish.image}`} alt={dish.name} />
        </div>
        <div className="col-lg-7">
          <div className="d-flex justify-content-between">
            <h4>
              {dish.category}/{dish.subCategory}
            </h4>
            <h2>{dish.name}</h2>
            <span
              className={`badge ${
                vegNonVeg === "veg" ? "bg-success" : "bg-danger"
              } mb-2 fs-6`}
            >
              {vegNonVeg}
            </span>
          </div>
          <p>{dish.description}</p>
          <p>
            <b>{dish.price}</b>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="product d-flex justify-content-center">
      <h2>Dish Not Found</h2>
    </div>
  );
};

export default Product;
