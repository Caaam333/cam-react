import React, { Fragment } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { useState } from "react";
// import Header from '../components/Header';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [fix, setFix] = useState(false);
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setClick(!click);
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
        <img src="./LOGO-CAM.png" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              ACCUEIL
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              A PROPOS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projets"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              PROJETS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cv"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              CV
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <img src="./croix.png" className="croix"/> : <img src="./menu.png" className="menu"/>}
        </div>
      </nav>
  );
};

export default NavBar;
