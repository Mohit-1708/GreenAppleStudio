import React from 'react';
import group from '../assets/images/Group1.png';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>GreenApple <br/> Studio</h1>
        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.</p>
        <a href="#" className="btn btn-hero">Download</a>
      </div>
      
      <div className="hero-image">
        <img src={group} alt="GreenApple Studio" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
