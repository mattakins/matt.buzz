import React from 'react';
import './framer/styles.css';

// Import Framer components
import MainFramerComponent from './framer/main.jsx';
import NavFramerComponent from './framer/nav.jsx';
import HeaderFramerComponent from './framer/header.jsx';
import AboutFramerComponent from './framer/about.jsx';
import PortfolioFramerComponent from './framer/portfolio.jsx';
import ExperienceFramerComponent from './framer/experience.jsx';
import EduFramerComponent from './framer/edu.jsx';
import FooterFramerComponent from './framer/footer.jsx';

export default function App() {
  return (
    <div className="app-container">
      {/* Use the main component which already includes nav and header */}
      <MainFramerComponent.Responsive />

      {/* Add other sections */}
      <AboutFramerComponent.Responsive />

      <PortfolioFramerComponent.Responsive />

      <ExperienceFramerComponent.Responsive />

      <EduFramerComponent.Responsive />

      <FooterFramerComponent.Responsive />
    </div>
  );
}