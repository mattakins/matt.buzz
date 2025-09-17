# Component Documentation & Mapping

This document provides comprehensive mapping and documentation for all components in the matt.buzz portfolio, showing the relationship between main components and their underlying chunks.

## 📋 Component Hierarchy Overview

```
Portfolio Application
├── Main App Structure
│   ├── App.jsx                 → Application root
│   ├── Router.jsx              → Custom routing system
│   └── index.html              → HTML entry point
├── Framer Components           → Main component exports
│   ├── main.jsx               → Primary portfolio page
│   ├── nav.jsx                → Navigation component
│   ├── portfolio-box.jsx      → Portfolio item wrapper
│   └── theme.jsx              → Theme management
└── Chunk Components           → Atomic building blocks
    ├── Typography Components  → Text styling
    ├── Navigation Components  → Nav and links
    ├── Layout Components      → Page structure
    ├── Interactive Components → Buttons and forms
    └── Utility Components     → Routes and helpers
```

## 🎯 Main Component to Chunk Mapping

### Core Page Components

| Main Component | Primary Chunks | Purpose |
|---|---|---|
| **main.jsx** | `portfolio-layout.js`, `header-box.js`, `stack-showcase.js` | Main portfolio page with header and skills showcase |
| **nav.jsx** | `main-navigation.js`, `time-date.js`, `theme-toggle.js` | Primary navigation with time display and theme switcher |
| **portfolio-box.jsx** | `portfolio-item.js`, `dual-typography.js` | Individual portfolio item display component |
| **theme.jsx** | Theme management system (built-in Data stores) | Global theme state and persistence |

### Component Dependencies

```
main.jsx
├── portfolio-layout.js (57KB)
│   ├── header-box.js (23KB)
│   │   ├── hero-typography.js (3.7KB)
│   │   ├── heading-typography.js (3.7KB)
│   │   └── link-skew.js (8KB)
│   ├── stack-showcase.js (58KB)
│   │   ├── shared-fonts.js (10KB)
│   │   ├── body-typography.js (3.7KB)
│   │   └── dual-typography.js (7KB)
│   ├── text-showcase.js (21KB)
│   │   ├── ticker.js (12KB)
│   │   └── text-reveal.js (2.5KB)
│   ├── experience.js (12KB)
│   └── portfolio-item.js (24KB)

nav.jsx
├── main-navigation.js (73KB)
│   ├── time-date.js (6KB)
│   ├── theme-toggle.js (7KB)
│   ├── nav-link.js (16KB)
│   ├── form-button.js (13KB)
│   ├── shared-fonts.js (10KB)
│   └── routes.js (654B)
```

## 🧱 Chunk Component Categories

### 1. Typography Components
Responsible for all text rendering and responsive typography.

| Chunk File | Size | Responsive Sizes | Usage |
|---|---|---|---|
| **hero-typography.js** | 3.7KB | 48px/36px/26px | Hero headers, large titles |
| **heading-typography.js** | 3.7KB | 24px/20px/18px | Section headings, subheaders |
| **body-typography.js** | 3.7KB | 16px/14px | Body text, descriptions |
| **dual-typography.js** | 7KB | Combined presets | Mixed content components |
| **shared-fonts.js** | 10KB | Font definitions | Open Sauce Sans loading |

**Key Features:**
- Responsive scaling across 3 breakpoints
- Open Sauce Sans font family with multiple weights
- -0.02em letter spacing for improved readability
- CSS-in-JS styling with withCSS integration

### 2. Navigation Components
Handle all navigation, routing, and user interface elements.

| Chunk File | Size | Functionality | Interactive Features |
|---|---|---|---|
| **main-navigation.js** | 73KB | Primary navigation bar | Theme toggle, responsive layout |
| **nav-link.js** | 16KB | Navigation links | Animated arrows, hover effects |
| **routes.js** | 654B | Route definitions | Application routing structure |
| **time-date.js** | 6KB | Live time display | Real-time updates, formatting |
| **form-button.js** | 13KB | Interactive buttons | Loading states, animations |

**Key Features:**
- Responsive navigation that collapses on mobile
- Live time updates using Intl.DateTimeFormat
- Smooth arrow animations on hover
- Theme-aware styling throughout

### 3. Layout Components
Manage page structure, responsive behavior, and content organization.

| Chunk File | Size | Purpose | Responsive Behavior |
|---|---|---|---|
| **portfolio-layout.js** | 57KB | Main page layout | Full responsive grid system |
| **layout-container.js** | 35KB | Content containers | Flexible container management |
| **header-box.js** | 23KB | Page headers | 5 interactive variants |
| **portfolio-item.js** | 24KB | Portfolio showcases | Card-based responsive layout |

**Key Features:**
- CSS Grid and Flexbox for responsive layouts
- Breakpoint system: Desktop (1440px+), Tablet (700-1024px), Mobile (0-699px)
- Dynamic content sizing and spacing
- Theme-aware background and spacing

### 4. Interactive Components
Provide user interactions, animations, and dynamic content.

