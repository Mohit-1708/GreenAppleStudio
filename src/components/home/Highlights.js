'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import nemo from '../../assets/images/nemo.png';
import girl from '../../assets/images/girlGame.png';
import catG from '../../assets/images/catGame.png';
import water from '../../assets/images/water-game.png';
import './Highlights.css';

const games = [
  { img: water, title: 'Tide Runners', studio: 'GreenApple' },
  { img: nemo, title: 'Deep Dive', studio: 'GreenApple' },
  { img: catG, title: 'Paw Quest', studio: 'GreenApple' },
  { img: girl, title: 'Neon Drift', studio: 'GreenApple' },
];

export default function Highlights() {
  const titleRef = useScrollReveal();
  const cardsRef = useScrollReveal(0.08);

  return (
    <section className="highlights">
      <h2 className="highlights-title reveal" ref={titleRef}>
        Highlights
      </h2>
      <div className="highlight-cards stagger reveal" ref={cardsRef}>
        {games.map((g) => (
          <div className="hl-card" key={g.title}>
            <img src={g.img.src || g.img} alt={g.title} className="hl-img" />
            <p className="hl-title">{g.title}</p>
            <p className="hl-studio">{g.studio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
