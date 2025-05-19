import { useState, useCallback } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import CartSummary from "./components/CartSummary";
import CartItem from "./components/CartItem";
import Product from "./components/Product";
import products from "./data/products_data";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const addItemHandler = (info) => {
    // console.log(info);

    // console.log(products);
    const test = [...products, info];
    console.log("test", JSON.stringify(test));
  };

  return (
    <div>
      <Header />
      <AddItemForm onAdd={addItemHandler} />
      <main className="p-3">
        <div className="row g-4">
          <div className="products-list col-12 col-md-8">
            <h2 className="mb-3">Products</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
              {products.map((product) => (
                <div key={product.id} className="col">
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="cart-area col-12 col-md-4">
            <h2 className="mb-3">Cart</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
