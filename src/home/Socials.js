import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./Socials.css";

const Socials = () => {
  return (
    <section className="socials">
      <h2 className="socials-title">Follow Us On Socials</h2>
      <div className="social-icons">
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </section>
  );
};

export default Socials;
