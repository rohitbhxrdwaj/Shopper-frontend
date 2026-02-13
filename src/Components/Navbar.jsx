import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"; // import context

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext);

  // Calculate total items in cart
  const getTotalItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      total += cartItems[itemId];
    }
    return total;
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men {menu === "men" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women {menu === "women" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids {menu === "kids" ? <hr /> : null}</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart" className="nav-cart">
          <img src={cart_icon} alt="cart" />
          {/* Show total items in cart */}
          <div className="nav-cart-count">{getTotalItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
