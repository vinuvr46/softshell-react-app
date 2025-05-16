// src/App.jsx
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f0f8ff';
    document.body.style.color = darkMode ? '#f0f0f0' : '#000000';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    padding: '10px 20px',
    borderRadius: '8px',
    background: darkMode ? '#f0f0f0' : '#333',
    color: darkMode ? '#333' : '#f0f0f0',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
      <div>
        <HeroSection darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <WhyChooseUs darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
      </div>
    </>
  );
};

export default App;
