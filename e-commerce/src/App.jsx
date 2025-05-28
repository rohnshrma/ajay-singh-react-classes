import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import CartSummary from "./components/CartSummary";
import CartItem from "./components/CartItem";
import Product from "./components/Product";
import initialProducts from "./data/products_data";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [cart, setCart] = useState({
    cartItems: [],
    total: 0,
  });
  const showAddForm = () => setIsAddVisible(true);
  const hideAddForm = () => setIsAddVisible(false);

  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const addItemHandler = (newProduct) => {
    setProducts((prevProducts) => {
      return [newProduct, ...prevProducts];
    });
  };

  const addToCartHandler = (newProduct) => {
    console.log("new product =>", newProduct);

    setCart((prevCart) => {
      const existingItem = prevCart.cartItems.find(
        (item) => item.id === newProduct.id
      );

      let updatedItems;
      let updatedTotal;

      if (existingItem) {
        updatedItems = prevCart.cartItems.map((item) => {
          return item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

        updatedTotal = prevCart.total + newProduct.price;
      } else {
        updatedItems = [{ ...newProduct, quantity: 1 }, ...prevCart.cartItems];

        updatedTotal = prevCart.total + newProduct.price;
      }

      return {
        cartItems: updatedItems,
        total: updatedTotal,
      };
    });
  };

  const removeFromCartHandler = (deleteId) => {
    setCart((prevCart) => {
      let existingItem;

      let updatedItems;
      let updatedTotal;

      existingItem = prevCart.cartItems.find((item) => item.id === deleteId);
      if (existingItem) {
        updatedItems = prevCart.cartItems.filter(
          (item) => item.id !== deleteId
        );
        updatedTotal = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return {
          cartItems: updatedItems,
          total: updatedTotal,
        };
      }
    });
  };

  console.log("cart Item:", cart.cartItems);
  console.log("cart Total:", cart.total);

  return (
    <div>
      <Header onShow={showAddForm} />
      {isAddVisible && (
        <AddItemForm onAdd={addItemHandler} onHide={hideAddForm} />
      )}
      <main className="px-5">
        <div className="row justify-content-between">
          <div
            className={`p-3 shadow-lg bg-light rounded border products-list ${
              cart.cartItems.length === 0 ? "col-lg-12" : "col-lg-8"
            } justify-content-evenly"`}
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
                  <Product product={product} addToCart={addToCartHandler} />
                </div>
              ))}
            </div>
          </div>
          {cart.cartItems.length > 0 && (
            <div className="cart-area col-lg-4 bg-light rounded p-3 shadow-lg">
              <CartSummary cart={cart} onDelete={removeFromCartHandler} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
