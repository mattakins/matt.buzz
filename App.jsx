import React from 'react';
import './framer/styles.css';
import './responsive.css';

// Import router component
import Router from './Router.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    // Check system preference and set initial state
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = mediaQuery.matches;

    // Set the toggle-theme attribute to match system preference
    const themeValue = systemPrefersDark ? 'dark' : 'light';
    document.body.setAttribute('toggle-theme', themeValue);
    document.documentElement.setAttribute('toggle-theme', themeValue);
    setIsDarkMode(systemPrefersDark);

    // Watch for Framer toggle-theme attribute changes
    const checkDarkMode = () => {
      const bodyToggleTheme = document.body.getAttribute('toggle-theme');
      const htmlToggleTheme = document.documentElement.getAttribute('toggle-theme');

      const isDark = bodyToggleTheme === 'dark' || htmlToggleTheme === 'dark';
      console.log('Toggle theme check:', { bodyToggleTheme, htmlToggleTheme, isDark });
      setIsDarkMode(isDark);
    };

    // Listen for system preference changes
    const handleSystemChange = (e) => {
      // Only update if user hasn't manually toggled
      const currentToggle = document.body.getAttribute('toggle-theme');
      if (!currentToggle) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('toggle-theme', newTheme);
        document.documentElement.setAttribute('toggle-theme', newTheme);
        setIsDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleSystemChange);

    // Create observer to watch for toggle-theme attribute changes
    const observer = new MutationObserver(checkDarkMode);

    // Observe changes on body and html elements for toggle-theme attribute
    observer.observe(document.body, { attributes: true, attributeFilter: ['toggle-theme'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['toggle-theme'] });

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Router handles navigation between pages */}
      <Router />
    </div>
  );
}