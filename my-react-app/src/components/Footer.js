import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <p>Empowering businesses through AI and automation solutions.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/logic-leap-online/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/LogicLeapOnline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/logicleaponline/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/automate">Automate With Us</Link></li>
            <li><Link to="/learn">Learn With Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>AI Solutions</li>
            <li>Automation</li>
            <li>Custom Development</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@logicleap.ca">info@logicleap.ca</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Calgary, Alberta, Canada</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Logic Leap. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 