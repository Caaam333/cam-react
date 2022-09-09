import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        {/* <img src='./header.png' /> */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>HOME</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>ABOUT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
