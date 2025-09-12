import React, { useRef } from "react";
import "./FeaturedGames.css"; 
import catG from '../assets/images/catGame.png';
import water from '../assets/images/water-game.png';
import gun from '../assets/images/gunGame.png';

const FeaturedGames = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -330, behavior: "smooth" }); // card width + gap
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 330, behavior: "smooth" });
  };

  return (
    <section className="featured section">
      {/* Title + Buttons in one row */}
      <div className="featured-header">
        <h2 className="section-title">NEW GAMES</h2>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={scrollLeft}>◀</button>
          <button className="nav-btn" onClick={scrollRight}>▶</button>
        </div>
      </div>

      {/* Cards */}
      <div className="game-cards" ref={scrollRef}>
        <div className="game-card">
          <img src={water} alt="Game" className="game-img" />
          <div className="game-overlay">
            <span className="badge">New</span>
            <h3 className="game-title">Ritual of Raven</h3>
            <ul className="game-tags">
              <li>Creative</li>
              <li>Farming</li>
              <li>Relaxing</li>
              <li>Story-driven</li>
            </ul>
            <div className="game-buttons">
              <a href="#" className="btn-outline">GO TO GAME</a>
              <a href="#" className="btn-buy">BUY GAME</a>
            </div>
          </div>
        </div>

        <div className="game-card">
          <img src={catG} alt="Game" className="game-img" />
          <div className="game-overlay">
            <span className="badge">New</span>
            <h3 className="game-title">Ritual of Raven</h3>
            <ul className="game-tags">
              <li>Creative</li>
              <li>Farming</li>
              <li>Relaxing</li>
              <li>Story-driven</li>
            </ul>
            <div className="game-buttons">
              <a href="#" className="btn-outline">GO TO GAME</a>
              <a href="#" className="btn-buy">BUY GAME</a>
            </div>
          </div>
        </div>

        <div className="game-card">
          <img src={gun} alt="Game" className="game-img" />
          <div className="game-overlay">
            <span className="badge">New</span>
            <h3 className="game-title">Ritual of Raven</h3>
            <ul className="game-tags">
              <li>Creative</li>
              <li>Farming</li>
              <li>Relaxing</li>
              <li>Story-driven</li>
            </ul>
            <div className="game-buttons">
              <a href="#" className="btn-outline">GO TO GAME</a>
              <a href="#" className="btn-buy">BUY GAME</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
