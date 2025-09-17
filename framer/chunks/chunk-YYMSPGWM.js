// Clean rewrite of chunk-YYMSPGWM.js
// Link Component with skew hover effect and responsive design
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// Import shared styles from NB4Q2TMV chunk
import {
  className,
  css,
  fonts
} from "./chunk-NB4Q2TMV.js";

import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  Link,
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

// Gesture configuration - both variants support hover
const enabledGestures = {
  gZZq7oJv9: { hover: true },  // Phone
  JpxTAmqKP: { hover: true }   // Desktop
};

// Variant cycle order for responsive design
const cycleOrder = ["JpxTAmqKP", "gZZq7oJv9"];
const serializationHash = "framer-WN3my";

// Variant CSS class mappings
const variantClassNames = {
  gZZq7oJv9: "framer-v-bxccak",  // Phone
  JpxTAmqKP: "framer-v-g0vkp2"   // Desktop
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

// Spring transition for smooth skew animation
const transition1 = {
  damping: 80,
  delay: 0,
  mass: 1,
  stiffness: 400,
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
  Desktop: "JpxTAmqKP",
  Phone: "gZZq7oJv9"
};

// Props processing function with defaults
const getProps = ({ height, id, label, link, newTab, width, ...props }) => {
  return {
    ...props,
    gaudSAYyV: link ?? props.gaudSAYyV,                           // Link URL
    gnxB9JgXH: label ?? props.gnxB9JgXH ?? "hello@adam.com",     // Link text
    Ke1ihOPDv: newTab ?? props.Ke1ihOPDv,                        // Open in new tab
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "JpxTAmqKP"
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

const Component = React.forwardRef(function SkewLink(props, ref) {
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
    gnxB9JgXH,    // Label text (e.g., "hello@adam.com")
    gaudSAYyV,    // Link URL
    Ke1ihOPDv,    // New tab boolean
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
    defaultVariant: "JpxTAmqKP",
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
  // COMPONENT RENDER
  // ========================================

  return _jsx(LayoutGroup, {
    id: layoutId ?? defaultLayoutId,
    children: _jsx(Variants, {
      animate: variants,
      initial: false,
      children: _jsx(Transition, {
        value: transition1,
        children: _jsx(Link, {
          href: gaudSAYyV,
          motionChild: true,
          nodeId: "JpxTAmqKP",
          openInNewTab: Ke1ihOPDv,
          scopeId: "Dd3ylhXi7",
          smoothScroll: true,
          children: _jsx(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(scopingClassNames, "framer-g0vkp2", className2, classNames)} framer-zrjort`,
            "data-framer-name": "Desktop",
            layoutDependency,
            layoutId: "JpxTAmqKP",
            ref: refBinding,
            style: {
              ...style
            },
            ...addPropertyOverrides({
              "gZZq7oJv9-hover": { "data-framer-name": undefined },
              "JpxTAmqKP-hover": { "data-framer-name": undefined },
              gZZq7oJv9: { "data-framer-name": "Phone" }
            }, baseVariant, gestureVariant),
            children: _jsxs(motion.div, {
              className: "framer-1l4i4ql",
              "data-framer-name": "Text",
              layoutDependency,
              layoutId: "ef8P68jtD",
              children: [

                // ========================================
                // FIRST TEXT LAYER (DEFAULT STATE)
                // ========================================
                // This text is visible by default (skewY: 0)
                // On hover, it skews to 12 degrees
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      className: "framer-styles-preset-wgkidr",
                      "data-styles-preset": "NLZz2_xo1",
                      children: "hello@adam.com"
                    })
                  }),
                  className: "framer-1bweqmc",
                  "data-framer-name": "Text",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "kHTl9YERS",
                  style: {
                    skewY: 0  // Default: no skew
                  },
                  text: gnxB9JgXH,
                  variants: {
                    "gZZq7oJv9-hover": { skewY: 12 },  // Phone hover: skew to 12°
                    "JpxTAmqKP-hover": { skewY: 12 }   // Desktop hover: skew to 12°
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // ========================================
                // SECOND TEXT LAYER (HOVER STATE)
                // ========================================
                // This text starts skewed (skewY: 12)
                // On hover, it straightens to 0 degrees
                // Creates the "rolling" effect when combined with first layer
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.p, {
                      className: "framer-styles-preset-wgkidr",
                      "data-styles-preset": "NLZz2_xo1",
                      children: "hello@adam.com"
                    })
                  }),
                  className: "framer-7e2nip",
                  "data-framer-name": "Text",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "rmJUbBmxC",
                  style: {
                    skewY: 12  // Default: skewed
                  },
                  text: gnxB9JgXH,
                  variants: {
                    "gZZq7oJv9-hover": { skewY: 0 },   // Phone hover: straighten to 0°
                    "JpxTAmqKP-hover": { skewY: 0 }    // Desktop hover: straighten to 0°
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true
                })
              ]
            })
          })
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
  ".framer-WN3my.framer-zrjort, .framer-WN3my .framer-zrjort { display: block; }",

  // Main link container - horizontal flex with centered content
  ".framer-WN3my.framer-g0vkp2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",

  // Text container - vertical stack for layered text effect
  ".framer-WN3my .framer-1l4i4ql { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 29px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",

  // Individual text layers
  ".framer-WN3my .framer-1bweqmc, .framer-WN3my .framer-7e2nip { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",

  // Phone variant adjustments - smaller spacing and height
  ".framer-WN3my.framer-v-bxccak .framer-1l4i4ql { gap: 14px; height: 22px; }",

  // Hover state - changes justify-content to flex-end for both variants
  ".framer-WN3my.framer-v-g0vkp2.hover .framer-1l4i4ql, .framer-WN3my.framer-v-bxccak.hover .framer-1l4i4ql { justify-content: flex-end; }",

  // Include shared CSS styles
  ...css
];

// ========================================
// COMPONENT EXPORT AND CONFIGURATION
// ========================================

// Create final component with CSS
const FramerDd3ylhXi7 = withCSS(Component, css2, "framer-WN3my");
const stdin_default = FramerDd3ylhXi7;

// Component metadata
FramerDd3ylhXi7.displayName = "Link";
FramerDd3ylhXi7.defaultProps = {
  height: 29,
  width: 198.5
};

// ========================================
// PROPERTY CONTROLS AND FONTS
// ========================================

// Add property controls for Framer
addPropertyControls(FramerDd3ylhXi7, {
  variant: {
    options: ["JpxTAmqKP", "gZZq7oJv9"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: ControlType.Enum
  },
  gnxB9JgXH: {
    defaultValue: "hello@adam.com",
    description: "Write the label of the link",
    displayTextArea: false,
    title: "Label",
    type: ControlType.String
  },
  gaudSAYyV: {
    description: "Put the URL of the link",
    title: "Link",
    type: ControlType.Link
  },
  Ke1ihOPDv: {
    defaultValue: false,
    description: "Shall this link open in a new tab?",
    title: "New Tab",
    type: ControlType.Boolean
  }
});

// Add comprehensive Inter font family support
addFonts(FramerDd3ylhXi7, [{
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
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

export {
  stdin_default
};