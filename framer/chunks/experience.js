// Clean rewrite of chunk-45I2KKOU.js
// Experience Component - displays work experience with responsive design
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// Import shared styles from NE2QVY4P chunk
import {
  className,
  className2,
  css,
  css2,
  fonts,
  fonts2
} from "./dual-typography.js";

import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import { useRef } from "react";

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Variant cycle order for responsive design
const cycleOrder = ["L7MdRydaj", "FNGOkxvQw", "AdAEdw9AH"];
const serializationHash = "framer-Y2V1L";

// Variant CSS class mappings
const variantClassNames = {
  AdAEdw9AH: "framer-v-1ks3fzb",  // Phone (mobile layout)
  FNGOkxvQw: "framer-v-15y21jp",  // Tablet
  L7MdRydaj: "framer-v-k0rlai"    // Desktop
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Property override utility for variant-specific props
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}

// ========================================
// ANIMATION CONFIGURATION
// ========================================

// Spring transition for smooth interactions
const transition1 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};

// ========================================
// MOTION CONFIGURATION COMPONENTS
// ========================================

// Transition wrapper component for motion config
const Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)]
  );
  return _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};

// Framer motion variants wrapper
const Variants = motion.create(React.Fragment);

// ========================================
// VARIANT AND PROPS CONFIGURATION
// ========================================

// Human-readable variant names to internal IDs
const humanReadableVariantMap = {
  Desktop: "L7MdRydaj",
  Phone: "AdAEdw9AH",
  Tablet: "FNGOkxvQw"
};

// Props processing function with defaults
const getProps = ({ company, description, height, id, period, position, width, ...props }) => {
  return {
    ...props,
    bVE4ijxia: position ?? props.bVE4ijxia ?? "Design Director",
    R2Gne3I4X: period ?? props.R2Gne3I4X ?? "2025 – Present",
    SF2hqf3NH: description ?? props.SF2hqf3NH ?? "I'm now part of TikTok's User Growth Design team, specializing in designing for web and tablet platforms, as well as user growth products tailored to diverse global audiences. My work focuses on crafting cross-platform solutions and scalable design systems that drive engagement and deliver impactful digital experiences worldwide.",
    Uito5nZJ6: company ?? props.Uito5nZJ6 ?? "Incase",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "L7MdRydaj"
  };
};

// Layout dependency creation for animation coordination
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};

// ========================================
// MAIN COMPONENT DEFINITION
// ========================================

