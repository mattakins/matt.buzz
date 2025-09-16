import React from 'react';

// Import the navigation and portfolio components
import NavComponent from '../framer/nav.jsx';
import PortfolioComponent from '../framer/portfolio.jsx';

export default function PortfolioWithNav() {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0
    }}>
      {/* Top Navigation */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        mixBlendMode: 'difference'
      }}>
        <NavComponent.Responsive />
      </div>

      {/* Portfolio Content with top margin to account for fixed nav */}
      <div style={{
        marginTop: '76px', // Height of the nav bar
        flex: 1,
        width: '100%'
      }}>
        <PortfolioComponent.Responsive />
      </div>
    </div>
  );
}