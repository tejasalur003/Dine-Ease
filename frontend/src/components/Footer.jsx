import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +1234567890</p>
          <p>Email: food.in@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Visit Us</h3>
          <p>Koregaon Park</p>
          <p>Pune, Maharashtra</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri : 9am - 10pm</p>
          <p>Sat - Sun : 10am - 11pm</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Food-In. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
