import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-danger text-white d-flex align-items-center">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white fw-bold" to="/">
          Tummy Food App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link btn btn-light text-danger px-3 py-1"
                to="/cart"
              >
                Cart (
                {cartState?.cartItems?.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                ) || 0}
                )
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
