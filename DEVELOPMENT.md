# Development Workflow Guide

This guide provides comprehensive workflows for developing and maintaining the matt.buzz portfolio website.

## 🚀 Quick Development Setup

### Initial Setup
```bash
# Clone and setup
git clone <repository-url>
cd matt-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server
- **Local URL**: `http://localhost:5173`
- **Hot Reload**: Automatically reloads on file changes
- **Error Overlay**: Visual error display in browser
- **Network Access**: Available on local network for mobile testing

## 🔧 Development Commands

### Core Commands
```bash
npm run dev          # Start Vite dev server (port 5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint (if configured)
```

### Development Workflow
```bash
# Daily development flow
npm run dev          # Start server
# Make changes...
npm run build        # Test production build
npm run preview      # Verify production build works
```

## 📁 File Organization & Development Patterns

### Component Development
When creating or modifying components:

1. **Check Existing Patterns**: Look at similar components first
2. **Follow Chunk Architecture**: Understand Framer component structure
3. **Maintain Responsive Design**: Use existing breakpoint system
4. **Preserve Animation Patterns**: Follow Framer Motion conventions

### File Structure Guidelines
```
/framer/chunks/           # Core component logic
├── typography/           # Text-related components
├── navigation/           # Nav components
├── layout/              # Layout management
└── interactive/         # Buttons, forms, animations

/framer/*.jsx            # Main component exports
/components/             # Custom React components
/utils/                  # Utility functions
/public/                 # Static assets
```

## 🎨 Design System Development

### Typography Development
```javascript
// Typography component structure
export const TypographyComponent = React.forwardRef(function(props, ref) {
  // 1. Merge props with defaults
  const mergedProps = { ...defaultProps, ...props };

  // 2. Setup responsive variants
  const { baseVariant } = useVariantState({
    defaultVariant: "Desktop",
    // ... variant config
  });

  // 3. Apply responsive styles with withCSS
  return (
    <motion.div
      variants={variants}
      style={responsiveStyles}
      // ... component JSX
    />
  );
});
```

### Theme Development
```javascript
// Theme integration pattern
const themeVariants = {
  light: { backgroundColor: "var(--token-background-light)" },
  dark: { backgroundColor: "var(--token-background-dark)" }
};

// Use CSS custom properties
const styles = {
  color: "var(--token-text-primary)",
  backgroundColor: "var(--token-background)",
  // ... theme-aware styles
};
```

### Animation Development
```javascript
// Standard animation pattern
const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const transitions = {
  type: "spring",
  stiffness: 400,
  damping: 80
};
```

## 🧩 Component Development Workflows

### Adding New Components

1. **Research Existing Components**
   ```bash
   # Search for similar components
   grep -r "ComponentName" framer/chunks/
   ```

2. **Create Component Structure**
   ```javascript
   // New component template
   export const NewComponent = React.forwardRef(function(props, ref) {
     // Props and defaults
     const mergedProps = { ...defaultProps, ...props };

     // Variant state
     const { baseVariant, gestureVariant } = useVariantState({
       defaultVariant: "Desktop",
       enabledGestures: { hover: true }
     });

     // Component logic
     // ...

     return (
       <motion.div
         ref={ref}
         variants={variants}
         animate={baseVariant}
         whileHover={gestureVariant}
       >
         {/* Component content */}
       </motion.div>
     );
   });
   ```

3. **Add Responsive Styles**
   ```javascript
   const responsiveStyles = {
     // Desktop (1440px+)
     fontSize: "16px",
     padding: "20px",

     // Tablet (700-1024px)
     "@media (max-width: 1024px)": {
       fontSize: "14px",
       padding: "16px"
     },

     // Mobile (0-699px)
     "@media (max-width: 699px)": {
       fontSize: "12px",
       padding: "12px"
     }
   };
   ```

### Modifying Existing Components

1. **Read Component Documentation**
   ```bash
   # Find component in chunks
   grep -r "component-name" framer/chunks/
   ```

2. **Understand Dependencies**
   ```javascript
   // Check imports at top of chunk file
   import { dependency } from "./other-chunk.js";
   ```

3. **Test Changes Thoroughly**
   ```bash
   # Test responsive breakpoints
   # Test theme switching
   # Test animations and interactions
   ```

## 🎯 Feature Development Patterns

### Interactive Components
```javascript
// Standard interactive component pattern
export const InteractiveComponent = React.forwardRef(function(props, ref) {
  // State management
  const [isActive, setIsActive] = useState(false);

  // Event handlers
  const handleClick = useCallback(() => {
    setIsActive(!isActive);
    // Animation or state change
  }, [isActive]);

  // Gesture variants
  const variants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    active: { scale: 0.95 }
  };

  return (
    <motion.button
      variants={variants}
      animate={isActive ? "active" : "idle"}
      whileHover="hover"
      onClick={handleClick}
    >
      {/* Button content */}
    </motion.button>
  );
});
```

