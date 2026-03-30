import React, { useEffect, useState } from 'react';
import './Home.css'; // Make sure this path matches your CSS file

import heroImg from '../assets/images/hero-feature.jpg';
import slide1 from '../assets/images/slide-1.jpg';
import slide2 from '../assets/images/slide-2.jpg';
import slide3 from '../assets/images/slide-3.jpg';
import dragonWing from '../assets/images/dish-dragon-wing.jpg';
import koreanFeast from '../assets/images/menu-korean-feast.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';

const STATS = [
  { value: '150+', label: 'Menu Items' },
  { value: '25K+', label: 'Happy Guests' },
  { value: '12', label: 'Years of Flavor' },
  { value: '4.9★', label: 'Rating' },
];

const FEATURES = [
  { icon: '🔥', title: 'Fiery Flavors', desc: 'Every dish crafted to ignite your taste buds with authentic spice blends sourced from around the globe.' },
  { icon: '🌿', title: 'Farm Fresh', desc: 'We partner with local farmers to bring only the freshest, highest-quality ingredients to your plate.' },
  { icon: '👨‍🍳', title: 'Master Chefs', desc: 'Our culinary team brings decades of experience to every dish, combining tradition with innovation.' },
  { icon: '🚀', title: 'Fast Delivery', desc: 'Hot, fresh, and delivered to your door in under 45 minutes — taste without the wait.' },
];

const SLIDES = [
  { img: slide1, label: 'Dragon Wings' },
  { img: slide2, label: 'BBQ Ribs' },
  { img: slide3, label: 'Inferno Burger' },
];

