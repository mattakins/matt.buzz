// Clean rewrite of chunk-RGINIOWQ.js
// Form Button Component with multiple states (Default, Loading, Disabled, Success, Error)
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// Import shared styles from V2U57ZQI chunk
import {
  className,
  css,
  fonts
} from "./shared-fonts.js";

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
  withCSS,
  withFX
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import { useRef } from "react";

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Enhanced motion div with FX capabilities for animations
const MotionDivWithFX = withFX(motion.div);

// Gesture configuration - only Default variant supports hover
const enabledGestures = {
  ABDaItX2g: { hover: true }  // Default state
};

// Variant cycle order for state management
const cycleOrder = ["ABDaItX2g", "vtYExkIsS", "RBe6hv0fs", "eU9XjXN9d", "vR3BHtiQo"];
const serializationHash = "framer-t2nY9";

// Variant CSS class mappings
const variantClassNames = {
  ABDaItX2g: "framer-v-1e8gdhe",  // Default
  eU9XjXN9d: "framer-v-1njx8is",  // Success
  RBe6hv0fs: "framer-v-48wq44",   // Disabled
  vR3BHtiQo: "framer-v-paabkz",   // Error
  vtYExkIsS: "framer-v-socwv0"    // Loading
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
// ANIMATION CONFIGURATIONS
// ========================================

// Spring transition for button interactions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.6,
  type: "spring"
};

// Tween transition for smooth loading spinner
const transition2 = {
  delay: 0,
  duration: 1,
  ease: [0, 0, 1, 1],
  type: "tween"
};

// Loading spinner animation configuration
const animation = {
  opacity: 1,
  rotate: 360,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};

// Transform template for centered spinner positioning
const transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;

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
  Default: "ABDaItX2g",
  Disabled: "RBe6hv0fs",
  Error: "vR3BHtiQo",
  Loading: "vtYExkIsS",
  Success: "eU9XjXN9d"
};

// Props processing function with defaults
const getProps = ({ height, id, width, ...props }) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ABDaItX2g"
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