### Layout Components
```javascript
// Layout component pattern
export const LayoutComponent = React.forwardRef(function(props, ref) {
  // Responsive layout variants
  const layoutVariants = {
    Desktop: { flexDirection: "row", gap: "40px" },
    Tablet: { flexDirection: "row", gap: "24px" },
    Mobile: { flexDirection: "column", gap: "16px" }
  };

  return (
    <motion.div
      ref={ref}
      variants={layoutVariants}
      style={{
        display: "flex",
        alignItems: "center",
        // ... layout styles
      }}
    >
      {props.children}
    </motion.div>
  );
});
```

## 🔄 Testing & Quality Assurance

### Development Testing Checklist
- [ ] **Responsive Design**: Test all breakpoints (Desktop, Tablet, Mobile)
- [ ] **Theme Switching**: Verify light/dark mode compatibility
- [ ] **Animations**: Check smooth transitions and interactions
- [ ] **Performance**: Monitor for animation jank or memory leaks
- [ ] **Accessibility**: Test keyboard navigation and screen readers
- [ ] **Cross-browser**: Test in Chrome, Firefox, Safari

### Performance Testing
```bash
# Build and analyze bundle
npm run build

# Check bundle sizes
ls -la dist/assets/

# Test production performance
npm run preview
# Use browser DevTools for performance profiling
```

### Animation Testing
```javascript
// Performance monitoring for animations
const AnimationDebugger = () => {
  useEffect(() => {
    // Monitor frame rate
    let lastTime = performance.now();

    const checkFPS = () => {
      const now = performance.now();
      const fps = 1000 / (now - lastTime);

      if (fps < 50) {
        console.warn(`Low FPS detected: ${fps.toFixed(1)}`);
      }

      lastTime = now;
      requestAnimationFrame(checkFPS);
    };

    requestAnimationFrame(checkFPS);
  }, []);
};
```

## 🚨 Common Development Issues

### Theme Issues
```javascript
// Problem: Theme not applying correctly
// Solution: Check CSS custom property usage
const correctThemeUsage = {
  color: "var(--token-text-primary)",           // ✅ Correct
  backgroundColor: "var(--token-background)"    // ✅ Correct
};

const incorrectThemeUsage = {
  color: "#000000",                            // ❌ Hardcoded
  backgroundColor: props.darkMode ? "#000" : "#fff"  // ❌ Manual logic
};
```

### Animation Performance
```javascript
// Problem: Animations causing performance issues
// Solution: Use transform and opacity for animations
const performantAnimation = {
  transform: "translateX(0px) scale(1)",       // ✅ GPU accelerated
  opacity: 1                                  // ✅ GPU accelerated
};

const problematicAnimation = {
  left: "0px",                                // ❌ Causes layout recalc
  width: "100px"                              // ❌ Causes layout recalc
};
```

### Responsive Breakpoints
```javascript
// Problem: Inconsistent breakpoints
// Solution: Use standard breakpoint system
const standardBreakpoints = {
  // Desktop: 1440px+ (default)
  "@media (max-width: 1024px)": {             // ✅ Tablet
    // Tablet styles
  },
  "@media (max-width: 699px)": {              // ✅ Mobile
    // Mobile styles
  }
};
```

## 🔧 Advanced Development Workflows

### Component Architecture Debugging
```bash
# Find component dependencies
grep -r "import.*from.*chunks" framer/

# Analyze component structure
grep -r "React.forwardRef" framer/chunks/

# Check animation patterns
grep -r "motion\." framer/chunks/
```

### Bundle Analysis
```bash
# Analyze what's in the build
npm run build
npx vite-bundle-analyzer dist

# Check for unused dependencies
npx depcheck
```

### Git Workflow Integration
```bash
# Feature development workflow
git checkout -b feature/component-name
# Make changes...
npm run build  # Verify build works
git add .
git commit -m "Add new component with responsive design"
git push origin feature/component-name
```

## 📚 Development Resources

### Key File References
- **Component Examples**: `/framer/chunks/header-box.js` (complex component)
- **Simple Components**: `/framer/chunks/form-button.js` (basic interaction)
- **Typography**: `/framer/chunks/hero-typography.js` (text styling)
- **Animation**: `/framer/chunks/ticker.js` (complex animation)
- **Theme**: `/framer/theme.jsx` (theme management)

### Code Patterns to Follow
1. **Always use React.forwardRef** for component definitions
2. **Use useVariantState** for responsive and gesture variants
3. **Apply withCSS** for responsive styling
4. **Follow existing animation patterns** from other components
5. **Use CSS custom properties** for theme integration

### Debugging Tools
- **Vite DevTools**: Built-in error overlay and HMR
- **React DevTools**: Component inspection and profiling
- **Framer Motion DevTools**: Animation debugging
- **Browser DevTools**: Performance and responsiveness testing

---

*This development guide ensures consistent, maintainable code that follows the established patterns and architecture of the matt.buzz portfolio.*