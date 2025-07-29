import React from "react";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import AddItemForm from "./components/AddItemForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="px-5 py-3">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Store!</h2>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartSummary />} />
            <Route path="/add" element={<AddItemForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

// header , product, productlist , app
