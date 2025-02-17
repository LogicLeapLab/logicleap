import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs({ darkMode }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
  };

  return (
    <div className={`contact-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Contact us for inquiries about our online coding classes and software consulting services – we're ready to assist and guide you on your digital journey!</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          ) : (
            <div className="success-message">
              <h3>Thanks for submitting!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          )}
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@logicleap.ca">info@logicleap.ca</a>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+15879733565">(587) 973-3565</a>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Calgary, Alberta, Canada</span>
            </div>
          </div>

          <div className="hours-card">
            <h3>Opening Hours</h3>
            <div className="hours-item">
              <span className="day">Mon - Fri</span>
              <span className="time">8:00 am – 8:00 pm</span>
            </div>
            <div className="hours-item">
              <span className="day">Saturday</span>
              <span className="time">9:00 am – 7:00 pm</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday</span>
              <span className="time">9:00 am – 9:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs; 