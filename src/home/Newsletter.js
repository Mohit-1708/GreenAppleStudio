import React from "react";
import "./Newsletter.css";
import catBg from '../assets/images/cat-bg.png';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        {/* Left Side: Text + Form */}
        <div className="newsletter-left">
          <h2 className="newsletter-title">
            Get the Latest Game <br /> News and Offers!
          </h2>

          <form className="newsletter-form">
  {/* Email */}
  <div className="form-group">
    <label>Email:</label>
    <input type="email" placeholder="Enter your email" />
  </div>

  {/* Date of Birth */}
  <div className="form-group">
    <label>Date of Birth:</label>
    <input type="date" />
  </div>

  {/* Checkboxes + Submit aligned */}
  <div className="checkbox-submit-wrapper">
    <div className="checkbox-group">
      <p>I would like to receive the following updates:*</p>

      <label>
        <input type="checkbox" /> Exclusive Offers, Promotions & Sales
      </label>

      <label>
        <input type="checkbox" /> Early Access to Game Updates
      </label>
    </div>

    {/* Submit button aligned right */}
    <button type="submit" className="submit-btn">
      SUBMIT
    </button>
  </div>
</form>

        </div>

        {/* Right Side: Image */}
        <div className="newsletter-right">
          <img
            src={catBg}
            alt="Game Character"
            className="character-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