const Component = React.forwardRef(function FormButton(props, ref) {
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
    className: className2,
    layoutId,
    variant,
    ...restProps
  } = getProps(props);

  // Variant state management with gesture support
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
    defaultVariant: "ABDaItX2g",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });

  // Layout and styling setup
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  // ========================================
  // DISPLAY LOGIC FUNCTIONS
  // ========================================

  // Show text content (all states except Loading)
  const isDisplayed = () => {
    if (baseVariant === "vtYExkIsS") return false; // Hide text during loading
    return true;
  };

  // Show loading spinner (only Loading state)
  const isDisplayed1 = () => {
    if (baseVariant === "vtYExkIsS") return true; // Show spinner during loading
    return false;
  };

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
        children: _jsxs(motion.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1e8gdhe", className2, classNames),
          "data-border": true,
          "data-framer-name": "Default",
          "data-reset": "button",
          layoutDependency,
          layoutId: "ABDaItX2g",
          ref: refBinding,
          style: {
            // Border configuration using CSS variables
            "--border-bottom-width": "2px",
            "--border-color": "var(--token-bc0dc324-3347-4f8c-8b15-0992ca3d8bd7, rgba(0, 0, 0, 0.04))",
            "--border-left-width": "2px",
            "--border-right-width": "2px",
            "--border-style": "solid",
            "--border-top-width": "2px",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            opacity: 1,
            ...style
          },
          variants: {
            "ABDaItX2g-hover": { opacity: 1 },
            eU9XjXN9d: { opacity: 1 },      // Success state
            RBe6hv0fs: { opacity: 0.5 },    // Disabled state (reduced opacity)
            vR3BHtiQo: { opacity: 1 }       // Error state
          },
          ...addPropertyOverrides({
            "ABDaItX2g-hover": { "data-framer-name": undefined },
            eU9XjXN9d: { "data-framer-name": "Success" },
            RBe6hv0fs: { "data-framer-name": "Disabled" },
            vR3BHtiQo: { "data-framer-name": "Error" },
            vtYExkIsS: { "data-framer-name": "Loading" }
          }, baseVariant, gestureVariant),
          children: [

            // ========================================
            // BUTTON TEXT CONTENT
            // ========================================
            isDisplayed() && _jsx(RichText, {
              __fromCanvasComponent: true,
              children: _jsx(React.Fragment, {
                children: _jsx(motion.p, {
                  className: "framer-styles-preset-158jz12",
                  "data-styles-preset": "wHrcYNopH",
                  children: "Submit"
                })
              }),
              className: "framer-vmv1l7",
              fonts: ["Inter"],
              layoutDependency,
              layoutId: "n33ckIFbq",
              style: {
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              },
              variants: {
                "ABDaItX2g-hover": {
                  "--extracted-r6o4lv": "var(--token-62d5ebd4-5867-40fc-ba4d-ed46a167a079, rgb(0, 0, 0))"
                },
                eU9XjXN9d: {
                  "--extracted-r6o4lv": "var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255))"
                },
                vR3BHtiQo: {
                  "--extracted-r6o4lv": "rgb(255, 34, 68)" // Error red color
                }
              },
              verticalAlignment: "top",
              withExternalLayout: true,
              ...addPropertyOverrides({
                // Hover state - default "Submit" text with black color
                "ABDaItX2g-hover": {
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      className: "framer-styles-preset-158jz12",
                      "data-styles-preset": "wHrcYNopH",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-62d5ebd4-5867-40fc-ba4d-ed46a167a079, rgb(0, 0, 0)))"
                      },
                      children: "Submit"
                    })
                  })
                },
                // Success state - white text with success message
                eU9XjXN9d: {
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      style: {
                        "--font-selector": "Qkk7T3BlbiBTYXVjZSBTYW5zL1JlZ3VsYXIvdjA=",
                        "--framer-font-family": '"Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255)))"
                      },
                      children: "Thank you! Your submission has been received!"
                    })
                  }),
                  fonts: ["BI;Open Sauce Sans/Regular/v0"]
                },
                // Error state - red text with error message
                vR3BHtiQo: {
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      style: {
                        "--font-selector": "Qkk7T3BlbiBTYXVjZSBTYW5zL1JlZ3VsYXIvdjA=",
                        "--framer-font-family": '"Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))"
                      },
                      children: "Something Went Wrong"
                    })
                  }),
                  fonts: ["BI;Open Sauce Sans/Regular/v0"]
                }
              }, baseVariant, gestureVariant)
            }),

            // ========================================
            // LOADING SPINNER
            // ========================================
            isDisplayed1() && _jsx(motion.div, {
              className: "framer-e7vtg1",
              "data-framer-name": "Spinner",
              layoutDependency,
              layoutId: "b9hA1PA89",
              style: {
                // SVG mask for spinner shape
                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
              },
              children: _jsx(MotionDivWithFX, {
                // Continuous rotation animation
                __framer__loop: animation,
                __framer__loopEffectEnabled: true,
                __framer__loopRepeatDelay: 0,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: transition2,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                className: "framer-11256y6",
                "data-framer-name": "Conic",
                layoutDependency,
                layoutId: "xJtteP03S",
                style: {
                  // Default non-loading appearance (full blue circle)
                  background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
                  backgroundColor: "rgb(68, 204, 255)",
                  mask: "none",
                  WebkitMask: "none"
                },
                variants: {
                  // Loading state - spinning gradient with transparency
                  vtYExkIsS: {
                    background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                    WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                  }
                },
                children: _jsx(motion.div, {
                  className: "framer-x1m4y5",
                  "data-framer-name": "Rounding",
                  layoutDependency,
                  layoutId: "NS2aVIE8U",
                  style: {
                    // Small rounded element for spinner detail
                    backgroundColor: "var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(0, 0, 0))",
                    borderBottomLeftRadius: 1,
                    borderBottomRightRadius: 1,
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  },
                  transformTemplate: transformTemplate1
                })
              })
            }),

            // ========================================
            // BACKGROUND OVERLAY
            // ========================================
            _jsx(motion.div, {
              className: "framer-k7g8fm",
              "data-framer-name": "BG",
              layoutDependency,
              layoutId: "hKusvx0R4",
              style: {
                backgroundColor: "var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(0, 0, 0))",
                opacity: 0.08 // Subtle background by default
              },
              variants: {
                "ABDaItX2g-hover": { opacity: 1 } // Full background on hover
              }
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

const css2 = [
  // CSS feature detection for aspect-ratio support
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",

  // Base component display settings
  ".framer-t2nY9.framer-1cbr6at, .framer-t2nY9 .framer-1cbr6at { display: block; }",

  // Main button container - horizontal flex with centered content
  ".framer-t2nY9.framer-1e8gdhe { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 54px; justify-content: center; min-width: 140px; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",

  // Text label styles
  ".framer-t2nY9 .framer-vmv1l7 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 2; }",

  // Loading spinner container - 20x20px square
  ".framer-t2nY9 .framer-e7vtg1 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; z-index: 2; }",

  // Spinner animation container - absolute positioned
  ".framer-t2nY9 .framer-11256y6 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",

  // Spinner rounding element - 2x2px dot positioned at center top
  ".framer-t2nY9 .framer-x1m4y5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }",

  // Background overlay - covers entire button
  ".framer-t2nY9 .framer-k7g8fm { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }",

  // Non-default states remove cursor pointer (disabled, loading, success, error)
  ".framer-t2nY9.framer-v-socwv0.framer-1e8gdhe, .framer-t2nY9.framer-v-48wq44.framer-1e8gdhe, .framer-t2nY9.framer-v-1njx8is.framer-1e8gdhe, .framer-t2nY9.framer-v-paabkz.framer-1e8gdhe { cursor: unset; }",

  // Loading state spinner container overflow hidden
  ".framer-t2nY9.framer-v-socwv0 .framer-11256y6 { overflow: hidden; }",

  // Include shared CSS styles
  ...css,

  // Border pseudo-element for button borders
  '.framer-t2nY9[data-border="true"]::after, .framer-t2nY9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'
];

// ========================================
// COMPONENT EXPORT AND CONFIGURATION
// ========================================

// Create final component with CSS
const FramerJrYx2qJUq = withCSS(Component, css2, "framer-t2nY9");
const stdin_default = FramerJrYx2qJUq;

// Component metadata
FramerJrYx2qJUq.displayName = "Form Button";
FramerJrYx2qJUq.defaultProps = {
  height: 54,
  width: 140
};

// ========================================
// PROPERTY CONTROLS AND FONTS
// ========================================

// Add property controls for Framer
addPropertyControls(FramerJrYx2qJUq, {
  variant: {
    options: ["ABDaItX2g", "vtYExkIsS", "RBe6hv0fs", "eU9XjXN9d", "vR3BHtiQo"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: ControlType.Enum
  }
});

// Add comprehensive font family support
addFonts(FramerJrYx2qJUq, [{
  explicitInter: true,
  fonts: [
    // Inter font family with multiple unicode ranges
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
    },
    // Open Sauce Sans for success and error states
    {
      family: "Open Sauce Sans",
      source: "builtIn",
      style: "normal",
      url: "https://framerusercontent.com/assets/VvQsG6v03iEur3JMvHc8uDrkGo.woff2",
      weight: "400"
    }
  ]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

export {
  stdin_default
};