import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";

//redux
import { useSelector } from "react-redux";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = () => {
    let amount = 0;
    cart.forEach((element) => {
      amount = amount + element.amount;
    });
    return amount;
  };
  return (
    <nav className="Navbar">
      <div className="nav_center">
        <div className="nav_logo">
          <Link to="/">
            <h2>F</h2>
            <h2>A</h2>
            <h2>K</h2>
            <h2>E</h2>
            &nbsp;
            <h2>S</h2>
            <h2>H</h2>
            <h2>O</h2>
            <h2>P</h2>
          </Link>
        </div>
        <div className={`nav_links ${toggle && "show"}`}>
          <ul>
            <li onClick={() => setToggle(!toggle)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setToggle(!toggle)}>
              <Link to="/products">Products</Link>
            </li>
            <li onClick={() => setToggle(!toggle)}>
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => setToggle(!toggle)}
              style={{ position: "relative" }}
            >
              <Link to="/cart">
                Cart <FaShoppingCart className="nav_icon" />
                <span className="cart_value">
                  {localStorage.getItem("cart") ? totalAmount() : 0}
                </span>
              </Link>
            </li>
            <li onClick={() => setToggle(!toggle)}>
              <Link to="/login">
                Login
                <HiUserAdd className="nav_icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`burger_menu ${toggle && "toggle"}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="level1"></div>
        <div className="level2"></div>
        <div className="level3"></div>
      </div>
    </nav>
  );
};

export default Nav;
