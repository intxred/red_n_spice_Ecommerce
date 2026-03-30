import React, { useState } from 'react';
import './Contact.css';

const HOURS = [
  { day: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
  { day: 'Friday – Saturday', time: '11:00 AM – 12:00 AM' },
  { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
];

const SOCIALS = [
  { icon: '📘', label: 'Facebook', handle: '@RedAndSpicePH', url: 'https://facebook.com' },
  { icon: '📷', label: 'Instagram', handle: '@redandspice.ph', url: 'https://instagram.com' },
  { icon: '🐦', label: 'Twitter / X', handle: '@RedSpicePH', url: 'https://twitter.com' },
  { icon: '🎵', label: 'TikTok', handle: '@redandspice', url: 'https://tiktok.com' },
];

const LOCATIONS = [
  {
    name: 'Makati Branch',
    address: '123 Ayala Avenue, Makati City',
    phone: '+63 912 345 6789',
    mapUrl: 'https://maps.google.com/?q=Ayala+Avenue+Makati+City',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d121.0167!3d14.5579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzI4LjQiTiAxMjHCsDAxJzAwLjEiRQ!5e0!3m2!1sen!2sph!4v1'
  },
  {
    name: 'BGC Branch',
    address: '456 Bonifacio High Street, Taguig',
    phone: '+63 918 987 6543',
    mapUrl: 'https://maps.google.com/?q=Bonifacio+High+Street+BGC+Taguig',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d121.0400!3d14.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMyJzU5LjAiTiAxMjHCsDAyJzI0LjAiRQ!5e0!3m2!1sen!2sph!4v1'
  },
  {
    name: 'Quezon City Branch',
    address: '789 Katipunan Ave, Quezon City',
    phone: '+63 927 654 3210',
    mapUrl: 'https://maps.google.com/?q=Katipunan+Avenue+Quezon+City',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d121.0765!3d14.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzQ2LjIiTiAxMjHCsDA0JzM1LjQiRQ!5e0!3m2!1sen!2sph!4v1'
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <p className="section-subtitle">Get in Touch</p>
          <h1 className="section-title">Contact <span>Us</span></h1>
          <p>We'd love to hear from you — for reservations, events, feedback, or just to say hi.</p>
        </div>
      </section>

      <div className="contact-body container">
        <div className="contact-grid">
          {/* FORM */}
          <div className="contact-form-wrap">
            <h2>Send Us a Message</h2>
            {submitted && (
              <div className="success-banner">
                ✅ Message received! We'll get back to you within 24 hours.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Juan dela Cruz"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+63 912 345 6789"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="form-select"
                  >
                    <option>General Inquiry</option>
                    <option>Reservation</option>
                    <option>Private Event</option>
                    <option>Feedback</option>
                    <option>Catering</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  placeholder="Tell us what's on your mind — a reservation, private event, or just want to gush about the wings..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn-primary submit-btn">
                Send Message →
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="contact-info">
            {/* Hours */}
            <div className="info-card">
              <div className="info-card-header">
                <span>🕐</span>
                <h3>Opening Hours</h3>
              </div>
              <div className="hours-list">
                {HOURS.map((h, i) => (
                  <div className="hours-row" key={i}>
                    <span>{h.day}</span>
                    <strong>{h.time}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="info-card">
              <div className="info-card-header">
                <span>📞</span>
                <h3>Contact Details</h3>
              </div>
              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <span className="detail-icon">📧</span>
                  <div>
                    <strong>Email Us</strong>
                    <span>hello@redandspice.ph</span>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <span>+63 912 345 6789</span>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📍</span>
                  <div>
                    <strong>Head Office</strong>
                    <span>Metro Manila, Philippines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="info-card">
              <div className="info-card-header">
                <span>📱</span>
                <h3>Follow Us</h3>
              </div>
              <div className="socials-list">
                {SOCIALS.map((s, i) => (
                  <a href={s.url} className="social-row" key={i} target="_blank" rel="noreferrer">
                    <span className="s-icon">{s.icon}</span>
                    <div className="social-text">
                      <strong>{s.label}</strong>
                      <span className="social-handle">{s.handle}</span>
                    </div>
                    <span className="s-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LOCATIONS */}
        <div className="locations-section">
          <div className="section-header centered">
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title">Our <span>Branches</span></h2>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map((loc, i) => (
              <div className="location-card" key={i}>
                <div className="location-map">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="map-placeholder"
                    aria-label={`Open ${loc.name} in Maps`}
                  >
                    <span>📍</span>
                    <span className="map-label">{loc.name}</span>
                    <span className="map-sublabel">Open in Maps ↗</span>
                  </a>
                </div>
                <div className="location-info">
                  <h3>{loc.name}</h3>
                  <p>📍 {loc.address}</p>
                  <p>📞 {loc.phone}</p>
                  <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="directions-btn">
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;