import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className="cart col-lg-12">
      <div className="cart-content shadow-lg border-0 rounded-4 p-3">
        <h2>Cart</h2>
        {cartState.cartItems.length === 0 ? (
          <p>Your Cart Is Empty</p>
        ) : (
          cartState.cartItems.map((itemDetails) => {
            console.log(itemDetails);
            return <CartItem key={itemDetails.id} itemDetails={itemDetails} />;
          })
        )}

        {cartState.cartItems.length > 0 && (
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <h2>Total :</h2>
            </div>
            <div className="col-6 text-end">
              <h3>{cartState.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
