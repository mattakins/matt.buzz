import React from 'react';
import ThemeComponent from './framer/theme.jsx';
import ThemeToggleComponent from './framer/theme-toggle.jsx';
import NavComponent from './framer/nav.jsx';

const TestPage = () => {
  // Set dark theme on mount for testing
  React.useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    const bodyElement = document.getElementsByTagName('body')[0];
    htmlElement?.setAttribute('toggle-theme', 'dark');
    bodyElement?.setAttribute('toggle-theme', 'dark');
    localStorage.setItem('theme', 'dark');

    // Dispatch theme change event
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  }, []);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#000000',
      color: '#ffffff',
      transition: 'all 0.3s ease'
    }}>
      {/* Navigation */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <NavComponent.Responsive />
      </div>

      {/* Main content with top margin to account for fixed nav */}
      <div style={{
        marginTop: '76px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px'
      }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 600,
        margin: 0,
        fontFamily: '"Open Sauce Sans", sans-serif'
      }}>
        Theme Toggle Test Page
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h2 style={{
          fontSize: '1.2rem',
          fontWeight: 500,
          margin: 0,
          color: '#cccccc'
        }}>
          Theme Component
        </h2>
        <div style={{
          padding: '20px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.1)'
        }}>
          <ThemeComponent.Responsive />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h2 style={{
          fontSize: '1.2rem',
          fontWeight: 500,
          margin: 0,
          color: '#cccccc'
        }}>
          Theme Toggle Variants
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '800px'
        }}>
          {[
            { variant: "TzgVzetvp", name: "Desktop (Default)" },
            { variant: "IFTxxXlL5", name: "Hover 1" },
            { variant: "o3JNQH70g", name: "Click 1" },
            { variant: "aexHCFV6M", name: "Hover 2" },
            { variant: "aP0q0e5A5", name: "Phone" },
            { variant: "Gwm03yRT0", name: "Click 2" }
          ].map(({ variant, name }) => (
            <div key={variant} style={{
              padding: '20px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}>
              <h3 style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                margin: 0,
                color: '#cccccc'
              }}>
                {name}
              </h3>
              <ThemeToggleComponent.Responsive variant={variant} />
              <code style={{
                fontSize: '0.7rem',
                color: '#999999',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}>
                {variant}
              </code>
            </div>
          ))}
        </div>
      </div>

      <p style={{
        fontSize: '0.9rem',
        color: '#cccccc',
        textAlign: 'center',
        maxWidth: '400px',
        lineHeight: 1.5
      }}>
        Click the toggles above to test theme switching functionality.
        The page background and text should change between light and dark modes.
      </p>
      </div>
    </div>
  );
};

export default TestPage;