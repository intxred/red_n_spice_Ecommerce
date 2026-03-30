import React from 'react';
import './About.css';

import storyImg from '../assets/images/story.jpg';
import dragonWing from '../assets/images/dish-dragon-wing.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';

const VALUES = [
  { icon: '🔥', title: 'Boldness', desc: 'We never play it safe. Every dish pushes the boundary of flavor and heat.' },
  { icon: '🤝', title: 'Community', desc: 'Red & Spice is built by and for our community — local farmers, staff, and loyal guests.' },
  { icon: '🌱', title: 'Sustainability', desc: 'We source responsibly, reduce waste, and partner with farms that share our values.' },
  { icon: '❤️', title: 'Passion', desc: 'Every recipe comes from the heart. We pour ourselves into every single plate.' },
];

const TEAM = [
  { name: 'Chef Marco Rivera', role: 'Executive Chef & Co-Founder', note: 'Trained in Bangkok and New Orleans, Marco brings fire to every dish he creates. 20 years of culinary mastery.', emoji: '👨‍🍳' },
  { name: 'Chef Ana Torres', role: 'Pastry Chef', note: 'Ana blends Filipino tradition with global technique, crafting desserts that are both surprising and comforting.', emoji: '👩‍🍳' },
  { name: 'Chef Ben Lim', role: 'Sous Chef', note: 'Ben specializes in wings and grilled meats. His smoke rub recipe has become the stuff of legend in Manila.', emoji: '👨‍🍳' },
];

const About = ({ setCurrentPage }) => (
  <div className="about-page">
    {/* HERO */}
    <section className="about-hero">
      <div className="about-hero-bg" />
      <div className="about-hero-content">
        <p className="section-subtitle">Our Story</p>
        <h1 className="section-title">Born From <span>Fire</span></h1>
        <p className="about-hero-sub">
          Red & Spice started as a humble food stall in 2012 with a single obsession — wings so good they would haunt your dreams.
        </p>
      </div>
    </section>

    {/* STORY */}
    <section className="story-section">
      <div className="container">
        <div className="story-grid">
          <div className="story-text">
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              How It All <span>Began</span>
            </h2>
            <p>It was 2012 when Chef Marco Rivera packed up his knives from a five-star hotel and set up a tiny stall at a weekend bazaar in Quezon City. His dream? To prove that street food could be extraordinary.</p>
            <p>His dragon wings — slathered in a habanero-mango glaze he'd been perfecting for years — sold out in 40 minutes. Every weekend. For six months straight.</p>
            <p>By 2014, Red & Spice had its first brick-and-mortar location. By 2018, a second. Today, we have locations across Metro Manila, a loyal tribe of over 25,000 guests, and a menu that's grown to over 150 dishes.</p>
            <p>But the heart? It's still the same. Bold food. Honest flavors. A table for everyone.</p>
          </div>
          <div className="story-imgs">
            <div className="story-img-main">
              <img src={storyImg} alt="Our Origin Story" />
            </div>
            <div className="story-img-sm story-img-sm-1">
              <img src={gallery1} alt="The Kitchen" />
            </div>
            <div className="story-img-sm story-img-sm-2">
              <img src={dragonWing} alt="The Ingredients" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* MISSION */}
    <section className="mission-section">
      <div className="container">
        <div className="mission-banner">
          <div className="mission-decoration" />
          <p className="section-subtitle">Our Mission</p>
          <blockquote>
            "To create food that ignites joy, brings people together, and reminds them that the best meals are the ones shared with the people they love."
          </blockquote>
          <cite>— Chef Marco Rivera, Co-Founder</cite>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="values-section">
      <div className="container">
        <div className="section-header centered">
          <p className="section-subtitle">What Drives Us</p>
          <h2 className="section-title">Our <span>Values</span></h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="team-section">
      <div className="container">
        <div className="section-header centered">
          <p className="section-subtitle">Meet the Minds Behind the Meals</p>
          <h2 className="section-title">Our <span>Chefs</span></h2>
        </div>
        <div className="team-grid">
          {TEAM.map((t, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">
                <div className="team-avatar-emoji">
                  <span>{t.emoji}</span>
                </div>
                <div className="team-avatar-ring" />
              </div>
              <h3>{t.name}</h3>
              <span className="team-role">{t.role}</span>
              <p>{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="about-cta">
      <div className="about-cta-bg" />
      <div className="container about-cta-inner">
        <h2>Ready to Experience <span>Red & Spice?</span></h2>
        <div className="cta-buttons" style={{ justifyContent: 'center', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => setCurrentPage('Menu')}>Explore Menu</button>
          <button className="btn-secondary" onClick={() => setCurrentPage('Contact')}>Find a Location</button>
        </div>
      </div>
    </section>
  </div>
);

export default About;