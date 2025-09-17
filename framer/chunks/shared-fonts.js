// Clean rewrite of chunk-V2U57ZQI.js
// Shared Font and Style Definitions
// Provides font loading, typography styles, and responsive design tokens

import { fontStore } from "unframer";

// ========================================
// FONT LOADING CONFIGURATION
// ========================================

// Load required font families and styles
fontStore.loadFonts([
  "BI;Open Sauce Sans/Medium/v0",  // Open Sauce Sans Medium 500
  "Inter-Bold",                    // Inter Bold 700
  "Inter-BoldItalic",             // Inter Bold Italic 700
  "Inter-Italic"                  // Inter Italic 400
]);

// ========================================
// COMPREHENSIVE FONT DEFINITIONS
// ========================================

const fonts = [{
  explicitInter: true,
  fonts: [
    // ========================================
    // OPEN SAUCE SANS - PRIMARY BRAND FONT
    // ========================================
    {
      family: "Open Sauce Sans",
      source: "builtIn",
      style: "normal",
      url: "https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2",
      weight: "500"  // Medium weight for body text
    },

    // ========================================
    // INTER BOLD (700) - HEADINGS AND EMPHASIS
    // ========================================
    // Cyrillic Extended, Cherokee, etc.
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
      url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
      weight: "700"
    },
    // Cyrillic
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
      url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
      weight: "700"
    },
    // Greek Extended
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+1F00-1FFF",
      url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
      weight: "700"
    },
    // Greek
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0370-03FF",
      url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
      weight: "700"
    },
    // Latin Extended-A, Latin Extended-B
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
      weight: "700"
    },
    // Latin (basic)
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
      weight: "700"
    },
    // Vietnamese
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
      url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
      weight: "700"
    },

    // ========================================
    // INTER BOLD ITALIC (700) - EMPHASIZED HEADINGS
    // ========================================
    // Cyrillic Extended, Cherokee, etc.
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
      url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
      weight: "700"
    },
    // Cyrillic
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
      url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
      weight: "700"
    },
    // Greek Extended
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+1F00-1FFF",
      url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
      weight: "700"
    },
    // Greek
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0370-03FF",
      url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
      weight: "700"
    },
    // Latin Extended-A, Latin Extended-B
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
      weight: "700"
    },
    // Latin (basic)
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
      weight: "700"
    },
    // Vietnamese
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
      url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
      weight: "700"
    },

    // ========================================
    // INTER ITALIC (400) - SUBTLE EMPHASIS
    // ========================================
    // Cyrillic Extended, Cherokee, etc.
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
      url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2",
      weight: "400"
    },
    // Cyrillic
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
      url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2",
      weight: "400"
    },
    // Greek Extended
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+1F00-1FFF",
      url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2",
      weight: "400"
    },
    // Greek
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0370-03FF",
      url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2",
      weight: "400"
    },
    // Latin Extended-A, Latin Extended-B
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2",
      weight: "400"
    },
    // Latin (basic)
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      url: "https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2",
      weight: "400"
    },
    // Vietnamese
    {
      family: "Inter",
      source: "framer",
      style: "italic",
      unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
      url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2",
      weight: "400"
    }
  ]
}];

// ========================================
// RESPONSIVE TYPOGRAPHY SYSTEM
// ========================================

const css = [
  // ========================================
  // BASE DESKTOP STYLES (1440px+)
  // ========================================
  '.framer-ArcPE .framer-styles-preset-158jz12:not(.rich-text-wrapper), .framer-ArcPE .framer-styles-preset-158jz12.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',

  // ========================================
  // LARGE DESKTOP (1025px - 1439px)
  // ========================================
  // Maintains 16px font size for consistency
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-ArcPE .framer-styles-preset-158jz12:not(.rich-text-wrapper), .framer-ArcPE .framer-styles-preset-158jz12.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // TABLET (700px - 1024px)
  // ========================================
  // Maintains 16px font size for tablet readability
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-ArcPE .framer-styles-preset-158jz12:not(.rich-text-wrapper), .framer-ArcPE .framer-styles-preset-158jz12.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',

  // ========================================
  // MOBILE (0px - 699px)
  // ========================================
  // Reduced to 14px for better mobile readability
  '@media (max-width: 699px) and (min-width: 0px) { .framer-ArcPE .framer-styles-preset-158jz12:not(.rich-text-wrapper), .framer-ArcPE .framer-styles-preset-158jz12.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

// ========================================
// STYLE CLASS NAME
// ========================================

// Base CSS class name for this style preset
const className = "framer-ArcPE";

// ========================================
// EXPORTS
// ========================================

export {
  fonts,    // Font definitions with all weights and styles
  css,      // Responsive typography CSS rules
  className // Base style class name
};