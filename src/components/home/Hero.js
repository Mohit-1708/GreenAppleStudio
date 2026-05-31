'use client';
import { useEffect, useRef } from 'react';
import group from '../../assets/images/Group1.png';
import './Hero.css';

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => {
      textRef.current?.classList.add('visible');
      imgRef.current?.classList.add('visible');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text reveal-left" ref={textRef}>
        <p className="hero-eyebrow">GAME STUDIO</p>
        <h1 className="hero-title">
          <span className="hero-line">We build worlds.</span>
          <span className="hero-line">We tell stories.</span>
        </h1>
        <p className="hero-sub">
          GreenApple Studio creates original games, publishes indie titles,
          and builds custom games for developers worldwide.
        </p>
        <div className="hero-actions">
          <a href="#games" className="btn btn-primary">Explore Our Games</a>
          <a href="#contact" className="btn btn-outline-white">Work With Us</a>
        </div>
      </div>

      <div className="hero-image reveal-right" ref={imgRef}>
        <img src={group.src || group} alt="GreenApple Studio games" className="hero-img" />
      </div>
    </section>
  );
}
