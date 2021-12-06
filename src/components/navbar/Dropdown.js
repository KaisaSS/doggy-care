import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownItems } from "./DropdownItems";
import "./navbar.css";

const Dropdown = ({ setDropdown }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DropdownItems.map((item, i) => {
          return (
            <li key={i}>
              <Link className={item.classname} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
