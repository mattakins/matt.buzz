import React from 'react';
import './framer/styles.css';
import './responsive.css';

// Import main component (includes nav and header)
import MainFramerComponent from './framer/main.jsx';

export default function App() {
  return (
    <div className="app-container">
      {/* Main page with nav and header - enhanced responsive behavior */}
      <MainFramerComponent.Responsive
        variants={{
          xs: "kFvLPda15",   // Phone (< 480px)
          sm: "kFvLPda15",   // Small phone (480px - 640px)
          md: "v813QapNw",   // Tablet (640px - 768px)
          lg: "xizfm9lN8",   // Laptop (768px - 1024px)
          xl: "eDsVreBLY",   // Desktop (1024px - 1280px)
          "2xl": "eDsVreBLY" // Large desktop (> 1280px)
        }}
      />
    </div>
  );
}