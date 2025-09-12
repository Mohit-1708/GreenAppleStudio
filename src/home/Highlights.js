import React from 'react';
import nemo from '../assets/images/nemo.png';
import girl from '../assets/images/girlGame.png';
import catG from '../assets/images/catGame.png';
import water from '../assets/images/water-game.png';


const Highlights = () => {
  return (
    <section className="highlights container">
      <h2 className="section-title">Highlights</h2>
      <div className="highlight-cards">
        <div className="card">
          <img src={water} alt="Game" />
          <p className="card-title">Lepotorts</p>
          <p className="card-subtitle">MGiForg</p>
        </div>
        <div className="card">
          <img src={nemo} alt="Game" />
          <p className="card-title">Sopustcors</p>
          <p className="card-subtitle">PooFills</p>
        </div>
        <div className="card">
          <img src={catG} alt="Game" />
          <p className="card-title">Lepotorts</p>
          <p className="card-subtitle">MESits</p>
        </div>
        <div className="card">
          <img src={girl} alt="Game" />
          <p className="card-title">Fdornn</p>
          <p className="card-subtitle">SorpLf</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
