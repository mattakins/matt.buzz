// Clean rewrite of chunk-TTWRYTTS.js
// Large Heading Typography - Open Sauce Sans Medium
// Provides responsive large heading text with 48px/36px/26px sizing across breakpoints

import { fontStore } from "unframer";

// ========================================
// FONT LOADING
// ========================================

// Load Open Sauce Sans Medium (500 weight) for large headings
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

// Responsive large heading preset with Open Sauce Sans Medium
// Scales from 48px on desktop down to 26px on mobile
// Uses h2 element for semantic structure
const css = [
  // ========================================
  // BASE DESKTOP STYLES (1440px+) - 48px
  // ========================================
  '.framer-A8Fpp .framer-styles-preset-157lx9s:not(.rich-text-wrapper), .framer-A8Fpp .framer-styles-preset-157lx9s.rich-text-wrapper h2 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',

  // ========================================
  // LARGE DESKTOP (1025px - 1439px) - 48px
  // ========================================
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-A8Fpp .framer-styles-preset-157lx9s:not(.rich-text-wrapper), .framer-A8Fpp .framer-styles-preset-157lx9s.rich-text-wrapper h2 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // TABLET (700px - 1024px) - 36px
  // ========================================
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-A8Fpp .framer-styles-preset-157lx9s:not(.rich-text-wrapper), .framer-A8Fpp .framer-styles-preset-157lx9s.rich-text-wrapper h2 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // MOBILE (0px - 699px) - 26px
  // ========================================
  '@media (max-width: 699px) and (min-width: 0px) { .framer-A8Fpp .framer-styles-preset-157lx9s:not(.rich-text-wrapper), .framer-A8Fpp .framer-styles-preset-157lx9s.rich-text-wrapper h2 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

// CSS class name for this typography preset
const className = "framer-A8Fpp";

// ========================================
// EXPORTS
// ========================================

export {
  fonts,     // Open Sauce Sans Medium 500 font definition
  css,       // Responsive CSS for 48px/36px/26px large heading text
  className  // CSS class name "framer-A8Fpp"
};
