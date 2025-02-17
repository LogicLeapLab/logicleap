import React, { useEffect } from 'react';
import './AboutUs.css';

function AboutUs({ darkMode }) {
  useEffect(() => {
    // Initialize intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
      <section className="about-hero">
        <div className="tech-background">
          <div className="grid-line horizontal"></div>
          <div className="grid-line vertical"></div>
          <div className="floating-elements">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="tech-element" style={{
                animationDelay: `${i * 0.3}s`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 80}%`
              }}>
                {['</', '{ }', '/>', '[]', '()', '&&', '=>', '++', '**', '##'][i]}
              </div>
            ))}
          </div>
        </div>
        <h1 className="glitch-effect">The Narrative Behind Logic Leap</h1>
        <div className="hero-content">
          <p className="typing-effect">
            Logic Leap Calgary, is a startup revolutionizing software consulting and IT education.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="circuit-background"></div>
        <div className="mission-content fade-in">
          <div className="ai-brain-icon">
            <svg viewBox="0 0 100 100">
              {/* Binary Rain */}
              <g className="binary-rain">
                {[...Array(8)].map((_, i) => (
                  <text key={i} 
                    x={10 + (i * 12)} 
                    y="0" 
                    className="binary"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </text>
                ))}
              </g>
              
              {/* Circuit Board Paths */}
              <g className="circuit-paths">
                <path d="M10,50 L90,50" className="circuit-line main"/>
                <path d="M30,50 L30,70 L70,70 L70,50" className="circuit-line branch"/>
                <path d="M50,30 L50,50" className="circuit-line branch"/>
              </g>
              
              {/* Connection Points */}
              <g className="connection-points">
                <circle cx="30" cy="50" r="3" className="point"/>
                <circle cx="50" cy="50" r="3" className="point"/>
                <circle cx="70" cy="50" r="3" className="point"/>
                <circle cx="30" cy="70" r="3" className="point"/>
                <circle cx="70" cy="70" r="3" className="point"/>
                <circle cx="50" cy="30" r="3" className="point"/>
              </g>
              
              {/* CPU Core */}
              <rect x="40" y="40" width="20" height="20" className="cpu-core"/>
              <text x="45" y="55" className="cpu-text">AI</text>
            </svg>
          </div>
          <p>
            Our mission is to deliver exceptional software development services in Calgary and worldwide, 
            also provide top-tier training in software and IT skills, aiding both individuals and 
            organizations in their digital transformation journey.
          </p>
          <p>
            Since our inception, we've empowered a diverse range of clients from local startups to 
            established businesses, optimizing their processes and enhancing digital engagement. 
            Additionally, our educational programs have equipped aspiring tech professionals with 
            essential skills for today's job market.
          </p>
          <p>
            Logic Leap has always been working hard to contribute towards the tech community, known 
            for creative and technological innovation in solutions and education. Our client feedback 
            reflects the trust and satisfaction in our services.
          </p>
        </div>
      </section>

      <section className="vision-section">
        <div className="code-rain"></div>
        <div className="vision-container fade-in">
          <h2>Our Vision</h2>
          <div className="vision-content">
            <div className="tech-stack-icons">
              <div className="tech-icon automation">Automation</div>
              <div className="tech-icon javascript">JavaScript</div>
              <div className="tech-icon csharp">C#</div>
              <div className="tech-icon bots">BOTS</div>
              <div className="tech-icon ai-agents">AI Agents</div>
            </div>
            <p>
              At Logic Leap, our vision is to be at the forefront of technological advancement, 
              acting as a catalyst for change in the realms of software consulting and IT education.
            </p>
            <p>
              We envision a world where technology is not just an enabler but a driver of innovation, 
              efficiency, and empowerment. Our goal is to demystify the complexities of technology, 
              making it accessible and understandable for individuals and businesses alike.
            </p>
            <p>
              We strive to create an environment where learning and development are continuous, 
              ensuring that every individual and organization we work with is equipped to meet 
              the challenges of the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="data-flow-background"></div>
        <div className="mission-container fade-in">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="progress-indicators">
              <div className="progress-bar">
                <div className="progress-fill"></div>
                <span>Innovation</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
                <span>Excellence</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
                <span>Growth</span>
              </div>
            </div>
            <p>
              Our mission at Logic Leap is to lead in software consulting and IT education, 
              specializing in a range of technologies including Automation Workflows, AI Agents, C#, JS/TS, 
              BOTS, Azure, and DevOps practices.
            </p>
            <p>
              We are committed to equipping businesses and individuals with the skills and 
              solutions needed to thrive in a digital landscape, offering innovative, 
              custom-tailored guidance in today's most in-demand automations, AI workflows, and in-demand tools and technologies.
            </p>
            <p>
              Our focus is on creating lasting, impactful advancements, empowering our clients 
              and students to excel in the evolving world of tech.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs; 