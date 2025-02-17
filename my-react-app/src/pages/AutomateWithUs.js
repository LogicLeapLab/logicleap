import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AutomateWithUs.css';

function AutomateWithUs({ darkMode }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className={`automate-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="automate-hero">
        <h1>Automate With Us</h1>
        <p>Upgrade the way you work and captivate your customers with our cutting-edge automation solutions.</p>
      </div>

      <div className="services-container">
        <section className="service-section">
          <h2>Our Automation Services</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <h3>Application Modernization</h3>
              <p>Transform your legacy applications into modern, efficient solutions using cloud technology and microservices. We leverage cutting-edge tools to accelerate your digital transformation journey.</p>
              <ul>
                <li>Cloud architecture and planning</li>
                <li>App migration and modernization</li>
                <li>Cloud-native app development</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Process Automation</h3>
              <p>Optimize your business processes through intelligent automation. We help you analyze, select, and deploy the right automation tools to streamline operations and enhance efficiency.</p>
              <ul>
                <li>Robotic process automation</li>
                <li>Workflow optimization</li>
                <li>Business process automation</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Low-Code Development</h3>
              <p>Empower your team with Microsoft Power Platform low-code tools. Build professional applications quickly and easily while maintaining proper governance and scalability.</p>
              <ul>
                <li>Power Platform development</li>
                <li>Power Automate workflows</li>
                <li>Custom business solutions</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Enterprise Integration</h3>
              <p>Seamlessly integrate new solutions with your existing infrastructure. Our team ensures smooth implementation and compatibility across your organization.</p>
              <ul>
                <li>Enterprise architecture</li>
                <li>System integration</li>
                <li>Data engineering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Automate With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-rocket"></i>
              <h3>Accelerate Growth</h3>
              <p>Boost internal operations and improve customer engagement through intelligent automation.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-cogs"></i>
              <h3>Optimize Processes</h3>
              <p>Convert manual, time-consuming tasks into streamlined, automated workflows.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-chart-line"></i>
              <h3>Drive Innovation</h3>
              <p>Stay ahead with cutting-edge automation solutions and continuous modernization.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how automation can revolutionize your operations.</p>
          <button 
            className="cta-button" 
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default AutomateWithUs; 