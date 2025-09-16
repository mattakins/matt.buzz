import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import the original navigation component
import NavComponent from '../framer/nav.jsx';

export default function NavWithBackButton({ showBackButton = false, backText = "← Back", ...props }) {
  const navigate = useNavigate();

  const handleBackClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate('/'); // Navigate to home page
  };

  if (!showBackButton) {
    // Show normal navigation
    return <NavComponent.Responsive {...props} />;
  }

  // Render navigation with back button overlay
  return (
    <div style={{ position: 'relative' }}>
      {/* Original navigation component */}
      <NavComponent.Responsive {...props} />

      {/* Back button overlay that replaces the logo/name area */}
      <div
        onClick={handleBackClick}
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          userSelect: 'none',
          color: 'white',
          mixBlendMode: 'difference',
          fontFamily: '"Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          zIndex: 10
        }}
      >
        <span style={{ fontSize: '18px' }}>←</span>
        <span>{backText}</span>
      </div>
    </div>
  );
}