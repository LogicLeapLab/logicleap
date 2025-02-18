import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      title: "Solving Problems Through AI",
      description: "Harness the power of artificial intelligence to transform your business challenges into opportunities",
      icon: (
        <div className="animated-icon ai-icon">
          <svg viewBox="0 0 100 100">
            {/* Neural Network Nodes */}
            <g className="network-layer input-layer">
              <circle cx="20" cy="30" r="4" className="node"/>
              <circle cx="20" cy="50" r="4" className="node"/>
              <circle cx="20" cy="70" r="4" className="node"/>
            </g>

            <g className="network-layer hidden-layer">
              <circle cx="50" cy="20" r="4" className="node"/>
              <circle cx="50" cy="40" r="4" className="node"/>
              <circle cx="50" cy="60" r="4" className="node"/>
              <circle cx="50" cy="80" r="4" className="node"/>
            </g>

            <g className="network-layer output-layer">
              <circle cx="80" cy="35" r="4" className="node"/>
              <circle cx="80" cy="65" r="4" className="node"/>
            </g>

            {/* Neural Network Connections */}
            <g className="connections">
              {/* Input to Hidden Layer Connections */}
              <path d="M22,30 L48,20" className="connection"/>
              <path d="M22,30 L48,40" className="connection"/>
              <path d="M22,30 L48,60" className="connection"/>
              <path d="M22,50 L48,40" className="connection"/>
              <path d="M22,50 L48,60" className="connection"/>
              <path d="M22,70 L48,60" className="connection"/>
              <path d="M22,70 L48,80" className="connection"/>

              {/* Hidden to Output Layer Connections */}
              <path d="M52,20 L78,35" className="connection"/>
              <path d="M52,40 L78,35" className="connection"/>
              <path d="M52,60 L78,65" className="connection"/>
              <path d="M52,80 L78,65" className="connection"/>
            </g>

            {/* Data Pulses */}
            <g className="data-pulses">
              <circle r="2" className="pulse pulse1">
                <animateMotion 
                  dur="2s"
                  repeatCount="indefinite"
                  path="M22,30 L48,40 L78,35"
                />
              </circle>
              <circle r="2" className="pulse pulse2">
                <animateMotion 
                  dur="2s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M22,50 L48,60 L78,65"
                />
              </circle>
              <circle r="2" className="pulse pulse3">
                <animateMotion 
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M22,70 L48,80 L78,65"
                />
              </circle>
            </g>

            {/* Processing Rings */}
            <circle cx="50" cy="50" r="35" className="process-ring ring1"/>
            <circle cx="50" cy="50" r="30" className="process-ring ring2"/>
            <circle cx="50" cy="50" r="25" className="process-ring ring3"/>
          </svg>
        </div>
      )
    },
    {
      title: "Building Resilient Ecosystems",
      description: "Create sustainable and adaptable business systems that grow with your organization",
      icon: (
        <div className="animated-icon ecosystem-icon">
          <svg viewBox="0 0 100 100">
            <g className="rotating-hexagons">
              <path d="M50,25 L65,35 L65,55 L50,65 L35,55 L35,35 Z" />
              <path d="M50,15 L70,30 L70,60 L50,75 L30,60 L30,30 Z" />
              <path d="M50,5 L75,25 L75,65 L50,85 L25,65 L25,25 Z" />
            </g>
          </svg>
        </div>
      )
    },
    {
      title: "Accelerating Growth with Automation",
      description: "Streamline your operations with intelligent workflows and automated processes",
      icon: (
        <div className="animated-icon automation-icon">
          <svg viewBox="0 0 100 100">
            {/* Main Gear */}
            <g className="main-gear">
              <path d="M50,20 L53,20 L55,15 L58,15 L60,20 L63,21 L67,17 L69,19 L67,23 L69,25 L74,23 L75,26 L71,29 L71,32 L76,33 L76,36 L71,37 L71,40 L75,43 L74,46 L69,44 L67,46 L69,50 L67,52 L63,48 L60,49 L58,54 L55,54 L53,49 L50,49 L47,54 L44,54 L42,49 L39,48 L35,52 L33,50 L35,46 L33,44 L28,46 L27,43 L31,40 L31,37 L26,36 L26,33 L31,32 L31,29 L27,26 L28,23 L33,25 L35,23 L33,19 L35,17 L39,21 L42,20 L44,15 L47,15 L49,20 Z" 
                className="gear-outline"/>
              <circle cx="50" cy="35" r="12" className="gear-center"/>
            </g>

            {/* Automation Flow Lines */}
            <g className="flow-paths">
              <path d="M20,50 Q35,35 50,50 T80,50" className="flow-line flow-line-1"/>
              <path d="M20,60 Q35,45 50,60 T80,60" className="flow-line flow-line-2"/>
              <path d="M20,70 Q35,55 50,70 T80,70" className="flow-line flow-line-3"/>
            </g>

            {/* Moving Particles */}
            <g className="particles">
              <circle className="particle p1" r="2"/>
              <circle className="particle p2" r="2"/>
              <circle className="particle p3" r="2"/>
            </g>

            {/* Progress Indicators */}
            <g className="progress-indicators">
              <rect x="75" y="20" width="15" height="4" rx="2" className="progress-bar pb1"/>
              <rect x="75" y="30" width="15" height="4" rx="2" className="progress-bar pb2"/>
              <rect x="75" y="40" width="15" height="4" rx="2" className="progress-bar pb3"/>
            </g>
          </svg>
        </div>
      )
    },
    {
      title: "Custom Development Solutions",
      description: "Tailored software solutions to expand your reach and engage with a broader audience",
      icon: (
        <div className="animated-icon development-icon">
          <svg viewBox="0 0 100 100">
            {/* Mobile App Frame */}
            <rect x="20" y="10" width="25" height="45" rx="3" className="device mobile" />
            <rect x="23" y="15" width="19" height="35" className="screen mobile-screen" />
            
            {/* Web App Frame */}
            <rect x="55" y="10" width="40" height="30" rx="2" className="device desktop" />
            <rect x="57" y="12" width="36" height="26" className="screen desktop-screen" />
            
            {/* Code Elements */}
            <g className="code-elements">
              <rect x="25" y="18" width="15" height="2" className="code-line" />
              <rect x="25" y="22" width="12" height="2" className="code-line" />
              <rect x="25" y="26" width="10" height="2" className="code-line" />
              
              <rect x="60" y="15" width="30" height="2" className="code-line" />
              <rect x="60" y="19" width="25" height="2" className="code-line" />
              <rect x="60" y="23" width="20" height="2" className="code-line" />
            </g>

            {/* Connecting Lines */}
            <path d="M35,65 C45,65 55,45 65,45" className="connection-line" />
            
            {/* API/Database Symbol */}
            <g className="database" transform="translate(45,70)">
              <path d="M0,0 C10,0 10,0 10,0 C10,2 10,2 0,2 C-10,2 -10,2 -10,0 C-10,0 -10,0 0,0" 
                    className="db-line db-top" />
              <path d="M-10,0 L-10,8 C-10,10 -10,10 0,10 C10,10 10,10 10,8 L10,0" 
                    className="db-line db-body" />
            </g>
          </svg>
        </div>
      )
    },
    {
      title: "Scale Your Presence",
      description: "Expand your digital footprint and reach new heights with our scalable solutions",
      icon: (
        <div className="animated-icon scale-icon">
          <svg viewBox="0 0 100 100">
            {/* Grid Background */}
            <g className="grid-lines">
              <line x1="20" y1="20" x2="20" y2="80" className="grid-line vertical" />
              <line x1="40" y1="20" x2="40" y2="80" className="grid-line vertical" />
              <line x1="60" y1="20" x2="60" y2="80" className="grid-line vertical" />
              <line x1="80" y1="20" x2="80" y2="80" className="grid-line vertical" />
              
              <line x1="20" y1="20" x2="80" y2="20" className="grid-line horizontal" />
              <line x1="20" y1="40" x2="80" y2="40" className="grid-line horizontal" />
              <line x1="20" y1="60" x2="80" y2="60" className="grid-line horizontal" />
              <line x1="20" y1="80" x2="80" y2="80" className="grid-line horizontal" />
            </g>

            {/* Growth Line */}
            <path d="M20,70 Q35,65 45,50 T70,30" className="growth-line" />
            
            {/* Data Points */}
            <g className="data-points">
              <circle cx="20" cy="70" r="3" className="point p1" />
              <circle cx="45" cy="50" r="3" className="point p2" />
              <circle cx="70" cy="30" r="3" className="point p3" />
            </g>

            {/* Rising Indicators */}
            <g className="indicators">
              <path d="M65,35 L75,25 L85,35" className="arrow" />
              <circle cx="75" cy="25" r="8" className="highlight" />
            </g>
          </svg>
        </div>
      )
    }
  ];

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleLearnMore = () => {
    navigate('/automate');
  };

  return (
    <main className="home">
      <header className="hero-slider" role="banner">
        <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="slide"
            >
              <div className="slide-content">
                <div className="slide-icon-container">
                  {slide.icon}
                </div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/about" className="cta-button">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        
        <>
          <button 
            className="slider-arrow left-arrow" 
            onClick={() => handleSlideChange('prev')}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <button 
            className="slider-arrow right-arrow" 
            onClick={() => handleSlideChange('next')}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      </header>

      {/* Featured Solutions */}
      <section className="featured-solutions" aria-label="Featured Solutions">
        <h2 className="visually-hidden">Featured Solutions</h2>
        <div className="solution-card">
          <h2>AI Solutions</h2>
          <p>Discover how our AI solutions can transform your business operations.</p>
          <a onClick={handleLearnMore} style={{ cursor: 'pointer' }}>Learn More</a>
        </div>

        <div className="solution-card">
          <h2>Workflow Automation</h2>
          <p>Streamline your operations with intelligent automation solutions.</p>
          <Link to="/automate">Explore →</Link>
        </div>

        <div className="solution-card">
          <h2>Tailor made IT solutions</h2>
          <p>Rapid implementation of cutting-edge technology solutions for your business.</p>
          <Link to="/about">Discover →</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" aria-label="Our Services">
        <h2 className="visually-hidden">Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>AI Consulting</h3>
            <p>Strategic guidance for AI implementation</p>
          </div>
          <div className="service-item">
            <h3>Process Automation</h3>
            <p>End-to-end automation solutions</p>
          </div>
          <div className="service-item">
            <h3>Data Analytics</h3>
            <p>Advanced analytics and insights</p>
          </div>
          <div className="service-item">
            <h3>Custom Solutions</h3>
            <p>Tailored IT solutions for your needs</p>
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Section */}
      <section className="case-studies">
        <h2>Success Stories</h2>
        <div className="studies-grid">
          <div className="case-study">
            <div className="study-content">
              <h3>Manufacturing Excellence</h3>
              <p>50% reduction in operational costs through AI-driven automation</p>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-value">60%</span>
                  <span className="metric-label">Faster Production</span>
                </div>
                <div className="metric">
                  <span className="metric-value">40%</span>
                  <span className="metric-label">Error Reduction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study">
            <div className="study-content">
              <h3>Financial Services</h3>
              <p>90% faster processing time with our intelligent workflows</p>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Accuracy Rate</span>
                </div>
                <div className="metric">
                  <span className="metric-value">85%</span>
                  <span className="metric-label">Cost Savings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study">
            <div className="study-content">
              <h3>Healthcare Innovation</h3>
              <p>AI-powered diagnostic assistance improving patient care</p>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-value">99%</span>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">75%</span>
                  <span className="metric-label">Time Saved</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study">
            <div className="study-content">
              <h3>AI Workflow Integration</h3>
              <p>Streamlined operations using ChatGPT, Power Automate, and custom AI solutions</p>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-value">80%</span>
                  <span className="metric-label">Process Automation</span>
                </div>
                <div className="metric">
                  <span className="metric-value">65%</span>
                  <span className="metric-label">Time Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote">❝</div>
              <p>Logic Leap transformed our business processes with their AI solutions. The team's expertise in automation and AI integration is outstanding.</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>CTO, TechCorp Solutions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote">❝</div>
              <p>Their innovative approach to AI workflow automation helped us achieve remarkable efficiency gains. Highly recommended for any business looking to modernize.</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Operations Director, InnovateTech</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote">❝</div>
              <p>The team at Logic Leap delivered beyond our expectations. Their AI solutions have revolutionized how we handle our daily operations.</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>CEO, Digital Dynamics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home; 