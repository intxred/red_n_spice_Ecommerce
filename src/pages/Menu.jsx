import React, { useState } from 'react';
import './Menu.css';

import dragonWing from '../assets/images/dish-dragon-wing.jpg';
import koreanFeast from '../assets/images/menu-korean-feast.jpg';
import slide1 from '../assets/images/slide-1.jpg';
import slide2 from '../assets/images/slide-2.jpg';
import slide3 from '../assets/images/slide-3.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import heroFeature from '../assets/images/hero-feature.jpg';

const CATEGORIES = ['All', 'Starters', 'Wings', 'Main Dishes', 'Pasta & Rice', 'Desserts', 'Drinks'];

// Map images to menu items — cycle through available images creatively
const IMAGES = [
  gallery1, gallery2, dragonWing, slide1, dragonWing, gallery3,
  gallery4, slide2, slide3, koreanFeast, gallery5, gallery6,
  heroFeature, gallery1, gallery2, gallery3, slide1, gallery4,
  gallery5, gallery6
];

const MENU_ITEMS = [
  { id: 1, name: 'Crispy Spring Rolls', cat: 'Starters', price: 189, desc: 'Golden fried rolls stuffed with vegetables and glass noodles, served with sweet chili dip.', heat: 1, tag: 'Veg-Friendly' },
  { id: 2, name: 'Loaded Nachos', cat: 'Starters', price: 249, desc: 'Tortilla chips piled high with cheese, jalapeños, salsa, sour cream, and guacamole.', heat: 2, tag: 'Popular' },
  { id: 3, name: 'Garlic Cheese Bread', cat: 'Starters', price: 169, desc: 'Crispy sourdough with roasted garlic butter and melted mozzarella, broiled to perfection.', heat: 0, tag: '' },
  { id: 4, name: 'Buffalo Wings (6 pcs)', cat: 'Wings', price: 299, desc: 'Classic buffalo sauce, crispy skin, tender inside — the original crowd-pleaser.', heat: 3, tag: 'Best Seller' },
  { id: 5, name: 'Dragon Wings (6 pcs)', cat: 'Wings', price: 329, desc: 'Our signature habanero glaze with a mango finish. Sweet heat on another level.', heat: 4, tag: 'Signature' },
  { id: 6, name: 'Garlic Parmesan Wings', cat: 'Wings', price: 299, desc: 'Tossed in butter, fresh garlic, and aged parmesan. A milder but deeply satisfying option.', heat: 1, tag: '' },
  { id: 7, name: 'Honey BBQ Wings', cat: 'Wings', price: 299, desc: 'Slow-smoked with house BBQ sauce and a drizzle of pure local honey.', heat: 2, tag: '' },
  { id: 8, name: 'Smoky BBQ Ribs', cat: 'Main Dishes', price: 699, desc: 'Half rack of baby back ribs slow-cooked for 8 hours in our proprietary smoke rub.', heat: 2, tag: "Chef's Pick" },
  { id: 9, name: 'Inferno Burger', cat: 'Main Dishes', price: 389, desc: 'Double smash patty with habanero cheese, ghost pepper aioli, and crispy jalapeño strings.', heat: 4, tag: 'New' },
  { id: 10, name: 'Grilled Chicken Steak', cat: 'Main Dishes', price: 449, desc: 'Marinated chicken breast grilled over charcoal, served with roasted vegetables and gravy.', heat: 1, tag: '' },
  { id: 11, name: 'Aglio e Olio', cat: 'Pasta & Rice', price: 299, desc: 'Spaghetti tossed with olive oil, garlic, fresh parsley, and a kick of chili flakes.', heat: 2, tag: '' },
  { id: 12, name: 'Spicy Arrabbiata', cat: 'Pasta & Rice', price: 319, desc: 'Penne in a fire-roasted tomato sauce with generous chili, garlic, and basil.', heat: 3, tag: 'Popular' },
  { id: 13, name: 'Red & Spice Fried Rice', cat: 'Pasta & Rice', price: 279, desc: 'Wok-fried rice with house XO sauce, egg, scallions, and your choice of protein.', heat: 2, tag: '' },
  { id: 14, name: 'Chili Chocolate Lava Cake', cat: 'Desserts', price: 199, desc: 'Warm chocolate cake with a molten center, infused with a hint of cayenne. Served with vanilla ice cream.', heat: 1, tag: 'Must Try' },
  { id: 15, name: 'Mango Sticky Rice', cat: 'Desserts', price: 169, desc: 'Sweet glutinous rice with fresh Philippine mango and coconut cream.', heat: 0, tag: '' },
  { id: 16, name: 'Ube Cheesecake', cat: 'Desserts', price: 189, desc: 'Creamy Filipino ube-infused cheesecake on a graham crust, garnished with ube halaya.', heat: 0, tag: 'Local Fave' },
  { id: 17, name: 'Signature Spice Lemonade', cat: 'Drinks', price: 149, desc: 'Fresh lemonade with a secret spice blend and a tajin rim. Refreshingly dangerous.', heat: 1, tag: '' },
  { id: 18, name: 'Mango Chili Shake', cat: 'Drinks', price: 169, desc: 'Blended fresh mango with chili powder, lime, and honey. Sweet fire in a glass.', heat: 2, tag: 'New' },
  { id: 19, name: 'Classic Iced Tea', cat: 'Drinks', price: 89, desc: 'House-brewed black tea served over ice with fresh lemon.', heat: 0, tag: '' },
  { id: 20, name: 'Bottomless Soda', cat: 'Drinks', price: 99, desc: 'Choice of cola, lemon soda, or orange — refills all day.', heat: 0, tag: 'Value' },
];

