import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [fix, setFix] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const setFixed = () => {
    const screenHeight = window.innerHeight - 48;

    if (window.scrollY >= screenHeight) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <img src="./assets/images/LOGO-CAM.png" />
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? (
          <img src="./assets/images/croix.png" className="croix" />
        ) : (
          <img src="./assets/images/menu.png" className="menu" />
        )}
      </div>
      <ul className={toggle ? "nav-menu" : "nav-menu display-none"}>
        <li className="nav-item">
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            onClick={handleToggle}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            onClick={handleToggle}
          >
            {/* <p className={(nav) => (nav.isActive ? "nav-active" : "")}> */}
              A PROPOS
            {/* </p> */}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projets"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            onClick={handleToggle}
          >
            PROJETS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="cv"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            onClick={handleToggle}
          >
            CV
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            onClick={handleToggle}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
