import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaBoxOpen, FaShoppingCart, FaPlus } from "react-icons/fa";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const linkStyle = ({ isActive }) =>
    `nav-link d-flex align-items-center px-2 ${
      isActive ? "text-warning fw-semibold" : "text-light"
    }`;

  return (
    <header className="d-flex justify-content-between align-items-center bg-dark text-light py-3 px-4 mb-4 rounded-bottom shadow">
      <h1 className="fs-4 mb-0">🛒 Shopping Cart</h1>

      <nav className="d-flex align-items-center gap-4">
        <NavLink to="/" className={linkStyle}>
          <FaHome className="me-2" />
          Home
        </NavLink>

        <NavLink to="/products" className={linkStyle}>
          <FaBoxOpen className="me-2" />
          Products
        </NavLink>

        <NavLink to="/cart" className={linkStyle}>
          <FaShoppingCart className="me-2" />
          Cart
          {cartItems.length > 0 && (
            <span className="badge bg-danger ms-2">{cartItems.length}</span>
          )}
        </NavLink>

        <NavLink
          to="/add"
          className="btn btn-warning d-flex align-items-center fw-semibold"
        >
          <FaPlus className="me-2" />
          Add Item
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
