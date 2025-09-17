// Clean rewrite of chunk-JNGIXIAD.js
// Theme Toggle Component with interactive states and smooth animations
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  useActiveVariantCallback,
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

// Variant cycle order for state transitions
const cycleOrder = ["TzgVzetvp", "IFTxxXlL5", "o3JNQH70g", "aexHCFV6M", "aP0q0e5A5", "Gwm03yRT0"];
const serializationHash = "framer-3xezE";

// Variant CSS class mappings
const variantClassNames = {
  aexHCFV6M: "framer-v-1jbzxed",  // Hover 2
  aP0q0e5A5: "framer-v-kvxn8m",   // Phone
  Gwm03yRT0: "framer-v-1kh6mqi",  // Click 2
  IFTxxXlL5: "framer-v-e0hg4x",   // Hover 1
  o3JNQH70g: "framer-v-gi2qwb",   // Click 1
  TzgVzetvp: "framer-v-1dv85bt"   // Desktop
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

// Spring transition for smooth state changes
const transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 400,
  type: "spring"
};

// Transform template for centered positioning
const transformTemplate1 = (_, t) => `translateY(-50%) ${t}`;

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
  "Click 1": "o3JNQH70g",
  "Click 2": "Gwm03yRT0",
  "Hover 1": "IFTxxXlL5",
  "Hover 2": "aexHCFV6M",
  Desktop: "TzgVzetvp",
  Phone: "aP0q0e5A5"
};

// Props processing function with defaults
const getProps = ({ height, id, width, ...props }) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "TzgVzetvp"
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

