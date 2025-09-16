import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useThemeStore = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') || 'system';
    let resolvedTheme = savedTheme;

    // Resolve system theme
    if (savedTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      resolvedTheme = mediaQuery.matches ? 'dark' : 'light';
    }

    setTheme(resolvedTheme);
    applyTheme(resolvedTheme);

    // Listen for theme changes from other components
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'system';
      let resolved = currentTheme;
      if (currentTheme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        resolved = mediaQuery.matches ? 'dark' : 'light';
      }
      setTheme(resolved);
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const applyTheme = (newTheme) => {
    const htmlElement = document.getElementsByTagName('html')[0];
    const bodyElement = document.getElementsByTagName('body')[0];

    htmlElement?.setAttribute('toggle-theme', newTheme);
    bodyElement?.setAttribute('toggle-theme', newTheme);

    // Apply class-based styling
    if (newTheme === 'dark') {
      bodyElement?.classList.add('dark');
    } else {
      bodyElement?.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);

    // Dispatch event for other components
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  };

  return { theme, toggleTheme };
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isHovered, setIsHovered] = useState(false);

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 60,
    mass: 1
  };

  const containerVariants = {
    default: {
      width: 14,
      height: 14,
      transition: springTransition
    },
    hover: {
      width: 32,
      height: 18,
      transition: springTransition
    }
  };

  const dotVariants = {
    defaultLight: {
      x: 0,
      scale: 1,
      transition: springTransition
    },
    defaultDark: {
      x: 0,
      scale: 1,
      transition: springTransition
    },
    hoverLight: {
      x: 2,
      scale: 1,
      transition: springTransition
    },
    hoverDark: {
      x: 16,
      scale: 1,
      transition: springTransition
    }
  };

  const getDotVariant = () => {
    if (isHovered) {
      return theme === 'light' ? 'hoverLight' : 'hoverDark';
    }
    return theme === 'light' ? 'defaultLight' : 'defaultDark';
  };

  return (
    <motion.div
      style={{
        backgroundColor: 'var(--token-ca1e8363-88d0-40f1-abb8-1f9ce6252271, rgb(255, 255, 255))',
        opacity: 0.16,
        borderRadius: '32px',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
      variants={containerVariants}
      initial="default"
      animate={isHovered ? "hover" : "default"}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          width: '14px',
          height: '14px',
          backgroundColor: 'var(--token-ca1e8363-88d0-40f1-abb8-1f9ce6252271, rgb(255, 255, 255))',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          y: '-50%'
        }}
        variants={dotVariants}
        animate={getDotVariant()}
      />
    </motion.div>
  );
};

export default ThemeToggle;