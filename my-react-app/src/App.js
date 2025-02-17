import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AutomateWithUs from './pages/AutomateWithUs';
import LearnWithUs from './pages/LearnWithUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<AboutUs darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/contact" element={<ContactUs darkMode={darkMode} />} />
        <Route path="/automate" element={<AutomateWithUs darkMode={darkMode} />} />
        <Route path="/learn" element={<LearnWithUs darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
