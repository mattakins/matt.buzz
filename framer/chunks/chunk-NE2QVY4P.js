// Clean rewrite of chunk-NE2QVY4P.js
// Dual Shared Typography Styles - provides two responsive font presets
// Preserves exact font loading and responsive design tokens

import { fontStore } from "unframer";

// ========================================
// FIRST TYPOGRAPHY PRESET - 16px/14px BODY TEXT
// ========================================

// Load Open Sauce Sans Medium for body text
fontStore.loadFonts(["BI;Open Sauce Sans/Medium/v0"]);

// Font definition for body text
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

// Responsive CSS for body text preset
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

// CSS class name for body text preset
const className = "framer-SqmUy";

// ========================================
// SECOND TYPOGRAPHY PRESET - 20px/18px/16px HEADING TEXT
// ========================================

// Load Open Sauce Sans Medium for heading text (using secondary font store)
import { fontStore as fontStore2 } from "unframer";
fontStore2.loadFonts(["BI;Open Sauce Sans/Medium/v0"]);

// Font definition for heading text (same as body, but used in larger sizes)
const fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Open Sauce Sans",
    source: "builtIn",
    style: "normal",
    url: "https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2",
    weight: "500"  // Medium weight
  }]
}];

// Responsive CSS for heading text preset
const css2 = [
  // ========================================
  // BASE DESKTOP STYLES (1440px+) - 20px
  // ========================================
  '.framer-ZsBYC .framer-styles-preset-1fidxhc:not(.rich-text-wrapper), .framer-ZsBYC .framer-styles-preset-1fidxhc.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',

  // ========================================
  // LARGE DESKTOP (1025px - 1439px) - 20px
  // ========================================
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-ZsBYC .framer-styles-preset-1fidxhc:not(.rich-text-wrapper), .framer-ZsBYC .framer-styles-preset-1fidxhc.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // TABLET (700px - 1024px) - 18px
  // ========================================
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-ZsBYC .framer-styles-preset-1fidxhc:not(.rich-text-wrapper), .framer-ZsBYC .framer-styles-preset-1fidxhc.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // MOBILE (0px - 699px) - 16px
  // ========================================
  '@media (max-width: 699px) and (min-width: 0px) { .framer-ZsBYC .framer-styles-preset-1fidxhc:not(.rich-text-wrapper), .framer-ZsBYC .framer-styles-preset-1fidxhc.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

// CSS class name for heading text preset
const className2 = "framer-ZsBYC";

// ========================================
// EXPORTS
// ========================================

export {
  // First preset - Body text (16px/14px) with 1.4em line height
  fonts,     // Open Sauce Sans Medium 500 font definition
  css,       // Responsive CSS for body text preset
  className, // CSS class name "framer-SqmUy"

  // Second preset - Heading text (20px/18px/16px) with 1.2em line height
  fonts2,     // Open Sauce Sans Medium 500 font definition (duplicate)
  css2,       // Responsive CSS for heading text preset
  className2  // CSS class name "framer-ZsBYC"
};