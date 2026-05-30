'use client';
import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import catG from '../../assets/images/catGame.png';
import water from '../../assets/images/water-game.png';
import gun from '../../assets/images/gunGame.png';
import girl from '../../assets/images/girlGame.png';
import './FeaturedGames.css';

const games = [
  {
    img: water,
    title: 'Tide Runners',
    tags: ['Adventure', 'Sailing', 'Open World'],
    badge: 'New',
  },
  {
    img: catG,
    title: 'Paw Quest',
    tags: ['Puzzle', 'Cute', 'Story-driven'],
    badge: 'New',
  },
  {
    img: gun,
    title: 'Post Scriptum',
    tags: ['FPS', 'Tactical', 'Multiplayer'],
    badge: 'Hot',
  },
  {
    img: girl,
    title: 'Neon Drift',
    tags: ['Racing', 'Arcade', 'Relaxing'],
    badge: null,
  },
];

export default function FeaturedGames() {
  const scrollRef = useRef(null);
  const sectionRef = useScrollReveal(0.08);

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -330, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  330, behavior: 'smooth' });

  return (
    <section className="featured reveal" ref={sectionRef}>
      <div className="featured-header">
        <h2 className="fg-section-title">NEW GAMES</h2>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={scrollLeft} aria-label="Scroll left">◀</button>
          <button className="nav-btn" onClick={scrollRight} aria-label="Scroll right">▶</button>
        </div>
      </div>

      <div className="game-cards" ref={scrollRef}>
        {games.map((g) => (
          <div className="game-card" key={g.title}>
            <img src={g.img.src || g.img} alt={g.title} className="game-img" />
            <div className="game-overlay">
              {g.badge && <span className="badge">{g.badge}</span>}
              <h3 className="game-title">{g.title}</h3>
              <ul className="game-tags">
                {g.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="game-buttons">
                <a href="#contact" className="btn-outline">GO TO GAME</a>
                <a href="#contact" className="btn-buy">BUY GAME</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