| Chunk File | Size | Interaction Type | Animation Features |
|---|---|---|---|
| **theme-toggle.js** | 7KB | Theme switching | 6-state smooth transitions |
| **ticker.js** | 12KB | Infinite scrolling | Performance-optimized animation |
| **text-showcase.js** | 21KB | Text animations | Large scrolling text displays |
| **experience.js** | 12KB | Timeline display | Work history showcase |
| **stack-showcase.js** | 58KB | Skills display | Technology grid with interactions |
| **link-skew.js** | 8KB | Link effects | Skew hover animations |

**Key Features:**
- Framer Motion animations throughout
- Spring-based transitions (400ms stiffness, 60-80 damping)
- Gesture handlers for hover, tap, and focus
- Performance optimizations for smooth 60fps animations

### 5. Utility Components
Support functionality and system operations.

| Chunk File | Size | Functionality |
|---|---|---|
| **text-reveal.js** | 2.5KB | Scroll-based text animations |
| **routes.js** | 654B | Application routing configuration |

## 🎨 Component Architecture Patterns

### Standard Component Structure
Every chunk follows this consistent pattern:

```javascript
export const ComponentName = React.forwardRef(function(props, ref) {
  // 1. Props processing and defaults
  const mergedProps = { ...defaultProps, ...props };

  // 2. Variant state management
  const { baseVariant, gestureVariant } = useVariantState({
    defaultVariant: "Desktop",
    enabledGestures: { hover: true, tap: true }
  });

  // 3. Animation variants definition
  const variants = {
    Desktop: { /* desktop styles */ },
    Tablet: { /* tablet styles */ },
    Mobile: { /* mobile styles */ },
    hover: { /* hover animations */ }
  };

  // 4. Responsive styling with withCSS
  const responsiveStyles = withCSS({
    // Base styles
    fontSize: "16px",
    // Responsive breakpoints
    "@media (max-width: 1024px)": { fontSize: "14px" },
    "@media (max-width: 699px)": { fontSize: "12px" }
  });

  // 5. Return motion component
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={baseVariant}
      whileHover={gestureVariant}
      style={responsiveStyles}
    >
      {/* Component content */}
    </motion.div>
  );
});
```

### Animation Patterns
Consistent animation language across all components:

```javascript
// Standard spring configuration
const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 80
};

// Common gesture variants
const gestureVariants = {
  hover: { scale: 1.05, skewX: -2 },
  tap: { scale: 0.95 },
  focus: { outline: "2px solid var(--token-accent)" }
};
```

### Theme Integration
All components use CSS custom properties for theme awareness:

```javascript
const themeAwareStyles = {
  color: "var(--token-text-primary)",
  backgroundColor: "var(--token-background)",
  borderColor: "var(--token-border)",
  // Theme automatically switches between light/dark values
};
```

## 🔄 Component Data Flow

### Props Flow
```
User Input → Main Component → Chunk Component → UI Rendering
```

### Theme Flow
```
Theme Toggle → Data Store → CSS Variables → Component Re-render
```

### Animation Flow
```
User Gesture → Variant State → Motion Component → Visual Animation
```

## 📱 Responsive Component Behavior

### Breakpoint System
All components respond to three primary breakpoints:

```css
/* Desktop First Approach */
.component {
  /* Desktop: 1440px+ (base styles) */
  font-size: 16px;
  padding: 20px;

  /* Tablet: 700px - 1024px */
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 16px;
  }

  /* Mobile: 0px - 699px */
  @media (max-width: 699px) {
    font-size: 12px;
    padding: 12px;
  }
}
```

### Component Adaptation Examples

| Component | Desktop Behavior | Tablet Behavior | Mobile Behavior |
|---|---|---|---|
| **Navigation** | Full horizontal layout | Condensed horizontal | Hamburger menu |
| **Header Box** | Large text, side-by-side | Medium text, stacked | Small text, vertical |
| **Stack Showcase** | 4-column grid | 2-column grid | 1-column stack |
| **Portfolio Items** | 3-column grid | 2-column grid | 1-column stack |

## 🔧 Development Workflow by Component Type

### Adding Typography Components
1. Use existing typography chunks as templates
2. Follow responsive sizing patterns
3. Integrate with shared-fonts.js
4. Test across all breakpoints

### Adding Interactive Components
1. Start with form-button.js or link-skew.js patterns
2. Define gesture variants (hover, tap, focus)
3. Use standard spring transitions
4. Test animation performance

### Adding Layout Components
1. Study layout-container.js structure
2. Plan responsive behavior first
3. Use CSS Grid or Flexbox consistently
4. Test with various content sizes

## 🧪 Component Testing Strategy

### Manual Testing Checklist
For each component:
- [ ] **Desktop (1440px+)**: Full feature functionality
- [ ] **Tablet (700-1024px)**: Responsive adaptation
- [ ] **Mobile (0-699px)**: Mobile-optimized layout
- [ ] **Light Theme**: Proper color contrast
- [ ] **Dark Theme**: Theme switching works
- [ ] **Animations**: Smooth 60fps performance
- [ ] **Interactions**: Hover, tap, focus states
- [ ] **Accessibility**: Keyboard navigation, ARIA labels

### Performance Testing
- Monitor frame rate during animations
- Check memory usage for ticker components
- Verify smooth theme switching
- Test on lower-end devices

---

*This component mapping provides a complete reference for understanding and working with the matt.buzz portfolio component architecture.*