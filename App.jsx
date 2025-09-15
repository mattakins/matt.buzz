import React from 'react';
import './framer/styles.css';
import './responsive.css';

// Import main component (includes nav and header)
import MainFramerComponent from './framer/main.jsx';

export default function App() {
  return (
    <div className="app-container">
      {/* Main page with nav and header - full viewport dynamic sizing */}
      <MainFramerComponent.Responsive
        style={{
          width: '100%',
          height: '100%',
          maxWidth: 'none',
          minWidth: '100%'
        }}
        className="full-viewport"
      />
    </div>
  );
}