import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ itemDetails }) => {
  const { dispatch } = useContext(CartContext);

  const increment = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: itemDetails.id, quantity: itemDetails.quantity + 1 },
    });
  };
  const decrement = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: itemDetails.id, quantity: itemDetails.quantity - 1 },
    });
  };
  return (
    <div className="shadow-sm p-3 cart-item my-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-6">
          <p>{itemDetails.name}</p>
          <p>{itemDetails.price}</p>
        </div>
        <div className="col-6">
          <div className="row text-center align-items-center justify-content-around">
            <div className="col-4">
              <span className="btn btn-danger" onClick={decrement}>
                -
              </span>
            </div>
            <div className="col-4">{itemDetails.quantity}</div>
            <div className="col-4">
              <span className="btn btn-danger" onClick={increment}>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
