import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="brand-link">
          <img src={`${process.env.PUBLIC_URL}/logicleap.png`} alt="Logic Leap Logo" className="company-logo" />
          <span className="website-name">Logic Leap</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About Us</Link>
        <Link to="/automate">Automate With Us</Link>
        <Link to="/learn">Learn With Us</Link>
        <Link to="/contact">Contact Us</Link>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 