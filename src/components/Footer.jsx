import React from 'react';
import './Footer.css';

const Footer = ({ setCurrentPage }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="footer-logo-icon">🌶</span>
          <span className="footer-logo-text"><span>The</span>Spiced<span>Potato</span></span>
        </div>
        <p className="footer-tagline">Bold Flavors. Unforgettable Bites.</p>
        <div className="footer-social">
          {['facebook', 'instagram', 'twitter', 'tiktok'].map(s => (
            <a key={s} href="#" className="social-icon" aria-label={s}>
              {s === 'facebook' && '📘'}
              {s === 'instagram' && '📷'}
              {s === 'twitter' && '🐦'}
              {s === 'tiktok' && '🎵'}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-links">
        <h4>Navigate</h4>
        <ul>
          {['Home','Menu','About','Contact'].map(l => (
            <li key={l}><button onClick={() => setCurrentPage(l)}>{l}</button></li>
          ))}
        </ul>
      </div>

      <div className="footer-links">
        <h4>Hours</h4>
        <ul>
          <li><span>Mon – Thu</span><span>11am – 10pm</span></li>
          <li><span>Fri – Sat</span><span>11am – 12am</span></li>
          <li><span>Sunday</span><span>12pm – 9pm</span></li>
        </ul>
      </div>

      <div className="footer-links">
        <h4>Contact</h4>
        <ul>
          <li>📍 123 Flavor Street, Manila</li>
          <li>📞 +63 912 345 6789</li>
          <li>✉️ hello@redandspice.ph</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 Red & Spice. All rights reserved.</p>
      <p>Crafted with 🌶 and love.</p>
    </div>
  </footer>
);

export default Footer;
