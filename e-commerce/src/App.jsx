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

  // Define the addToCartHandler function, which takes a newProduct object as an argument
  const addToCartHandler = (newProduct) => {
    // Update the cart state using setCart, passing a function that receives the previous cart state (prevCart)
    setCart((prevCart) => {
      // Find if the product already exists in the cart by checking if any item's _id matches newProduct._id
      const existingItem = prevCart.cartItems.find(
        (item) => item._id === newProduct._id
      );

      // Declare variables to hold the updated cart items and total (to be assigned later)
      let updatedItems;
      let updatedTotal;

      // Check if the product already exists in the cart
      if (existingItem) {
        // If it exists, map over cartItems to create a new array
        updatedItems = prevCart.cartItems.map((item) => {
          // For the matching item (by _id), spread its properties and increment its quantity
          return item._id === newProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : // For non-matching items, return them unchanged
              item;
        });
        // Update the total by adding the new product's price to the previous total
        updatedTotal = prevCart.total + newProduct.price;
      } else {
        // If the product doesn't exist, create a new array with the new product (with quantity 1) prepended to existing cart items
        updatedItems = [{ ...newProduct, quantity: 1 }, ...prevCart.cartItems];
        // Update the total by adding the new product's price to the previous total
        updatedTotal = prevCart.total + newProduct.price;
      }

      // Return the updated cart state with the new cartItems array and updated total
      return {
        cartItems: updatedItems,
        total: updatedTotal,
      };
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
                  key={product._id}
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
            <div className="cart-area col-lg-3">
              <h2 className="mb-3">Cart</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