const Component = React.forwardRef(function ThemeToggle(props, ref) {
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
    className,
    layoutId,
    variant,
    ...restProps
  } = getProps(props);

  // Variant state management (no gesture configuration, using custom callbacks)
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
    defaultVariant: "TzgVzetvp",
    ref: refBinding,
    variant,
    variantClassNames
  });

  // Layout and styling setup
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  // Active variant callback hook for state transitions
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);

  // ========================================
  // INTERACTION HANDLERS
  // ========================================

  // Desktop initial hover - transitions to "Hover 1" state
  const onMouseEnter1lsoaic = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("IFTxxXlL5");
  });

  // From "Hover 1" - click to "Click 1" state
  const onTap1whdpi7 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("o3JNQH70g");
  });

  // From "Hover 1" - leave to Desktop state
  const onMouseLeave1ufj0yr = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("TzgVzetvp");
  });

  // From "Click 1" - click to "Hover 1" state
  const onTap7icqh = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("IFTxxXlL5");
  });

  // From "Click 1" - leave to "Hover 2" state
  const onMouseLeave101u1ud = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("aexHCFV6M");
  });

  // From "Hover 2" - hover to "Click 1" state
  const onMouseEnterdaku8x = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("o3JNQH70g");
  });

  // From "Hover 2" - click to "Click 2" state
  const onTap1r5daoc = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("Gwm03yRT0");
  });

  // From "Click 2" - click to Phone state
  const onTap1f3uzcf = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("aP0q0e5A5");
  });

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
          className: cx(scopingClassNames, "framer-1dv85bt", className, classNames),
          "data-framer-name": "Desktop",
          "data-highlight": true,
          layoutDependency,
          layoutId: "TzgVzetvp",
          onMouseEnter: onMouseEnter1lsoaic,
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            aexHCFV6M: {
              "data-framer-name": "Hover 2",
              onMouseEnter: onMouseEnterdaku8x
            },
            aP0q0e5A5: {
              "data-framer-name": "Phone",
              onMouseEnter: undefined,
              onTap: onTap1r5daoc
            },
            Gwm03yRT0: {
              "data-framer-name": "Click 2",
              onMouseEnter: undefined,
              onTap: onTap1f3uzcf
            },
            IFTxxXlL5: {
              "data-framer-name": "Hover 1",
              onMouseEnter: undefined,
              onMouseLeave: onMouseLeave1ufj0yr,
              onTap: onTap1whdpi7
            },
            o3JNQH70g: {
              "data-framer-name": "Click 1",
              onMouseEnter: undefined,
              onMouseLeave: onMouseLeave101u1ud,
              onTap: onTap7icqh
            }
          }, baseVariant, gestureVariant),
          children: [

            // ========================================
            // BACKGROUND FRAME
            // ========================================
            // Semi-transparent white background that defines the toggle shape
            _jsx(motion.div, {
              className: "framer-tfb725",
              "data-framer-name": "Frame",
              layoutDependency,
              layoutId: "paK_TAVDa",
              style: {
                backgroundColor: "var(--token-ca1e8363-88d0-40f1-abb8-1f9ce6252271, rgb(255, 255, 255))",
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                opacity: 0.16  // Semi-transparent background
              }
            }),

            // ========================================
            // TOGGLE DOT/INDICATOR
            // ========================================
            // The moveable dot that slides left/right to indicate state
            _jsx(motion.div, {
              className: "framer-9epx9i",
              "data-framer-name": "Dot",
              layoutDependency,
              layoutId: "B3kwrrJPs",
              style: {
                backgroundColor: "var(--token-ca1e8363-88d0-40f1-abb8-1f9ce6252271, rgb(255, 255, 255))",
                borderBottomLeftRadius: "50%",   // Perfect circle
                borderBottomRightRadius: "50%",
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%"
              },
              transformTemplate: transformTemplate1  // Center vertically
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

const css = [
  // CSS feature detection for aspect-ratio support
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",

  // Base component display settings
  ".framer-3xezE.framer-bhmbjz, .framer-3xezE .framer-bhmbjz { display: block; }",

  // Desktop state - small circular toggle (14x14px)
  ".framer-3xezE.framer-1dv85bt { height: 14px; overflow: hidden; position: relative; width: 14px; }",

  // Background frame - covers entire toggle area
  ".framer-3xezE .framer-tfb725 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",

  // Toggle dot - circular indicator positioned absolutely
  ".framer-3xezE .framer-9epx9i { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 13px); left: 0px; overflow: visible; position: absolute; top: 50%; width: 14px; }",

  // Interactive states - wider toggle for better interaction (32x18px)
  ".framer-3xezE.framer-v-e0hg4x.framer-1dv85bt, .framer-3xezE.framer-v-gi2qwb.framer-1dv85bt, .framer-3xezE.framer-v-kvxn8m.framer-1dv85bt, .framer-3xezE.framer-v-1kh6mqi.framer-1dv85bt { cursor: pointer; height: 18px; width: 32px; }",

  // Hover 1 and Phone states - dot positioned on left (with 2px offset)
  ".framer-3xezE.framer-v-e0hg4x .framer-9epx9i, .framer-3xezE.framer-v-kvxn8m .framer-9epx9i { height: var(--framer-aspect-ratio-supported, 14px); left: 2px; }",

  // Click 1 and Click 2 states - dot positioned on right (with 2px offset from right edge)
  ".framer-3xezE.framer-v-gi2qwb .framer-9epx9i, .framer-3xezE.framer-v-1kh6mqi .framer-9epx9i { height: var(--framer-aspect-ratio-supported, 14px); left: unset; right: 2px; }"
];

// ========================================
// COMPONENT EXPORT AND CONFIGURATION
// ========================================

// Create final component with CSS
const FramersSE8Ks7U7 = withCSS(Component, css, "framer-3xezE");
const stdin_default = FramersSE8Ks7U7;

// Component metadata
FramersSE8Ks7U7.displayName = "Theme Toggle";
FramersSE8Ks7U7.defaultProps = {
  height: 14,
  width: 14
};

// ========================================
// PROPERTY CONTROLS AND FONTS
// ========================================

// Add property controls for Framer
addPropertyControls(FramersSE8Ks7U7, {
  variant: {
    options: ["TzgVzetvp", "IFTxxXlL5", "o3JNQH70g", "aexHCFV6M", "aP0q0e5A5", "Gwm03yRT0"],
    optionTitles: ["Desktop", "Hover 1", "Click 1", "Hover 2", "Phone", "Click 2"],
    title: "Variant",
    type: ControlType.Enum
  }
});

// Add fonts (empty array as this component uses no text)
addFonts(FramersSE8Ks7U7, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});

export {
  stdin_default
};