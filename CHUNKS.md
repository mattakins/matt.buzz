# Framer Chunk Files Reference

This document provides a comprehensive overview of all chunk files in the `/framer/chunks/` directory. These files have been renamed from auto-generated hash-based names to descriptive, human-readable names for better maintainability.

## 📋 Complete Chunk Inventory

### Small Utility Chunks (Under 3KB)

| File | Size | Purpose |
|------|------|---------|
| `routes.js` | 654B | **Application Routes** - Defines routing structure for entire portfolio site |
| `text-reveal.js` | 2.5KB | **Text Reveal Animation** - Scroll-based character-by-character text reveal |
| `heading-typography.js` | 3.7KB | **Heading Typography** - Responsive heading styles (24px/20px/18px) |
| `body-typography.js` | 3.7KB | **Body Typography** - Responsive body text styles (16px/14px) |
| `hero-typography.js` | 3.7KB | **Large Heading Typography** - Hero text styles (48px/36px/26px) |

### Medium Components (3-10KB)

| File | Size | Purpose |
|------|------|---------|
| `time-date.js` | 6KB | **Time & Date Component** - Live updating time/date with formatting options |
| `dual-typography.js` | 7KB | **Dual Typography Styles** - Combined body and heading text presets |
| `theme-toggle.js` | 7KB | **Theme Toggle Switch** - Interactive toggle with 6 states and smooth animations |
| `link-skew.js` | 8KB | **Link Component** - Interactive link with skew hover animation effect |
| `shared-fonts.js` | 10KB | **Shared Font Definitions** - Inter font loading with multiple unicode ranges |

### Large Components (10KB+)

| File | Size | Purpose |
|------|------|---------|
| `ticker.js` | 12KB | **Infinite Ticker** - Scrolling ticker with performance optimizations |
| `experience.js` | 12KB | **Experience Showcase** - Work history and experience display component |
| `form-button.js` | 13KB | **Form Button** - Interactive button with loading states and spinner |
| `nav-link.js` | 16KB | **Navigation Link** - Responsive navigation link with animated arrows |
| `text-showcase.js` | 21KB | **Text Ticker Showcase** - Large scrolling text display for skills/services |
| `header-box.js` | 23KB | **Header Box** - Main header component with 5 interactive variants |
| `portfolio-item.js` | 24KB | **Portfolio Showcase** - Individual portfolio item display component |
| `layout-container.js` | 35KB | **Layout Container** - Complex responsive layout management component |
| `stack-showcase.js` | 58KB | **Stack Showcase** - Technology stack and skills display component |
| `main-navigation.js` | 73KB | **Main Navigation** - Primary navigation bar with theme switcher integration |
| `portfolio-layout.js` | 57KB | **Portfolio Layout** - Main portfolio page layout and content management |

## 🔧 Technical Implementation

### Code Organization
All chunk files have been rewritten with:
- **Clean Structure** - Organized sections with clear headers
- **Comprehensive Documentation** - Inline comments explaining functionality
- **Original Components Preserved** - All Framer motion components maintained
- **Consistent Formatting** - Standardized code style across all files

### Component Architecture
- **Framer Motion Integration** - Uses `motion.div`, `motion.header`, etc.
- **Responsive Design** - Breakpoints: Desktop (1440px+), Tablet (700-1024px), Mobile (0-699px)
- **Typography System** - Open Sauce Sans font family with multiple weights
- **Theme Support** - Light/dark mode compatibility
- **Animation Framework** - Spring transitions and gesture handlers

### Import Dependencies
Many chunks import from other chunks creating a dependency tree:
```javascript
// Example dependency chain
portfolio-layout.js → header-box.js
                    → stack-showcase.js
                    → time-date.js

main-navigation.js → time-date.js
                   → theme-toggle.js
                   → shared-fonts.js
                   → routes.js
```

## ⚠️ Important Notes

1. **Descriptive File Names** - All files now have human-readable names for better maintainability
2. **Dependency Order Matters** - Some chunks depend on others and must load in sequence
3. **All Original Functionality Preserved** - Visual output and interactions remain identical
4. **Performance Optimized** - Code cleanup improved readability without affecting performance
5. **Import Statements Updated** - All 100+ import references have been updated to use new names

## 🗂️ Legacy Files

The following backup files exist but are no longer used:
- `chunk-EFMHCGGP-backup.js` - Old backup from initial rewrite attempts
- `chunk-EFMHCGGP-clean.js` - Experimental simplified version

These can be safely removed as they used an incorrect approach (plain React instead of Framer components).

---

*Last updated: September 17, 2025*
*All chunk files successfully renamed to descriptive names and fully documented*
*100+ import statements updated across entire codebase*