import React from "react";
import { Link, NavLink } from "react-router-dom";
// Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo" style={{ color: "white" }}>
          Logo
        </Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/booking" className="nav-link">
          Booking
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