const HEAT_LABELS = ['', '🌶', '🌶🌶', '🌶🌶🌶', '🌶🌶🌶🌶'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const filtered = activeCategory === 'All' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === activeCategory);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 800);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(c => c.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev
      .map(c => c.id === id ? { ...c, qty: c.qty + delta } : c)
      .filter(c => c.qty > 0)
    );
  };

  const total = cart.reduce((acc, c) => acc + c.price * c.qty, 0);
  const cartCount = cart.reduce((acc, c) => acc + c.qty, 0);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-bg" />
        <div className="menu-hero-content">
          <p className="section-subtitle">Explore Our Offerings</p>
          <h1 className="section-title">Our <span>Menu</span></h1>
          <p>Every dish is made from scratch. Bold. Fresh. Unapologetically flavorful.</p>
        </div>
      </div>

      <div className="menu-body container">
        {/* Categories */}
        <div className="category-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="menu-grid">
          {filtered.map((item, idx) => {
            const imgSrc = IMAGES[(item.id - 1) % IMAGES.length];
            return (
              <div className="menu-card" key={item.id} style={{ animationDelay: `${(idx % 8) * 0.06}s` }}>
                <div className="menu-card-img">
                  <img src={imgSrc} alt={item.name} />
                  {item.tag && <div className="menu-tag">{item.tag}</div>}
                  {item.heat > 0 && <div className="menu-heat">{HEAT_LABELS[item.heat]}</div>}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <span className="menu-cat-badge">{item.cat}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="menu-card-footer">
                    <span className="menu-price">₱{item.price}</span>
                    <button
                      className={`add-btn ${addedId === item.id ? 'added' : ''}`}
                      onClick={() => addToCart(item)}
                    >
                      {addedId === item.id ? '✓ Added' : '+ Add'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <button className="cart-fab" onClick={() => setCartOpen(true)}>
          🛒 <span>{cartCount}</span> · ₱{total.toLocaleString()}
        </button>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Your Order</h3>
              <button onClick={() => setCartOpen(false)}>✕</button>
            </div>
            <div className="cart-items">
              {cart.length === 0 && (
                <p className="cart-empty">Your cart is empty. Add something delicious!</p>
              )}
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <strong>{item.name}</strong>
                    <span className="cart-item-price">₱{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>₱{total.toLocaleString()}</strong>
              </div>
              <button className="btn-primary checkout-btn">Place Order →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;