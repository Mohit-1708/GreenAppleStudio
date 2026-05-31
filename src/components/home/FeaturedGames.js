'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './FeaturedGames.css';

const itchUrl = 'https://greenapplestudio.itch.io/crypticpursuit-insomnia';
const trailerUrl = 'https://www.youtube.com/watch?v=FOCQAvVVb9c';

const games = [
  {
    img: '/cryptic_pursuit.png',
    title: 'Cryptic Pursuit - Insomnia',
    tags: ['Horror', 'Survival', 'Windows'],
    badge: 'Live',
  },
];

export default function FeaturedGames() {
  const sectionRef = useScrollReveal(0.08);

  return (
    <section className="featured reveal" ref={sectionRef}>
      <div className="featured-header">
        <h2 className="fg-section-title">NEW GAMES</h2>
      </div>

      <div className="game-cards">
        {games.map((g) => (
          <div className="game-card" key={g.title}>
            <img src={g.img} alt={g.title} className="game-img" />
            <div className="game-overlay">
              {g.badge && <span className="badge">{g.badge}</span>}
              <h3 className="game-title">{g.title}</h3>
              <ul className="game-tags">
                {g.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="game-buttons">
                <a href={trailerUrl} className="btn-outline" target="_blank" rel="noreferrer">WATCH TRAILER</a>
                <a href={itchUrl} className="btn-buy" target="_blank" rel="noreferrer">DOWNLOAD</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
