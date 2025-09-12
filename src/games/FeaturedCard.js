import React from "react";
import "./FeaturedCard.css";
import gameImg from "../assets/images/cardimg.png"; 
import platforms from "../assets/images/plateforms.png"; 


const FeaturedCard = () => {
  return (
    <div className="featured-wrapper">
  <div className="featured-glow">
    <div className="featured-card">
      <img src={gameImg} alt="Game" className="featured-img" />
      <div className="featured-overlay">
        <div className="featured-left">
          <h2 className="game-title1">POST SCRIPTUM</h2>
          <p className="game-genre1">FPS</p>
          <div className="platform-icons">
            <img src={platforms} alt="Xbox" />
          </div>
        </div>
        <div className="featured-right">
          <a href="#" className="btn-outline">Wishlist</a>
          <a href="#" className="btn-buy">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default FeaturedCard;