const Home = ({ setCurrentPage }) => {
  const [visible, setVisible] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIdx(i => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const galleryImgs = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  const galleryLabels = ['Dragon Wings', 'Korean Feast', 'BBQ Ribs', 'Inferno Burger', 'Desserts', 'The Kitchen'];

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-gradient" />
          <div className="hero-noise" />
          <div className="hero-dots" />
        </div>

        <div className={`hero-content ${visible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot" />
            Now Open · 11am – 12am
          </div>
          <h1 className="hero-headline">
            <span className="hero-line-1">BOLD</span>
            <span className="hero-line-2">
              <span className="outline-text">FLAVORS</span>
            </span>
            <span className="hero-line-3">UNFORGETTABLE</span>
            <span className="hero-line-4">BITES</span>
          </h1>
          <p className="hero-sub">
            Where heat meets heart — every dish a masterpiece of spice, soul, and pure satisfaction.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary hero-btn" onClick={() => setCurrentPage('Menu')}>
              Explore Menu <span>→</span>
            </button>
            <button className="btn-secondary" onClick={() => setCurrentPage('About')}>
              Our Story
            </button>
          </div>
        </div>

        <div className={`hero-visual ${visible ? 'visible' : ''}`}>
          <div className="hero-img-wrap">
            <div className="hero-main-img">
              <img src={heroImg} alt="Signature Dish" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="hero-float-card card-1">
              <span>🌶</span>
              <div>
                <strong>Spice Level</strong>
                <p>Customizable</p>
              </div>
            </div>
            <div className="hero-float-card card-2">
              <span>⭐</span>
              <div>
                <strong>4.9 / 5.0</strong>
                <p>1,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        {STATS.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Today's Picks</p>
            <h2 className="section-title">Chef's <span>Favorites</span></h2>
          </div>

          <div className="featured-grid">
            {[
              { name: 'Dragon Wing Platter', price: '₱449', tag: 'Best Seller', heat: 3, img: dragonWing },
              { name: 'Smoky BBQ Ribs', price: '₱699', tag: "Chef's Pick", heat: 2, img: slide2 },
              { name: 'Inferno Burger', price: '₱389', tag: 'New', heat: 4, img: slide3 },
              { name: 'Korean Feast', price: '₱549', tag: 'Crowd Fave', heat: 2, img: koreanFeast },
            ].map((dish, i) => (
              <div className="feat-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feat-card-img">
                  <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                  <div className="feat-tag">{dish.tag}</div>
                  <div className="feat-heat">{'🌶'.repeat(dish.heat)}</div>
                </div>
                <div className="feat-card-body">
                  <h3>{dish.name}</h3>
                  <p>A bold fusion of flavors crafted with premium ingredients and our signature spice blend.</p>
                  <div className="feat-footer">
                    <span className="feat-price">{dish.price}</span>
                    <button className="feat-btn" onClick={() => setCurrentPage('Menu')}>Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="featured-cta">
            <button className="btn-primary" onClick={() => setCurrentPage('Menu')}>
              View Full Menu →
            </button>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-left">
              <p className="section-subtitle">Why Choose Us</p>
              <h2 className="section-title">More Than Just <span>Food</span></h2>
              <p className="why-desc">
                Red & Spice is built on a philosophy: that bold flavors and honest cooking can change how you feel about a meal.
                We don't just feed you — we give you an experience you'll keep coming back for.
              </p>
              <button className="btn-primary" onClick={() => setCurrentPage('About')}>Learn Our Story</button>
            </div>
            <div className="why-right">
              {FEATURES.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDESHOW BANNER */}
      <section className="slideshow-section">
        <div className="slideshow-track">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`slide-item ${i === slideIdx ? 'active' : ''}`}
            >
              <img src={s.img} alt={s.label} />
              <div className="slide-overlay">
                <span>{s.label}</span>
              </div>
            </div>
          ))}
          <div className="slide-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`slide-dot ${i === slideIdx ? 'active' : ''}`}
                onClick={() => setSlideIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header centered">
            <p className="section-subtitle">Food Gallery</p>
            <h2 className="section-title">Eat With Your <span>Eyes First</span></h2>
          </div>
          <div className="gallery-grid">
            {galleryImgs.map((img, i) => (
              <div
                key={i}
                className={`gallery-item g-${i + 1}`}
                onClick={() => setGalleryOpen(i)}
              >
                <img src={img} alt={galleryLabels[i]} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="gallery-overlay">
                  <span>🌶 View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {galleryOpen !== null && (
        <div className="lightbox" onClick={() => setGalleryOpen(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setGalleryOpen(null)}>✕</button>
            <button
              className="lightbox-prev"
              onClick={() => setGalleryOpen((galleryOpen - 1 + galleryImgs.length) % galleryImgs.length)}
            >‹</button>
            <img src={galleryImgs[galleryOpen]} alt={galleryLabels[galleryOpen]} />
            <button
              className="lightbox-next"
              onClick={() => setGalleryOpen((galleryOpen + 1) % galleryImgs.length)}
            >›</button>
            <p className="lightbox-label">{galleryLabels[galleryOpen]}</p>
          </div>
        </div>
      )}

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <p className="section-subtitle">What People Say</p>
            <h2 className="section-title">Guests <span>Love Us</span></h2>
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Maria Santos', text: 'The Dragon Wing Platter changed my life. I dream about it every night. Absolutely unreal flavor!', stars: 5, tag: 'Regular Customer' },
              { name: 'Juan dela Cruz', text: 'Best wings in Manila, hands down. The spice level is customizable which is perfect for my whole family.', stars: 5, tag: 'Food Blogger' },
              { name: 'Ana Reyes', text: 'Service is fast, food is hot, and the ambiance is amazing. Red & Spice never disappoints!', stars: 5, tag: 'Verified Guest' },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="t-stars">{'⭐'.repeat(t.stars)}</div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-author">
                  <div className="t-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-bg" />
        <div className="container cta-content">
          <h2>Ready to Taste the <span>Fire?</span></h2>
          <p>Order online and get free delivery on your first order over ₱500.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => setCurrentPage('Menu')}>Order Now</button>
            <button className="btn-secondary" onClick={() => setCurrentPage('Contact')}>Find Us →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;