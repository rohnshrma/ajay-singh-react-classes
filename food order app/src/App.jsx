import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="m-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
