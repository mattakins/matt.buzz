// Clean rewrite of chunk-GCG4FXA2.js
// Responsive Body Text Typography - Open Sauce Sans Medium
// Provides responsive body text with 16px/14px sizing across breakpoints

import { fontStore } from "unframer";

// ========================================
// FONT LOADING
// ========================================

// Load Open Sauce Sans Medium (500 weight) for body text
fontStore.loadFonts(["BI;Open Sauce Sans/Medium/v0"]);

// ========================================
// FONT DEFINITION
// ========================================

// Font configuration for Open Sauce Sans Medium
const fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Open Sauce Sans",
    source: "builtIn",
    style: "normal",
    url: "https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2",
    weight: "500"  // Medium weight
  }]
}];

// ========================================
// RESPONSIVE CSS STYLES
// ========================================

// Responsive body text preset with Open Sauce Sans Medium
// Scales from 16px on desktop down to 14px on tablet/mobile
const css = [
  // ========================================
  // BASE DESKTOP STYLES (1440px+) - 16px
  // ========================================
  '.framer-SqmUy .framer-styles-preset-1jepal:not(.rich-text-wrapper), .framer-SqmUy .framer-styles-preset-1jepal.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',

  // ========================================
  // LARGE DESKTOP (1025px - 1439px) - 16px
  // ========================================
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-SqmUy .framer-styles-preset-1jepal:not(.rich-text-wrapper), .framer-SqmUy .framer-styles-preset-1jepal.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // TABLET (700px - 1024px) - 14px
  // ========================================
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-SqmUy .framer-styles-preset-1jepal:not(.rich-text-wrapper), .framer-SqmUy .framer-styles-preset-1jepal.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // MOBILE (0px - 699px) - 14px
  // ========================================
  '@media (max-width: 699px) and (min-width: 0px) { .framer-SqmUy .framer-styles-preset-1jepal:not(.rich-text-wrapper), .framer-SqmUy .framer-styles-preset-1jepal.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

// CSS class name for this typography preset
const className = "framer-SqmUy";

// ========================================
// EXPORTS
// ========================================

export {
  fonts,     // Open Sauce Sans Medium 500 font definition
  css,       // Responsive CSS for 16px/14px body text
  className  // CSS class name "framer-SqmUy"
};
