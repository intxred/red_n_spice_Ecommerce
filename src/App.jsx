import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home setCurrentPage={navigateTo} />;
      case 'Menu': return <Menu />;
      case 'About': return <About setCurrentPage={navigateTo} />;
      case 'Contact': return <Contact />;
      default: return <Home setCurrentPage={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={navigateTo} />
    </div>
  );
};

export default App;
