import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Import page components
import MainFramerComponent from './framer/main.jsx';
import PortfolioComponent from './framer/portfolio.jsx';
import NavComponent from './framer/nav.jsx';
import TestPage from './TestPage.jsx';

// Import view transition utilities
import { navigateWithReactRouter } from './utils/page-transitions.js';

/**
 * Navigation wrapper that handles click events for enhanced routing
 *
 * Features:
 * - Intercepts internal link clicks for smooth navigation
 * - Supports view transitions between pages
 * - Handles Framer component navigation elements
 * - Back button and logo navigation support
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {React.ReactNode} Children with navigation handling
 */
function NavigationWrapper({ children }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Enhanced navigation with view transitions
    const handleLinkClick = (event) => {
      // Check for traditional links first
      const link = event.target.closest('a[href]');
      if (link) {
        const href = link.getAttribute('href');

        // Only intercept internal navigation (not external links or hash links)
        if (href &&
            !href.startsWith('http') &&
            !href.startsWith('#') &&
            !href.startsWith('mailto:') &&
            !href.startsWith('tel:')) {

          // Prevent default navigation
          event.preventDefault();

          // Use view transitions for smooth navigation
          navigateWithReactRouter(href, navigate);
          return;
        }
      }

      // Check for clicks anywhere on the portfolio tile (both text and image areas)
      const portfolioTile = event.target.closest('.framer-CTg5A');
      if (portfolioTile && portfolioTile.textContent?.includes('Portfolio')) {
        event.preventDefault();
        navigateWithReactRouter('/portfolio', navigate);
        return;
      }

      // Check for Unframer/Framer navigation elements
      const clickedElement = event.target.closest('[data-framer-name], .framer-CTg5A, [style*="cursor: pointer"]');
      if (clickedElement) {
        const textContent = clickedElement.textContent?.trim().toLowerCase();


        // Check for back button navigation
        if (textContent?.includes('back') && textContent?.includes('←') &&
            window.getComputedStyle(clickedElement).cursor === 'pointer') {
          event.preventDefault();
          navigate(-1); // Go back to previous page
          return;
        }

        // Check for name/logo navigation back to home (only on main page)
        if ((textContent?.includes('name') || textContent?.includes('matt') || textContent?.includes('akins')) &&
            window.getComputedStyle(clickedElement).cursor === 'pointer') {
          event.preventDefault();
          navigateWithReactRouter('/', navigate);
          return;
        }

        // Check for other navigation elements (About, Contact, etc.)
        if (textContent?.includes('about') &&
            window.getComputedStyle(clickedElement).cursor === 'pointer') {
          event.preventDefault();
          navigateWithReactRouter('/about', navigate);
          return;
        }

        if (textContent?.includes('contact') &&
            window.getComputedStyle(clickedElement).cursor === 'pointer') {
          event.preventDefault();
          navigateWithReactRouter('/contact', navigate);
          return;
        }
      }
    };

    // Add click listener for navigation links
    document.addEventListener('click', handleLinkClick, true);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [navigate]);

  return children;
}

/**
 * Main router component that defines application routes
 *
 * Routes:
 * - "/" - Main portfolio page with responsive layout
 * - "/test" - Test page for development
 * - "/portfolio" - Portfolio showcase with navigation
 *
 * Features:
 * - GitHub Pages routing support
 * - Fixed navigation on portfolio page
 * - Responsive components throughout
 *
 * @returns {JSX.Element} Router with defined routes
 */
export default function Router() {
  // Handle GitHub Pages routing
  const basename = process.env.NODE_ENV === 'production'
    ? '/matt.buzz'
    : '';

  return (
    <BrowserRouter basename={basename}>
      <NavigationWrapper>
        <Routes>
          <Route path="/" element={<MainFramerComponent.Responsive />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/portfolio" element={
            <div style={{
              width: '100vw',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
              padding: 0
            }}>
              {/* Top Navigation with Back Button */}
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
              }}>
                <NavComponent.Responsive backIcon={true} />
              </div>

              {/* Portfolio Content with top margin to account for fixed nav */}
              <div style={{
                marginTop: '76px',
                flex: 1,
                width: '100%'
              }}>
                <PortfolioComponent.Responsive />
              </div>
            </div>
          } />
        </Routes>
      </NavigationWrapper>
    </BrowserRouter>
  );
}