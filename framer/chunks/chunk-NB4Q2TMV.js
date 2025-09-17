// Clean rewrite of chunk-NB4Q2TMV.js
// Responsive Typography Styles - Open Sauce Sans SemiBold
// Provides responsive heading text with 24px/20px/18px sizing across breakpoints

import { fontStore } from "unframer";

// ========================================
// FONT LOADING
// ========================================

// Load Open Sauce Sans SemiBold (600 weight) for heading text
fontStore.loadFonts(["BI;Open Sauce Sans/SemiBold/v0"]);

// ========================================
// FONT DEFINITION
// ========================================

// Font configuration for Open Sauce Sans SemiBold
const fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Open Sauce Sans",
    source: "builtIn",
    style: "normal",
    url: "https://framerusercontent.com/assets/FU5SehNS0gqCfI1z9VMQFQ9kps.woff2",
    weight: "600"  // SemiBold weight
  }]
}];

// ========================================
// RESPONSIVE CSS STYLES
// ========================================

// Responsive typography preset with Open Sauce Sans SemiBold
// Scales from 24px on desktop down to 18px on mobile
const css = [
  // ========================================
  // BASE DESKTOP STYLES (1440px+) - 24px
  // ========================================
  '.framer-SjF0S .framer-styles-preset-wgkidr:not(.rich-text-wrapper), .framer-SjF0S .framer-styles-preset-wgkidr.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',

  // ========================================
  // LARGE DESKTOP (1025px - 1439px) - 24px
  // ========================================
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-SjF0S .framer-styles-preset-wgkidr:not(.rich-text-wrapper), .framer-SjF0S .framer-styles-preset-wgkidr.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // TABLET (700px - 1024px) - 20px
  // ========================================
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-SjF0S .framer-styles-preset-wgkidr:not(.rich-text-wrapper), .framer-SjF0S .framer-styles-preset-wgkidr.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // MOBILE (0px - 699px) - 18px
  // ========================================
  '@media (max-width: 699px) and (min-width: 0px) { .framer-SjF0S .framer-styles-preset-wgkidr:not(.rich-text-wrapper), .framer-SjF0S .framer-styles-preset-wgkidr.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

// CSS class name for this typography preset
const className = "framer-SjF0S";

// ========================================
// EXPORTS
// ========================================

export {
  fonts,     // Open Sauce Sans SemiBold 600 font definition
  css,       // Responsive CSS for 24px/20px/18px heading text
  className  // CSS class name "framer-SjF0S"
};
