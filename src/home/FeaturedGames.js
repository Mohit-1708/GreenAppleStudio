import React from "react";
import "./FeaturedGames.css"; 
import catG from '../assets/images/catGame.png';
import water from '../assets/images/water-game.png';
import gun from '../assets/images/gunGame.png';

const FeaturedGames = () => {
  return (
    <section className="featured section">
      <h2 className="section-title">FEATURED GAMES</h2>
      <div className="game-cards">
        <div className="game-card">
          <img
            src={water}
            alt="Game"
            className="game-img"
          />
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
          <img
            src={catG}
            alt="Game"
            className="game-img"
          />
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
          <img
            src={gun}
            alt="Game"
            className="game-img"
          />
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
