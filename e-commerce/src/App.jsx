import { useContext } from "react";
import AppContext from "./Context/AppContext";

import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import CartSummary from "./components/CartSummary";
import Product from "./components/Product";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const {
    products,
    cart,
    isAddVisible,
    showAddForm,
    hideAddForm,
    addItemHandler,
    addToCartHandler,
    removeFromCartHandler,
    updateTaskHandler,
  } = useContext(AppContext);

  return (
    <div>
      <Header /> {/* uses showAddForm internally */}
      {isAddVisible && <AddItemForm />}
      <main className="px-5">
        <div className="row justify-content-between">
          <div
            className={`p-3 shadow-lg bg-light rounded border products-list ${
              cart.cartItems.length === 0 ? "col-lg-12" : "col-lg-8"
            } justify-content-evenly`}
          >
            <h2 className="mb-3">Products</h2>
            <div className="row">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`col-12 col-md-6 ${
                    cart.cartItems.length > 0 ? "col-lg-4" : "col-lg-3"
                  } d-flex justify-content-center mb-3`}
                >
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          {cart.cartItems.length > 0 && (
            <div className="cart-area col-lg-4 bg-light rounded p-3 shadow-lg">
              <CartSummary />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