const Component = React.forwardRef(function Experience(props, ref) {
  // Ref management
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();

  // Hooks for locale and viewport
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();

  // Process props and extract values
  const {
    style,
    className: className3,
    layoutId,
    variant,
    R2Gne3I4X,    // Period (e.g., "2025 – Present")
    bVE4ijxia,    // Position (e.g., "Design Director")
    Uito5nZJ6,    // Company (e.g., "Incase")
    SF2hqf3NH,    // Description (job details)
    ...restProps
  } = getProps(props);

  // Variant state management (no gestures for this component)
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState({
    cycleOrder,
    defaultVariant: "L7MdRydaj",
    ref: refBinding,
    variant,
    variantClassNames
  });

  // Layout and styling setup
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  // ========================================
  // COMPONENT RENDER
  // ========================================

  return _jsx(LayoutGroup, {
    id: layoutId ?? defaultLayoutId,
    children: _jsx(Variants, {
      animate: variants,
      initial: false,
      children: _jsx(Transition, {
        value: transition1,
        children: _jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-k0rlai", className3, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "L7MdRydaj",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            AdAEdw9AH: { "data-framer-name": "Phone" },
            FNGOkxvQw: { "data-framer-name": "Tablet" }
          }, baseVariant, gestureVariant),
          children: [

            // ========================================
            // LEFT COLUMN - PERIOD AND JOB INFO
            // ========================================
            _jsxs(motion.div, {
              className: "framer-1yw2hd9",
              "data-framer-name": "Left",
              layoutDependency,
              layoutId: "MNtMD4Td2",
              children: [

                // Period text (e.g., "2025 – Present")
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      className: "framer-styles-preset-1jepal",
                      "data-styles-preset": "LM8JVdUMr",
                      style: {
                        "--framer-text-alignment": "left"
                      },
                      children: "2025 – Present"
                    })
                  }),
                  className: "framer-wg3uxm",
                  "data-framer-name": "Text",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "frvXzsRAM",
                  text: R2Gne3I4X,
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Position and Company container
                _jsxs(motion.div, {
                  className: "framer-bq8jrz",
                  "data-framer-name": "Position + Company",
                  layoutDependency,
                  layoutId: "U28_ttkRk",
                  children: [

                    // Position text (e.g., "Design Director")
                    _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: _jsx(React.Fragment, {
                        children: _jsx(motion.p, {
                          className: "framer-styles-preset-1fidxhc",
                          "data-styles-preset": "vDajAIZP7",
                          children: "Design Director"
                        })
                      }),
                      className: "framer-112u5n8",
                      "data-framer-name": "Position",
                      fonts: ["Inter"],
                      layoutDependency,
                      layoutId: "vd9HNXrpj",
                      text: bVE4ijxia,
                      verticalAlignment: "top",
                      withExternalLayout: true
                    }),

                    // Company text (e.g., "Incase")
                    _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: _jsx(React.Fragment, {
                        children: _jsx(motion.p, {
                          className: "framer-styles-preset-1fidxhc",
                          "data-styles-preset": "vDajAIZP7",
                          children: "Incase"
                        })
                      }),
                      className: "framer-1b1lv9c",
                      "data-framer-name": "Company",
                      fonts: ["Inter"],
                      layoutDependency,
                      layoutId: "qxN6O3nmh",
                      text: Uito5nZJ6,
                      verticalAlignment: "top",
                      withExternalLayout: true
                    })
                  ]
                })
              ]
            }),

            // ========================================
            // RIGHT COLUMN - JOB DESCRIPTION
            // ========================================
            _jsx(motion.div, {
              className: "framer-pivs3a",
              "data-framer-name": "Right",
              layoutDependency,
              layoutId: "quJynMW2i",
              children: _jsx(RichText, {
                __fromCanvasComponent: true,
                children: _jsx(React.Fragment, {
                  children: _jsx(motion.p, {
                    className: "framer-styles-preset-1jepal",
                    "data-styles-preset": "LM8JVdUMr",
                    style: {
                      "--framer-text-alignment": "left"
                    },
                    children: "I'm now part of TikTok's User Growth Design team, specializing in designing for web and tablet platforms, as well as user growth products tailored to diverse global audiences. My work focuses on crafting cross-platform solutions and scalable design systems that drive engagement and deliver impactful digital experiences worldwide."
                  })
                }),
                className: "framer-1vloy4b",
                "data-framer-name": "Text",
                fonts: ["Inter"],
                layoutDependency,
                layoutId: "lJL21RnJy",
                style: {
                  opacity: 0.5 // Muted description text
                },
                text: SF2hqf3NH,
                verticalAlignment: "top",
                withExternalLayout: true
              })
            })
          ]
        })
      })
    })
  });
});

// ========================================
// COMPONENT CSS LAYOUT STYLES
// ========================================

