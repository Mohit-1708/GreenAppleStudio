import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./Footer.css";
import logo from "../assets/icons/logo.svg";
import footer from "../assets/images/footer.png";
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    {/* Left Side */}
    <div className="footer-left">
      <p className="logo-text">
        <img src={logo} alt="logo" className="footer-logo" />
        GreenAppleStudio
      </p>
      <div className="footer-links">
        <a href="#">Contacts</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Legal</a>
      </div>
    </div>

    {/* Right Side */}
    <div className="footer-right">
      <span className="follow-text">Follow</span>
      <div className="footer-icons">
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </div>
  </div>

  <hr className="footer-divider" />
</footer>
  );
};

export default Footer;
