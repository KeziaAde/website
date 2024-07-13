import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Components.css";
import { useMediaQuery } from "react-responsive";
import logo from "../Logo/PNG/main-logo-transparent.png";

const Navbar = () => {
  const currentPage = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    return (
      <ul className={isMobile ? "navList" : "navListWeb"}>
        <li>
          <NavLink exact to="/" className="navLink" onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutme" className="navLink" onClick={closeMobileMenu}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="navLink" onClick={closeMobileMenu}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navLink" onClick={closeMobileMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className={currentPage !== "/" ? "nav" : "navMini"}>
        {currentPage !== "/" && (
          <NavLink to="/" className="navLogo">
            <img src={logo} alt="mini logo" />
          </NavLink>
        )}

        {isMobile && (
          <div className="navToggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`navMenu  ${isMenuOpen ? "showMenu" : "hideMenu"}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="navClose" id="nav-close" onClick={closeMobileMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default Navbar;
