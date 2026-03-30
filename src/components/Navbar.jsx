import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Menu', 'About', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="logo" onClick={() => setCurrentPage('Home')}>
          
          <div className="logo-text">
            <span className="logo-red">Spiced</span>
            <span className="logo-amp"> c </span>
            <span className="logo-spice">Potato</span>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link}>
              <button
                className={`nav-link ${currentPage === link ? 'active' : ''}`}
                onClick={() => { setCurrentPage(link); setMenuOpen(false); }}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button className="nav-order-btn" onClick={() => { setCurrentPage('Menu'); setMenuOpen(false); }}>
              Order Now
            </button>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
