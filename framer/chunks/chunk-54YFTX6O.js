// Clean rewrite of chunk-54YFTX6O.js
// Application Routes Configuration
// Defines the routing structure for the entire portfolio site

// ========================================
// UTILITY EXPORTS
// ========================================

// Helper utility for defining object properties (from Unframer)
const __defProp = Object.defineProperty;

// Export utility function for batch property exports
const __export = (target, all) => {
  for (const name in all) {
    __defProp(target, name, { get: all[name], enumerable: true });
  }
};

// ========================================
// APPLICATION ROUTES
// ========================================

// Complete routing configuration for the portfolio site
// Maps internal Framer component IDs to URL paths
const routes = {
  // Home page - landing/welcome page
  "augiA20Il": {
    path: "/"
  },

  // About page - personal information and background
  "sK3Qycp36": {
    path: "/about"
  },

  // Portfolio overview - showcase of work/projects
  "APn30jGVo": {
    path: "/portfolio"
  },

  // Individual portfolio item - dynamic route with slug parameter
  // Allows URLs like /portfolio/project-name
  "BI7ZQ0OEo": {
    path: "/portfolio/:slug"
  },

  // Contact page - contact form and information
  "auQTnh1XA": {
    path: "/contact"
  },

  // 404 error page - shown for invalid URLs
  "Eke7njGIB": {
    path: "/404"
  }
};

// ========================================
// EXPORTS
// ========================================

export {
  __export,  // Utility function for batch property exports
  routes     // Complete application routing configuration
};
