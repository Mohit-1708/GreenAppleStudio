'use client';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Games', href: '#games' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaXTwitter />, label: 'Twitter', href: '#' },
  { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo-link">
            <img src="/icons/logo.svg" alt="GreenApple Studio" className="footer-logo-img" />
            <span className="footer-logo-text">GreenAppleStudio</span>
          </a>
          <p className="footer-tagline">
            Creating worlds, publishing dreams,<br />building your vision.
          </p>
          <a href="mailto:info@greenapplestudio.in" className="footer-email">
            info@greenapplestudio.in
          </a>
        </div>

        {/* Nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-nav-title">Navigate</p>
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className="footer-nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Socials */}
        <div className="footer-socials">
          <p className="footer-nav-title">Follow Us</p>
          <div className="footer-social-icons">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">© {year} GreenApple Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
