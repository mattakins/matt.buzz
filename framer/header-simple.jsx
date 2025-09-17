import React from 'react';

const HeaderSimple = () => {
  return (
    <div className="header-simple-container">
      {/* Main Title */}
      <div className="header-title">
        <h1>Mo Eliwa</h1>
      </div>

      {/* Grid Container with unified background */}
      <div className="portfolio-grid">
        {/* Unified background */}
        <div className="unified-background"></div>

        {/* Grid items */}
        <div className="grid-item about">
          <div className="item-content">
            <h2>About</h2>
            <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>

        <div className="grid-item portfolio">
          <div className="item-content">
            <h2>Portfolio</h2>
            <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>

        <div className="grid-item contact">
          <div className="item-content">
            <h2>Contact</h2>
            <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>

        <div className="grid-item avatar">
          <div className="item-content">
            <div className="avatar-photo"></div>
          </div>
        </div>

        <div className="grid-item stack">
          <div className="item-content">
            <h2>Stack</h2>
            <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeaderSimple;