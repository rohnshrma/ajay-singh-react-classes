import React from "react";

const Header = ({ onShow }) => {
  return (
    <div className=" d-flex justify-content-between text-center bg-dark text-light py-2 px-3 mb-4 rounded-bottom">
      <h1 className="fs-3">Shopping Cart</h1>
      <button className="btn btn-light" onClick={() => onShow()}>
        Add Item
      </button>
    </div>
  );
};

export default Header;
