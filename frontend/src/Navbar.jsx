import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

function Navbar() {
  return (
    <div className="side-navbar">
      <div className="logo-section">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/dietary-plan">Dietary Plan</Link>
          </li>
          <li className="menu-item">
            <Link to="/feedback">Feedback</Link>
          </li>
          <li className="menu-item">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="menu-item">
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          <li className="menu-item">
            <Link to="/payment">Payment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
