import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <Link to="/" className="logo">
            Logo
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
