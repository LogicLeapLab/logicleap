import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnWithUs.css';

function LearnWithUs({ darkMode }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className={`learn-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="learn-hero">
        <h1>Learn With Us</h1>
        <p>Master the latest technologies with our expert-led training programs. From programming fundamentals to advanced AI tools, we've got you covered.</p>
      </div>

      <div className="learning-container">
        <section className="courses-section">
          <h2>Our Course Offerings</h2>
          
          <div className="courses-grid">
            <div className="course-card">
              <h3>Programming Languages</h3>
              <p>Master modern programming languages with hands-on projects and real-world applications.</p>
              <ul>
                <li>Python Development</li>
                <li>JavaScript & TypeScript</li>
                <li>C# and .NET Framework</li>
                <li>Java Programming</li>
              </ul>
            </div>

            <div className="course-card">
              <h3>AI & Machine Learning</h3>
              <p>Dive into the world of artificial intelligence and machine learning technologies.</p>
              <ul>
                <li>ChatGPT & LLM Applications</li>
                <li>AI Agents Development</li>
                <li>Machine Learning Basics</li>
                <li>AI Integration Strategies</li>
              </ul>
            </div>

            <div className="course-card">
              <h3>Automation Tools</h3>
              <p>Learn to create efficient workflows and automate business processes.</p>
              <ul>
                <li>Power Automate</li>
                <li>Automation Anywhere</li>
                <li>UiPath Development</li>
                <li>Workflow Optimization</li>
              </ul>
            </div>

            <div className="course-card">
              <h3>Database Technologies</h3>
              <p>Build a strong foundation in database management and development.</p>
              <ul>
                <li>SQL & MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="learning-paths">
          <h2>Learning Paths</h2>
          <div className="paths-grid">
            <div className="path-card">
              <i className="fas fa-code"></i>
              <h3>Developer Track</h3>
              <p>Become a full-stack developer with comprehensive programming knowledge.</p>
            </div>
            <div className="path-card">
              <i className="fas fa-robot"></i>
              <h3>Automation Expert</h3>
              <p>Master the tools and techniques for business process automation.</p>
            </div>
            <div className="path-card">
              <i className="fas fa-brain"></i>
              <h3>AI Specialist</h3>
              <p>Specialize in AI development and integration solutions.</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Learn With Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-laptop-code"></i>
              <h3>Hands-on Projects</h3>
              <p>Apply your learning with practical, industry-relevant projects.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-clock"></i>
              <h3>Flexible Schedule</h3>
              <p>Learn at your own pace with our flexible course schedules.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <h3>Community Support</h3>
              <p>Join our active learning community for networking and collaboration.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join our community of learners and master the skills that drive innovation.</p>
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

export default LearnWithUs; 