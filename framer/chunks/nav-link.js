// Clean rewrite of chunk-VT7XBIEH.js
// Navigation Link Component with responsive design and hover states
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  Link,
  RichText,
  SVG,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import { useRef } from "react";

// ========================================
// FONT LOADING CONFIGURATION
// ========================================

import { fontStore } from "unframer";
fontStore.loadFonts(["BI;Open Sauce Sans/Medium/v0"]);

const fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Open Sauce Sans",
    source: "builtIn",
    style: "normal",
    url: "https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2",
    weight: "500"
  }]
}];

// ========================================
// CSS STYLES AND RESPONSIVE TYPOGRAPHY
// ========================================

const css = [
  // Base desktop styles (80px font)
  '.framer-A0XR1 .framer-styles-preset-1gas3yb:not(.rich-text-wrapper), .framer-A0XR1 .framer-styles-preset-1gas3yb.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }',

  // Large desktop breakpoint (1025px - 1439px) - maintains 80px
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-A0XR1 .framer-styles-preset-1gas3yb:not(.rich-text-wrapper), .framer-A0XR1 .framer-styles-preset-1gas3yb.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }',

  // Tablet breakpoint (700px - 1024px) - reduces to 56px
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-A0XR1 .framer-styles-preset-1gas3yb:not(.rich-text-wrapper), .framer-A0XR1 .framer-styles-preset-1gas3yb.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }',

  // Mobile breakpoint (0px - 699px) - reduces to 40px
  '@media (max-width: 699px) and (min-width: 0px) { .framer-A0XR1 .framer-styles-preset-1gas3yb:not(.rich-text-wrapper), .framer-A0XR1 .framer-styles-preset-1gas3yb.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'
];

const className = "framer-A0XR1";

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Gesture configuration - all variants support hover
const enabledGestures = {
  eknfygkCZ: { hover: true },  // Desktop
  irrzlh0xs: { hover: true },  // Phone
  PCFXTmKxA: { hover: true }   // Tablet
};

const cycleOrder = ["eknfygkCZ", "PCFXTmKxA", "irrzlh0xs"];
const serializationHash = "framer-HFCnK";

// Variant CSS class mappings
const variantClassNames = {
  eknfygkCZ: "framer-v-veubu9",  // Desktop
  irrzlh0xs: "framer-v-1qe6shh", // Phone
  PCFXTmKxA: "framer-v-wozw2f"   // Tablet
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

// Pixel value conversion utility
const numberToPixelString = (value) => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return undefined;
  return Math.max(0, value) + "px";
};

// Spring transition configuration
const transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 400,
  type: "spring"
};

// ========================================
// VISIBILITY LOGIC FUNCTIONS
// ========================================

// Convert string values to boolean for "prev" button visibility
const convertFromString = (value, activeLocale) => {
  switch (typeof value === "string" ? value.toLowerCase() : value) {
    case "prev":
      return true;
    default:
      return false;
  }
};

// Convert string values to boolean for "next" button visibility
const convertFromString1 = (value, activeLocale) => {
  switch (typeof value === "string" ? value.toLowerCase() : value) {
    case "next":
      return true;
    default:
      return false;
  }
};

// Boolean conversion utility
const toBoolean = (value) => {
  return Boolean(value);
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
  Desktop: "eknfygkCZ",
  Phone: "irrzlh0xs",
  Tablet: "PCFXTmKxA"
};

