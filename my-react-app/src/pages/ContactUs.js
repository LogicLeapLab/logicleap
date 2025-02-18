import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwjhpW-YwedYZIp4niJQUIXLqZ1eIhXFaG9-cnSbSQI9AmlLT2xXva7czEANnprP-Vr/exec',
        {
          //redirect: 'follow',
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          mode: 'no-cors'
        }
      );
      // If we get here, assume success since no-cors won't give us response details
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`contact-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or collaboration opportunities.</p>
      </div>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="error-message">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs; 