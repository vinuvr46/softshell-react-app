import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Import local image

const HeroSection = ({ darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Styles for light and dark mode
  const heroWrapperStyle = {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage:
      'url("https://media.istockphoto.com/id/455595525/vector/communication.jpg?s=612x612&w=0&k=20&c=79IVeVm52Ynfmq7QPZQPgNsEuySFinojjjz6mDI57Gw=")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: darkMode ? '#F2F2F2' : '#333',
    padding: '50px 20px',
    textAlign: 'center',
    transition: 'all 0.3s ease', // Smooth transition for background and color changes
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.6)', // Darker overlay for dark mode
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '300px',
    height: '300px',
    marginBottom: '10px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: darkMode ? '0 4px 15px rgba(255, 255, 255, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease', // Add smooth transition for shadow change
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: '1px',
    lineHeight: '1.4',
    transition: 'all 0.3s ease',
  };

  const subheadingStyle = {
    fontSize: '2rem',
    fontWeight: 300,
    marginBottom: '50px',
    fontFamily: "'Arial', sans-serif",
    maxWidth: '600px',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #ffcc00, #ff7700)',
    color: '#fff',
    padding: '15px 200px',
    fontSize: '1.4rem',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background 0.3s, transform 0.3s',
    fontFamily: "'Roboto', sans-serif",
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #ffbb00, #ff5500)',
    transform: 'scale(1.05)',
  };

  const ctaStyle = {
    fontSize: '1.5rem',
    color: 'yellow',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <section style={heroWrapperStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <img src={logo} alt="SoftSell Logo" style={logoStyle} />
        <h1 style={headingStyle}>Welcome to SoftSell</h1>
        <p style={subheadingStyle}>
          We help you get the most out of your software licenses with customized solutions and expert support.
        </p>
        <button
          style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get a Quote
        </button>
        <p style={ctaStyle}>
          Let us help you find the perfect license plan for your business needs.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
