const Testimonials = ({ darkMode }) => {
  console.log('Dark mode in Testimonials:', darkMode); // Check if darkMode is received correctly

  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: darkMode ? '#121212' : '#f0f4f8', // Dark background in dark mode
    fontFamily: "'Roboto', sans-serif",
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '60px',
    color: darkMode ? '#fff' : '#333', // Light text in dark mode
  };

  const testimonialListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    justifyContent: 'center',
  };

  const testimonialStyle = {
    backgroundColor: darkMode ? '#444' : '#ffffff', // Darker background in dark mode
    padding: '30px',
    borderRadius: '15px',
    boxShadow: darkMode ? '0 8px 24px rgba(255, 255, 255, 0.08)' : '0 8px 24px rgba(0, 0, 0, 0.08)', // Light box shadow in dark mode
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',
    border: darkMode ? '3px solid #007BFF' : '3px solid #007BFF', // Blue border stays the same
  };

  const quoteStyle = {
    fontSize: '1.1rem',
    color: darkMode ? '#f4f7fb' : '#555', // Light text in dark mode
    marginBottom: '20px',
    lineHeight: '1.6',
  };

  const authorStyle = {
    fontSize: '1rem',
    fontWeight: 600,
    color: darkMode ? '#007BFF' : '#007BFF', // Blue color for author name
  };

  const positionStyle = {
    fontSize: '0.9rem',
    color: darkMode ? '#aaa' : '#888', // Lighter color for position in dark mode
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = darkMode
      ? '0 12px 30px rgba(255, 255, 255, 0.15)' // Light box shadow in dark mode
      : '0 12px 30px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = darkMode
      ? '0 8px 24px rgba(255, 255, 255, 0.08)' // Light box shadow in dark mode
      : '0 8px 24px rgba(0, 0, 0, 0.08)';
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>What Our Clients Say</h2>
      <div style={testimonialListStyle}>
        {/* Testimonial 1 */}
        <div
          style={testimonialStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Doe"
            style={avatarStyle}
          />
          <p style={quoteStyle}>
            "SoftSell helped us get the most value out of our unused software licenses!"
          </p>
          <h4 style={authorStyle}>John Doe</h4>
          <p style={positionStyle}>CTO, TechCo</p>
        </div>

        {/* Testimonial 2 */}
        <div
          style={testimonialStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Jane Smith"
            style={avatarStyle}
          />
          <p style={quoteStyle}>
            "Their team is fast, professional, and transparent throughout the process."
          </p>
          <h4 style={authorStyle}>Jane Smith</h4>
          <p style={positionStyle}>CEO, InnovateX</p>
        </div>

        {/* Testimonial 3 */}
        <div
          style={testimonialStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Michael Lee"
            style={avatarStyle}
          />
          <p style={quoteStyle}>
            "The entire process was seamless. I was amazed at how quickly they processed my licenses."
          </p>
          <h4 style={authorStyle}>Michael Lee</h4>
          <p style={positionStyle}>IT Manager, CloudWare</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
