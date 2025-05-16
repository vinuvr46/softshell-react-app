import React from 'react';

const HowItWorks = ({ darkMode }) => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: darkMode ? '#333' : '#f4f7fb',  // Dark background in dark mode
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '50px',
    fontFamily: "'Roboto', sans-serif",
    color: darkMode ? '#fff' : '#333', // Light text for dark mode
  };

  const stepsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'stretch',
  };

  const stepStyle = {
    backgroundColor: darkMode ? '#444' : '#e8f4f9', // Darker background for dark mode
    padding: '50px',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: darkMode ? '2px solid #555' : '2px solid #d1e3f2', // Darker border in dark mode
  };

  const stepImageStyle = {
    width: '200px',
    height: '200px',
    marginBottom: '5px',
    objectFit: 'stretch',
  };

  const stepTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: darkMode ? '#007BFF' : '#007BFF', // Blue color stays the same
  };

  const stepDescriptionStyle = {
    fontSize: '1.2rem',
    fontWeight: 300,
    color: darkMode ? '#f4f7fb' : 'black', // Light text in dark mode
    letterSpacing: '0.5px',
    lineHeight: '1.8',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>How It Works</h2>
      <div style={stepsStyle}>
        <div
          style={stepStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/2210353858/photo/illustration-of-a-website-with-a-blue-upload-now-button.webp?b=1&s=612x612&w=0&k=20&c=xLDY3O-FkyiYmJittUPVj6r_EfoTrQbX8_xPqAAMVRI="
            alt="Upload License"
            style={stepImageStyle}
          />
          <h3 style={stepTitleStyle}>1. Upload License</h3>
          <p style={stepDescriptionStyle}>
            Simply upload your software license to get started.
          </p>
        </div>
        <div
          style={stepStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/1357020474/photo/quality-management-with-qa-qc-and-improvement-standardisation-and-certification-concept.jpg?s=612x612&w=0&k=20&c=TQzsNI-voLUKsgpX9KBsZWvEyQx8R1TlTISMvabKcAI="
            alt="Get Valuation"
            style={stepImageStyle}
          />
          <h3 style={stepTitleStyle}>2. Get Valuation</h3>
          <p style={stepDescriptionStyle}>
            We'll evaluate the worth of your licenses.
          </p>
        </div>
        <div
          style={stepStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://media.istockphoto.com/id/1284882634/vector/give-money-outline-icon-payment-with-money-hand-holding-paycheck-icon.jpg?s=612x612&w=0&k=20&c=-1xhlUk9_h1wKtSrnEMVszfccZawU4THy8bJjBsPZ-g="
            alt="Get Paid"
            style={stepImageStyle}
          />
          <h3 style={stepTitleStyle}>3. Get Paid</h3>
          <p style={stepDescriptionStyle}>
            Receive your payment after the licenses are validated and processed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
