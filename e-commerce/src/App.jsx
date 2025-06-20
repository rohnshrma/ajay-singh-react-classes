import { useReducer, useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import CartSummary from "./components/CartSummary";
import Product from "./components/Product";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state, action) => {
  // existing reducer code unchanged
};

const App = () => {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [products, setProducts] = useState([]);

  const showAddForm = () => setIsAddVisible(true);
  const hideAddForm = () => setIsAddVisible(false);

  // ✅ Fetch products from Firebase Realtime Database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://products-1c38d-default-rtdb.firebaseio.com/products.json"
        );
        // Convert object to array
        const data = response.data;
        const loadedProducts = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setProducts(loadedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addItemHandler = async (newProduct) => {
    try {
      await axios.post(
        "https://products-1c38d-default-rtdb.firebaseio.com/products.json",
        newProduct
      );
      setProducts((prevProducts) => [newProduct, ...prevProducts]);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const addToCartHandler = (newProduct) =>
    dispatch({ type: "ADD", newProduct });

  const removeFromCartHandler = (deleteId) =>
    dispatch({ type: "DELETE", deleteId });

  const updateTaskHandler = ({ id, updateQty }) =>
    dispatch({ type: "UPDATE", id, updateQty });

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
                  <Product product={product} addToCart={addToCartHandler} />
                </div>
              ))}
            </div>
          </div>
          {cart.cartItems.length > 0 && (
            <div className="cart-area col-lg-4 bg-light rounded p-3 shadow-lg">
              <CartSummary
                cart={cart}
                onDelete={removeFromCartHandler}
                onUpdate={updateTaskHandler}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
