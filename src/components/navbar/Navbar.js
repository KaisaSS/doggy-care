import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
// Styles
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMenu = () => setDropdown(!dropdown);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo" style={{ color: "white" }}>
          <i className="fas fa-bone fa-3x"></i>
        </Link>
      </div>
      <div className="nav-links nav-menu">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onMouseEnter={onMouseEnter} onClick={closeMenu}>
          About {window.innerWidth > 600 ? <i className="fas fa-caret-down" /> : <></>}
        </NavLink>
        {dropdown && <Dropdown setDropdown={setDropdown} />}
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
