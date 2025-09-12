import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">GreenAppleStudio</span>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/games">Our Games</Link></li>
            <li><Link to="/publishing">Publishing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </nav>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </header>
  );
};

export default Header;
