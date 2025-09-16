// Theme override utility to replace Framer's theme toggle with a consistent one

let themeState = 'system';

const applyTheme = (theme) => {
  const htmlElement = document.getElementsByTagName('html')[0];
  const bodyElement = document.getElementsByTagName('body')[0];

  // Resolve system theme if needed
  if (theme === 'system') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    theme = mediaQuery.matches ? 'dark' : 'light';
  }

  htmlElement?.setAttribute('toggle-theme', theme);
  bodyElement?.setAttribute('toggle-theme', theme);

  // Apply class-based styling
  if (theme === 'dark') {
    bodyElement?.classList.add('dark');
  } else {
    bodyElement?.classList.remove('dark');
  }

  // Store the resolved theme
  themeState = theme;
};

const toggleTheme = () => {
  const newTheme = themeState === 'light' ? 'dark' : 'light';
  themeState = newTheme;
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);

  // Dispatch event for any React components listening
  const event = new Event('themeChange');
  window.dispatchEvent(event);
};

const createCustomThemeToggle = () => {
  const toggle = document.createElement('div');
  toggle.id = 'custom-theme-toggle';
  toggle.style.cssText = `
    width: 32px;
    height: 18px;
    background-color: var(--unframer-white);
    opacity: 0.16;
    border-radius: 32px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  `;

  const dot = document.createElement('div');
  dot.style.cssText = `
    width: 14px;
    height: 14px;
    background-color: var(--unframer-white);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  `;

  const updateDotPosition = () => {
    if (themeState === 'light') {
      dot.style.left = '2px';
      dot.style.right = 'unset';
    } else {
      dot.style.left = 'unset';
      dot.style.right = '2px';
    }
  };

  updateDotPosition();

  toggle.appendChild(dot);
  toggle.addEventListener('click', () => {
    toggleTheme();
    updateDotPosition();
  });

  // Add hover effect
  toggle.addEventListener('mouseenter', () => {
    toggle.style.transform = 'scale(1.05)';
  });

  toggle.addEventListener('mouseleave', () => {
    toggle.style.transform = 'scale(1)';
  });

  return toggle;
};

const initializeThemeOverride = () => {
  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  // Function to replace theme toggles
  const replaceThemeToggles = () => {
    // Find all Framer theme toggle containers
    const themeContainers = document.querySelectorAll('[data-framer-name="Theme"]');

    themeContainers.forEach(container => {
      // Hide the original theme toggle
      const existingToggle = container.querySelector('.framer-1pv7arx-container');
      if (existingToggle) {
        existingToggle.style.display = 'none';

        // Check if we already added our custom toggle
        if (!container.querySelector('#custom-theme-toggle')) {
          const customToggle = createCustomThemeToggle();
          container.appendChild(customToggle);
        }
      }
    });
  };

  // Initial replacement
  replaceThemeToggles();

  // Watch for DOM changes (in case Framer re-renders components)
  const observer = new MutationObserver(() => {
    replaceThemeToggles();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Listen for theme changes and update all toggles
  window.addEventListener('themeChange', () => {
    document.querySelectorAll('#custom-theme-toggle').forEach(toggle => {
      const dot = toggle.querySelector('div');
      if (themeState === 'light') {
        dot.style.left = '2px';
        dot.style.right = 'unset';
      } else {
        dot.style.left = 'unset';
        dot.style.right = '2px';
      }
    });
  });
};

// Auto-initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThemeOverride);
} else {
  initializeThemeOverride();
}

export { initializeThemeOverride, toggleTheme, applyTheme };