// Props processing function with defaults
const getProps = ({ gap, height, id, label, link, width, ...props }) => {
  return {
    ...props,
    Br5XOxMIq: link ?? props.Br5XOxMIq,           // Link URL
    cnBh8EvXv: gap ?? props.cnBh8EvXv ?? 16,       // Gap between elements (default 16px)
    ScpacHm8i: label ?? props.ScpacHm8i ?? "Next", // Button label (default "Next")
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "eknfygkCZ"
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

const Component = React.forwardRef(function NavigationLink(props, ref) {
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
    ScpacHm8i,   // Label text
    Br5XOxMIq,   // Link URL
    cnBh8EvXv,   // Gap spacing
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
    defaultVariant: "eknfygkCZ",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });

  // Layout and styling setup
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  // Visibility calculations for left and right arrows
  const visible = toBoolean(convertFromString(ScpacHm8i, activeLocale));   // Left arrow (prev)
  const visible1 = toBoolean(convertFromString1(ScpacHm8i, activeLocale)); // Right arrow (next)

  // ========================================
  // SVG ARROW DEFINITIONS BY VARIANT
  // ========================================

  // Desktop arrow (60x54px)
  const desktopArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 54"><path d="M 0 24.923 L 51.761 24.923 L 29.577 3.115 L 32.366 0 L 59.831 27 L 32.366 54 L 29.577 50.885 L 51.761 29.077 L 0 29.077 Z" fill="var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255))"></path></svg>';

  // Phone arrow (26x22px) - smaller for mobile
  const phoneLeftArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 22"><path d="M 0 10.154 L 22.43 10.154 L 12.817 1.269 L 14.025 0 L 25.927 11 L 14.025 22 L 12.817 20.731 L 22.43 11.846 L 0 11.846 Z" fill="var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255))"></path></svg>';
  const phoneRightArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 22"><path d="M 0 10.154 L 22.43 10.154 L 12.817 1.269 L 14.025 0 L 25.927 11 L 14.025 22 L 12.817 20.731 L 22.43 11.846 L 0 11.846 Z" fill="var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255))"></path></svg>';

  // Tablet arrow (49x44px) - medium size
  const tabletArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 44"><path d="M 0 20.308 L 42.271 20.308 L 24.155 2.538 L 26.432 0 L 48.862 22 L 26.432 44 L 24.155 41.462 L 42.271 23.692 L 0 23.692 Z" fill="var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(255, 255, 255))"></path></svg>';

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
          href: Br5XOxMIq,
          motionChild: true,
          nodeId: "eknfygkCZ",
          openInNewTab: false,
          scopeId: "OPaVJNBS2",
          smoothScroll: true,
          children: _jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(scopingClassNames, "framer-veubu9", className2, classNames)} framer-5xeg11`,
            "data-framer-name": "Desktop",
            layoutDependency,
            layoutId: "eknfygkCZ",
            ref: refBinding,
            style: {
              "--170hfr5": numberToPixelString(cnBh8EvXv), // Gap CSS variable
              ...style
            },
            ...addPropertyOverrides({
              "eknfygkCZ-hover": { "data-framer-name": undefined },
              "irrzlh0xs-hover": { "data-framer-name": undefined },
              "PCFXTmKxA-hover": { "data-framer-name": undefined },
              irrzlh0xs: { "data-framer-name": "Phone" },
              PCFXTmKxA: { "data-framer-name": "Tablet" }
            }, baseVariant, gestureVariant),
            children: [

              // ========================================
              // LEFT ARROW (PREV BUTTON)
              // ========================================
              visible && _jsx(motion.div, {
                className: "framer-ior3b0",
                "data-framer-name": "Left",
                layoutDependency,
                layoutId: "vULE_M8Xq",
                style: {
                  opacity: 1,
                  rotate: 180 // Flipped to point left
                },
                variants: {
                  "eknfygkCZ-hover": { opacity: 0.5 },
                  "irrzlh0xs-hover": { opacity: 0.5 },
                  "PCFXTmKxA-hover": { opacity: 0.5 }
                },
                children: _jsx(SVG, {
                  className: "framer-ob0aj",
                  "data-framer-name": "Arrow-right",
                  layout: "position",
                  layoutDependency,
                  layoutId: "UBX71nrMp",
                  opacity: 1,
                  svg: desktopArrowSVG,
                  svgContentId: 9197820163,
                  withExternalLayout: true,
                  ...addPropertyOverrides({
                    irrzlh0xs: {
                      svg: phoneLeftArrowSVG,
                      svgContentId: 10130963604
                    },
                    PCFXTmKxA: {
                      svg: tabletArrowSVG,
                      svgContentId: 12734438386
                    }
                  }, baseVariant, gestureVariant)
                })
              }),

              // ========================================
              // CENTER TEXT LABEL
              // ========================================
              _jsx(RichText, {
                __fromCanvasComponent: true,
                children: _jsx(React.Fragment, {
                  children: _jsx(motion.p, {
                    className: "framer-styles-preset-1gas3yb",
                    "data-styles-preset": "G59h8taEB",
                    children: "Next"
                  })
                }),
                className: "framer-ny5kjx",
                "data-framer-name": "Text",
                fonts: ["Inter"],
                layoutDependency,
                layoutId: "HmpXIfqDa",
                style: {
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: 1
                },
                text: ScpacHm8i,
                variants: {
                  "eknfygkCZ-hover": { opacity: 0.5 },
                  "irrzlh0xs-hover": { opacity: 0.5 },
                  "PCFXTmKxA-hover": { opacity: 0.5 }
                },
                verticalAlignment: "top",
                withExternalLayout: true
              }),

              // ========================================
              // RIGHT ARROW (NEXT BUTTON)
              // ========================================
              visible1 && _jsx(motion.div, {
                className: "framer-s1t77",
                "data-framer-name": "Right",
                layoutDependency,
                layoutId: "S1AMxMv0a",
                style: {
                  opacity: 1
                },
                variants: {
                  "eknfygkCZ-hover": { opacity: 0.5 },
                  "irrzlh0xs-hover": { opacity: 0.5 },
                  "PCFXTmKxA-hover": { opacity: 0.5 }
                },
                children: _jsx(SVG, {
                  className: "framer-1ab5rx5",
                  "data-framer-name": "Arrow-right",
                  layout: "position",
                  layoutDependency,
                  layoutId: "QmXyUeL3D",
                  opacity: 1,
                  svg: desktopArrowSVG,
                  svgContentId: 9197820163,
                  withExternalLayout: true,
                  ...addPropertyOverrides({
                    irrzlh0xs: {
                      svg: phoneRightArrowSVG,
                      svgContentId: 9057708006
                    },
                    PCFXTmKxA: {
                      svg: tabletArrowSVG,
                      svgContentId: 12734438386
                    }
                  }, baseVariant, gestureVariant)
                })
              })
            ]
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
  ".framer-HFCnK.framer-5xeg11, .framer-HFCnK .framer-5xeg11 { display: block; }",

  // Main container styles - horizontal flex layout with gap
  ".framer-HFCnK.framer-veubu9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: var(--170hfr5); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",

  // Arrow container styles - square containers for desktop (72x72px)
  ".framer-HFCnK .framer-ior3b0, .framer-HFCnK .framer-s1t77 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 72px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 72px; }",

  // Arrow SVG styles - 60x54px for desktop
  ".framer-HFCnK .framer-ob0aj, .framer-HFCnK .framer-1ab5rx5 { flex: none; height: 54px; position: relative; width: 60px; }",

  // Text label styles
  ".framer-HFCnK .framer-ny5kjx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",

  // Tablet variant styles - smaller arrows (64x64px containers, 49x44px arrows)
  ".framer-HFCnK.framer-v-wozw2f .framer-ior3b0, .framer-HFCnK.framer-v-wozw2f .framer-s1t77 { height: 64px; width: 64px; }",
  ".framer-HFCnK.framer-v-wozw2f .framer-ob0aj, .framer-HFCnK.framer-v-wozw2f .framer-1ab5rx5 { height: 44px; width: 49px; }",

  // Phone variant styles - smallest arrows (48x48px containers, 26x22px arrows)
  ".framer-HFCnK.framer-v-1qe6shh .framer-ior3b0, .framer-HFCnK.framer-v-1qe6shh .framer-s1t77 { height: 48px; width: 48px; }",
  ".framer-HFCnK.framer-v-1qe6shh .framer-ob0aj, .framer-HFCnK.framer-v-1qe6shh .framer-1ab5rx5 { height: 22px; width: 26px; }",

  // Include typography styles
  ...css
];

// ========================================
// COMPONENT EXPORT AND CONFIGURATION
// ========================================

// Create final component with CSS
const FramerOPaVJNBS2 = withCSS(Component, css2, "framer-HFCnK");
const stdin_default = FramerOPaVJNBS2;

// Component metadata
FramerOPaVJNBS2.displayName = "Link (Portfolio)";
FramerOPaVJNBS2.defaultProps = {
  height: 96,
  width: 297.5
};

// ========================================
// PROPERTY CONTROLS AND FONTS
// ========================================

// Add property controls for Framer
addPropertyControls(FramerOPaVJNBS2, {
  variant: {
    options: ["eknfygkCZ", "PCFXTmKxA", "irrzlh0xs"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: ControlType.Enum
  },
  ScpacHm8i: {
    defaultValue: "Next",
    displayTextArea: false,
    title: "Label",
    type: ControlType.String
  },
  Br5XOxMIq: {
    title: "Link",
    type: ControlType.Link
  },
  cnBh8EvXv: {
    defaultValue: 16,
    min: 0,
    title: "Gap",
    type: ControlType.Number
  }
});

// Add Inter font family with all unicode ranges
addFonts(FramerOPaVJNBS2, [{
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
      url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutbY.woff2",
      weight: "400"
    }
  ]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

export {
  stdin_default
};