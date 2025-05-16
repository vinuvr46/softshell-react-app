// src/components/WhyChooseUs.jsx
import React, { useEffect, useState } from 'react';

const WhyChooseUs = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: darkMode ? '#121212' : '#ffffff', // Change background based on dark mode
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '40px',
    color: darkMode ? '#f0f0f0' : '#333', // Light text for dark mode
    animation: isVisible ? 'fadeIn 1s ease-out' : 'none',
  };

  const reasonsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    justifyContent: 'center',
    animation: isVisible ? 'fadeIn 1.5s ease-out' : 'none',
  };

  const reasonStyle = {
    backgroundColor: darkMode ? '#333' : '#f9f9f9', // Darker background for cards in dark mode
    padding: '50px',
    borderRadius: '15px',
    boxShadow: darkMode ? '0 6px 20px rgba(255, 255, 255, 0.1)' : '0 6px 20px rgba(0, 0, 0, 0.1)', // Light box-shadow in dark mode
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const reasonHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: darkMode ? '0 12px 30px rgba(255, 255, 255, 0.15)' : '0 12px 30px rgba(0, 0, 0, 0.15)',
  };

  const iconStyle = {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
    objectFit: 'contain',
  };

  const reasonTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#007BFF', // Blue color stays the same
    marginBottom: '10px',
  };

  const reasonDescriptionStyle = {
    fontSize: '1.1rem',
    fontWeight: 300,
    color: darkMode ? '#ccc' : '#666', // Lighter color for text in dark mode
    letterSpacing: '0.5px',
    lineHeight: '1.8',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'translateY(-10px)';
    e.target.style.boxShadow = darkMode ? '0 12px 30px rgba(255, 255, 255, 0.15)' : '0 12px 30px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = darkMode ? '0 6px 20px rgba(255, 255, 255, 0.1)' : '0 6px 20px rgba(0, 0, 0, 0.1)';
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Why Choose Us?</h2>
      <div style={reasonsStyle}>
        {/* Existing Reasons */}
        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/537252274/photo/handshaking.webp?b=1&s=612x612&w=0&k=20&c=ZgmCRUN7aEDwbQENmtMOIQG_jZlb1_ZdvrCq4GZ4_rA="
            alt="Trusted Experts"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>Trusted Experts</h3>
          <p style={reasonDescriptionStyle}>
            Our team has years of experience in software valuation.
          </p>
        </div>

        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/944837818/photo/old-alarm-clock-on-yellow-background-4-oclock-3d-illustration-rendering.webp?b=1&s=612x612&w=0&k=20&c=2dPkGrRakvGiQ7koPaXwepY-Vf52zIlB8BBRTKV96Kc="
            alt="Fast Process"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>Fast Process</h3>
          <p style={reasonDescriptionStyle}>
            Get your software licenses evaluated quickly.
          </p>
        </div>

        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/1058694620/photo/data-security-system-shield-protection-verification.webp?b=1&s=612x612&w=0&k=20&c=1ydoCE2T9nxGQvOXZ_nIZuexowUi5FWRaqbU_CBgwEM="
            alt="Secure Transactions"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>Secure Transactions</h3>
          <p style={reasonDescriptionStyle}>
            We ensure the security of your transactions and data.
          </p>
        </div>

        {/* New Reasons */}
        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=DrM7pyMYJXK1cfPMdlXgKSAvoGrd-JdYQOwa7GaF_dE="
            alt="Customer Support"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>24/7 Customer Support</h3>
          <p style={reasonDescriptionStyle}>
            Our support team is available around the clock to assist with any questions.
          </p>
        </div>

        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/1462674451/photo/business-people-with-laptop-at-office.webp?b=1&s=612x612&w=0&k=20&c=14XPI8sboEVYRuqTqj5JrrHmB4JWAYQdnibbk46ZBH0="
            alt="Transparency"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>Full Transparency</h3>
          <p style={reasonDescriptionStyle}>
            We provide transparent processes, so you always know what's happening with your assets.
          </p>
        </div>

        <div
          style={reasonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/468153365/photo/investigate-and-analyze.webp?b=1&s=612x612&w=0&k=20&c=vUDcfX8ORWjDbviv2XVAfZYwSRokPKMzdsNTfaCX1Xs="
            alt="Global Reach"
            style={iconStyle}
          />
          <h3 style={reasonTitleStyle}>Global Reach</h3>
          <p style={reasonDescriptionStyle}>
            We work with clients worldwide, providing global solutions for local needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
