# Matt.buzz Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer motion components. Features a clean design system, smooth animations, and an integrated theme switching system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: CSS with responsive design
- **Animations**: Framer Motion with custom components
- **Typography**: Open Sauce Sans font family
- **Theme**: Light/Dark mode support
- **Routing**: Custom routing system
- **Icons**: SVG-based icon system

## 📁 Project Structure

```
matt-portfolio/
├── framer/                 # Framer components and chunks
│   ├── chunks/            # Reusable component chunks (renamed for clarity)
│   ├── *.jsx             # Main Framer components
│   └── theme.jsx         # Theme management
├── components/            # Custom React components
├── utils/                # Utility functions
├── public/               # Static assets
└── dist/                 # Build output
```

## 🎨 Design System

### Typography Hierarchy
- **Hero Text**: 48px/36px/26px (Desktop/Tablet/Mobile)
- **Headings**: 24px/20px/18px responsive scaling
- **Body Text**: 16px/14px responsive scaling
- **All text**: Open Sauce Sans with -0.02em letter spacing

### Color System
- **Primary**: CSS custom properties with theme tokens
- **Background**: Dynamic based on theme
- **Text**: High contrast for accessibility
- **Accent**: Theme-aware accent colors

### Animation System
- **Spring Transitions**: 400ms stiffness, 60-80 damping
- **Hover Effects**: Skew, scale, and opacity animations
- **Page Transitions**: Smooth routing animations
- **Loading States**: Spinner and skeleton screens

## 🧩 Key Components

### Core Components
- **Theme Toggle**: 6-state interactive theme switcher
- **Navigation**: Responsive nav with animated arrows
- **Ticker**: Infinite scrolling text showcase
- **Time/Date**: Live updating time display
- **Form Button**: Interactive button with loading states

### Layout Components
- **Header Box**: Main header with 5 interactive variants
- **Portfolio Items**: Showcase cards with hover effects
- **Experience**: Work history timeline
- **Stack Showcase**: Technology skills display

## 🎯 Features

- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Theme Switching** - Light/dark mode with persistence
- ✅ **Live Time** - Real-time clock with formatting options
- ✅ **Smooth Animations** - Framer Motion throughout
- ✅ **Performance Optimized** - Lazy loading and code splitting
- ✅ **SEO Ready** - Meta tags and semantic HTML
- ✅ **Accessibility** - ARIA labels and keyboard navigation

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

### File Organization
- **Chunks**: All chunk files now have descriptive names (see CHUNKS.md)
- **Components**: Organized by functionality
- **Styles**: Responsive CSS with custom properties
- **Assets**: Optimized images and icons

### Common Tasks
- **Adding Components**: See COMPONENTS.md for component patterns
- **Styling**: Use CSS custom properties for theming
- **Animations**: Follow existing Framer Motion patterns
- **Testing**: Dev server auto-reloads on changes

## 📚 Documentation

- **[CHUNKS.md](./CHUNKS.md)** - Complete chunk file reference
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture overview
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development workflows
- **[COMPONENTS.md](./COMPONENTS.md)** - Component documentation

## 🌐 Deployment

The site can be deployed to any static hosting platform:

- **Vercel**: Connect GitHub repo for auto-deployment
- **Netlify**: Drag & drop dist folder or connect repo
- **GitHub Pages**: Use GitHub Actions for automated builds

## 🔗 Links

- **Live Site**: [matt.buzz](https://matt.buzz)
- **Repository**: GitHub repo (current)
- **Design System**: Documented in components

## 📄 License

Private portfolio project - All rights reserved

---

*Built with ❤️ using modern web technologies*