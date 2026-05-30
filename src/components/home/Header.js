'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Games', href: '#games' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="logo">
          <img src="/icons/logo.svg" alt="GreenApple Studio logo" className="logo-img" />
          <span className="logo-text">GreenAppleStudio</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary header-cta" onClick={handleNavClick}>
          Contact Us
        </a>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="mobile-link" onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={handleNavClick}>
          Contact Us
        </a>
      </div>
    </header>
  );
}
