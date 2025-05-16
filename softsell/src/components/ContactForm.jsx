import React, { useState, useEffect } from 'react';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });
  };

  const sectionStyle = {
    padding: '80px 20px',
    background: darkMode
      ? 'linear-gradient(135deg, #333, #444)' // Dark gradient
      : 'linear-gradient(135deg, #e0f7fa, #f1f8ff)', // Light gradient
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'all 1s ease',
  };

  const formContainerStyle = {
    background: darkMode ? '#2c2c2c' : '#ffffff', // Dark background for form in dark mode
    padding: '50px',
    borderRadius: '16px',
    boxShadow: darkMode ? '0 15px 40px rgba(255, 255, 255, 0.1)' : '0 15px 40px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    borderTop: '5px solid #007BFF',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '30px',
    color: darkMode ? '#f0f0f0' : '#004080', // Light color for text in dark mode
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    marginBottom: '18px',
    borderRadius: '10px',
    border: `1px solid ${darkMode ? '#555' : '#ccc'}`, // Border color based on dark mode
    fontSize: '1rem',
    color: darkMode ? '#ddd' : '#333', // Text color for dark mode
    backgroundColor: darkMode ? '#444' : '#f9fbfd', // Background color based on dark mode
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
    appearance: 'none',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #007BFF, #00BFFF)',
    color: '#fff',
    padding: '14px 30px',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: isButtonHovered
      ? '0 12px 25px rgba(0, 123, 255, 0.3)'
      : '0 6px 15px rgba(0, 123, 255, 0.2)',
    transform: isButtonHovered ? 'translateY(-2px)' : 'translateY(0)',
  };

  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '0.9rem',
    color: darkMode ? '#bbb' : '#888', // Lighter text color for copyright
  };

  return (
    <section style={sectionStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            style={{ ...inputStyle, color: formData.licenseType ? '#333' : '#888' }}
          >
            <option value="" disabled>
              Select License Type
            </option>
            <option value="Software">Software</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Send Message
          </button>
        </form>

        {/* Copyright */}
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Soft Shell. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