const css3 = [
  // CSS feature detection for aspect-ratio support
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",

  // Base component display settings
  ".framer-Y2V1L.framer-1owtnlz, .framer-Y2V1L .framer-1owtnlz { display: block; }",

  // Desktop layout - horizontal flex with 32px gap, 1200px width
  ".framer-Y2V1L.framer-k0rlai { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",

  // Left column - period and job info container
  ".framer-Y2V1L .framer-1yw2hd9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",

  // Period text - flexible width with break-word
  ".framer-Y2V1L .framer-wg3uxm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",

  // Position + Company container - vertical stack with 4px gap
  ".framer-Y2V1L .framer-bq8jrz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 50%; }",

  // Position and Company text styles
  ".framer-Y2V1L .framer-112u5n8, .framer-Y2V1L .framer-1b1lv9c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",

  // Right column - description container
  ".framer-Y2V1L .framer-pivs3a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }",

  // Description text - max-width 500px for readability
  ".framer-Y2V1L .framer-1vloy4b { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",

  // ========================================
  // TABLET VARIANT STYLES
  // ========================================
  // Tablet layout - reduced gap and width, adjusted proportions
  ".framer-Y2V1L.framer-v-15y21jp.framer-k0rlai { gap: 16px; width: 700px; }",
  ".framer-Y2V1L.framer-v-15y21jp .framer-bq8jrz { width: 58%; }",  // Slightly wider left column
  ".framer-Y2V1L.framer-v-15y21jp .framer-pivs3a { width: 40%; }", // Narrower right column

  // ========================================
  // PHONE VARIANT STYLES
  // ========================================
  // Mobile layout - vertical stack with smaller width
  ".framer-Y2V1L.framer-v-1ks3fzb.framer-k0rlai { flex-direction: column; gap: 24px; width: 390px; }",
  ".framer-Y2V1L.framer-v-1ks3fzb .framer-1yw2hd9 { flex: none; gap: 16px; width: 100%; }",
  ".framer-Y2V1L.framer-v-1ks3fzb .framer-bq8jrz { flex: 1 0 0px; width: 1px; }",
  ".framer-Y2V1L.framer-v-1ks3fzb .framer-pivs3a { width: 100%; }",

  // Include shared CSS styles from imported chunks
  ...css,
  ...css2
];

// ========================================
// COMPONENT EXPORT AND CONFIGURATION
// ========================================

// Create final component with CSS
const FramerAhT0q8znE = withCSS(Component, css3, "framer-Y2V1L");
const stdin_default = FramerAhT0q8znE;

// Component metadata
FramerAhT0q8znE.displayName = "Experience";
FramerAhT0q8znE.defaultProps = {
  height: 134.5,
  width: 1200
};

// ========================================
// PROPERTY CONTROLS AND FONTS
// ========================================

// Add property controls for Framer
addPropertyControls(FramerAhT0q8znE, {
  variant: {
    options: ["L7MdRydaj", "FNGOkxvQw", "AdAEdw9AH"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: ControlType.Enum
  },
  R2Gne3I4X: {
    defaultValue: "2025 – Present",
    description: "The period of the job",
    displayTextArea: false,
    title: "Period",
    type: ControlType.String
  },
  bVE4ijxia: {
    defaultValue: "Design Director",
    description: "Write your position here",
    displayTextArea: false,
    title: "Position",
    type: ControlType.String
  },
  Uito5nZJ6: {
    defaultValue: "Incase",
    description: "Write the name of the company",
    displayTextArea: false,
    title: "Company",
    type: ControlType.String
  },
  SF2hqf3NH: {
    defaultValue: "I'm now part of TikTok's User Growth Design team, specializing in designing for web and tablet platforms, as well as user growth products tailored to diverse global audiences. My work focuses on crafting cross-platform solutions and scalable design systems that drive engagement and deliver impactful digital experiences worldwide.",
    description: "Write a brief about the job and what you acheived",
    displayTextArea: true,
    title: "Description",
    type: ControlType.String
  }
});

// Add comprehensive Inter font family support
addFonts(FramerAhT0q8znE, [{
  explicitInter: true,
  fonts: [
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
      url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
      url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+1F00-1FFF",
      url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0370-03FF",
      url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
      weight: "400"
    },
    {
      family: "Inter",
      source: "framer",
      style: "normal",
      unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
      url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
      weight: "400"
    }
  ]
}, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], {
  supportsExplicitInterCodegen: true
});

export {
  stdin_default
};