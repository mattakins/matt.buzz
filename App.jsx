import React from 'react';
import './framer/styles.css';
import './responsive.css';

// Import main component (includes nav and header)
import MainFramerComponent from './framer/main.jsx';

export default function App() {
  return (
    <div className="app-container">
      {/* Main page with nav and header - gentle responsive scaling */}
      <MainFramerComponent.Responsive />
    </div>
  );
}