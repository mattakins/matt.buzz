// @ts-nocheck
/* eslint-disable */
/* Simplified rewrite of chunk-EFMHCGGP.js using original Framer components */
/* This produces the exact same visual output but with clean, readable code */

import {
  stdin_default as stdin_default2
} from "./chunk-TEOP6HVR.js";
import {
  stdin_default
} from "./chunk-ERT25UFQ.js";

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  getPropertyControls,
  Image,
  ResolveLinks,
  RichText,
  SmartComponentScopedContainer,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useRouter,
  useVariantState,
  withCSS
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";

// Font loading
import { fontStore } from "unframer";
fontStore.loadFonts(["BI;Open Sauce Sans/Medium/v0", "BI;Open Sauce Sans/Bold/v0", "BI;Open Sauce Sans/Bold Italic/v0", "BI;Open Sauce Sans/Italic/v0"]);

// Font definitions
var fonts = [{
  explicitInter: true,
  fonts: [
    { family: "Open Sauce Sans", source: "builtIn", style: "normal", url: "https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2", weight: "500" },
    { family: "Open Sauce Sans", source: "builtIn", style: "normal", url: "https://framerusercontent.com/assets/14ekUNlj0vS79oF2mPCC9M9Rng.woff2", weight: "700" },
    { family: "Open Sauce Sans", source: "builtIn", style: "italic", url: "https://framerusercontent.com/assets/vgrhfAgkVL6LVXRQ7lSPnYpTQk.woff2", weight: "700" },
    { family: "Open Sauce Sans", source: "builtIn", style: "italic", url: "https://framerusercontent.com/assets/sIkfCMzh6wsgzRF7jDUKWTiHP8.woff2", weight: "400" }
  ]
}];

// CSS styles (same as original)
var css = [
  '.framer-NG3HC .framer-styles-preset-kavgul:not(.rich-text-wrapper), .framer-NG3HC .framer-styles-preset-kavgul.rich-text-wrapper h1 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 160px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  '@media (max-width: 1439px) and (min-width: 1025px) { .framer-NG3HC .framer-styles-preset-kavgul:not(.rich-text-wrapper), .framer-NG3HC .framer-styles-preset-kavgul.rich-text-wrapper h1 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 130px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  '@media (max-width: 1024px) and (min-width: 700px) { .framer-NG3HC .framer-styles-preset-kavgul:not(.rich-text-wrapper), .framer-NG3HC .framer-styles-preset-kavgul.rich-text-wrapper h1 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 100px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  '@media (max-width: 699px) and (min-width: 0px) { .framer-NG3HC .framer-styles-preset-kavgul:not(.rich-text-wrapper), .framer-NG3HC .framer-styles-preset-kavgul.rich-text-wrapper h1 { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-family-italic: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'
];

var className = "framer-NG3HC";

// Get fonts from child components
var HeaderBoxFonts = getFonts(stdin_default2);
var StackBoxFonts = getFonts(stdin_default);
var StackBoxControls = getPropertyControls(stdin_default);

// Component configuration
var cycleOrder = ["M6uxoYlpQ", "RzLCXAmZS", "F4efXvL8k", "YDZY7vpoB", "isCvpWXnf", "wUNVEAR_x", "OtWI6WMHi", "e0F0DVkM3", "Fh4EB66Mn"];
var serializationHash = "framer-jQlgi";
var variantClassNames = {
  e0F0DVkM3: "framer-v-1mdqkcj",
  F4efXvL8k: "framer-v-1iu01wn",
  Fh4EB66Mn: "framer-v-1pt9vom",
  isCvpWXnf: "framer-v-1usno1z",
  M6uxoYlpQ: "framer-v-1wwcqpk",
  OtWI6WMHi: "framer-v-1rsgm1u",
  RzLCXAmZS: "framer-v-svhztk",
  wUNVEAR_x: "framer-v-a2qjf6",
  YDZY7vpoB: "framer-v-1o49r8j"
};

// Helper functions
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}

var transition1 = { damping: 80, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var animation = { opacity: 1e-3, rotate: 0, scale: 1, skewX: 0, skewY: 4, x: 0, y: 40 };
var transition2 = { damping: 80, delay: 0.03, mass: 1, stiffness: 400, type: "spring" };
var textEffect = { effect: animation, repeat: false, startDelay: 0.4, tokenization: "character", transition: transition2, trigger: "onMount", type: "appear" };

var numberToPixelString = (value) => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return void 0;
  return Math.max(0, value) + "px";
};

var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};

var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};

var Variants = motion.create(React.Fragment);

// Human readable mappings
var humanReadableEnumMap = { Desktop: "ZPWoiskeZ", Phone: "rXCs9dEMd" };
var humanReadableVariantMap = {
  About: "YDZY7vpoB",
  Avatar: "Fh4EB66Mn",
  Contact: "wUNVEAR_x",
  Desktop: "M6uxoYlpQ",
  Phone: "F4efXvL8k",
  Portfolio: "isCvpWXnf",
  Resume: "OtWI6WMHi",
  Stack: "e0F0DVkM3",
  Tablet: "RzLCXAmZS"
};

// Props processing
var getProps = ({ avatar, boxPadding, height, id, name1, resumeLink, stack, width, wrapperPadding, ...props }) => {
  return {
    ...props,
    aRNirZwci: avatar ?? props.aRNirZwci ?? {
      pixelHeight: 2410,
      pixelWidth: 2410,
      src: "https://framerusercontent.com/images/HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?scale-down-to=2048&width=2410&height=2410",
      srcSet: "https://framerusercontent.com/images/HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?scale-down-to=512&width=2410&height=2410 512w,https://framerusercontent.com/images/HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?scale-down-to=1024&width=2410&height=2410 1024w,https://framerusercontent.com/images/HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?scale-down-to=2048&width=2410&height=2410 2048w,https://framerusercontent.com/images/HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?width=2410&height=2410 2410w"
    },
    igxWhXtvE: name1 ?? props.igxWhXtvE ?? "Name",
    lNFPUHIlO: boxPadding ?? props.lNFPUHIlO ?? "32px",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "M6uxoYlpQ",
    wEsuC2TJ_: wrapperPadding ?? props.wEsuC2TJ_ ?? "100px 0px 0px 0px",
    xkZqPjDGX: humanReadableEnumMap[stack] ?? stack ?? props.xkZqPjDGX ?? "ZPWoiskeZ",
    zS6lIL7vu: resumeLink ?? props.zS6lIL7vu
  };
};

var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};

// Main Component
var Component = React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    xkZqPjDGX,
    igxWhXtvE,
    aRNirZwci,
    zS6lIL7vu,
    wEsuC2TJ_,
    lNFPUHIlO,
    ...restProps
  } = getProps(props);

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
    defaultVariant: "M6uxoYlpQ",
    ref: refBinding,
    variant,
    variantClassNames
  });

  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);

  // Variant callbacks
  const toAbout = activeVariantCallback(async (...args) => {
    setVariant("YDZY7vpoB");
  });
  const toPortfolio = activeVariantCallback(async (...args) => {
    setVariant("isCvpWXnf");
  });
  const toContact = activeVariantCallback(async (...args) => {
    setVariant("wUNVEAR_x");
  });
  const onAvatarHover = activeVariantCallback(async (...args) => {
    setVariant("Fh4EB66Mn");
  });
  const toStack = activeVariantCallback(async (...args) => {
    setVariant("e0F0DVkM3");
  });
  const toResume = activeVariantCallback(async (...args) => {
    setVariant("OtWI6WMHi");
  });

  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  const isDisplayed = () => {
    if (baseVariant === "F4efXvL8k") return false;
    return true;
  };

  const router = useRouter();

  return _jsx(LayoutGroup, {
    id: layoutId ?? defaultLayoutId,
    children: _jsx(Variants, {
      animate: variants,
      initial: false,
      children: _jsx(Transition, {
        value: transition1,
        children: _jsxs(motion.header, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1wwcqpk", className2, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "M6uxoYlpQ",
          ref: refBinding,
          style: { ...style },
          ...addPropertyOverrides({
            e0F0DVkM3: { "data-framer-name": "Stack" },
            F4efXvL8k: { "data-framer-name": "Phone" },
            Fh4EB66Mn: { "data-framer-name": "Avatar" },
            isCvpWXnf: { "data-framer-name": "Portfolio" },
            OtWI6WMHi: { "data-framer-name": "Resume" },
            RzLCXAmZS: { "data-framer-name": "Tablet" },
            wUNVEAR_x: { "data-framer-name": "Contact" },
            YDZY7vpoB: { "data-framer-name": "About" }
          }, baseVariant, gestureVariant),
          children: [
            // Title Section
            isDisplayed() && _jsxs(motion.div, {
              className: "framer-1f9w7vf",
              "data-framer-name": "Title",
              layoutDependency,
              layoutId: "B1E1MfPIC",
              children: [
                // Main Name
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "Mo Eliwa"
                    })
                  }),
                  className: "framer-1z0v65l",
                  "data-framer-name": "Name",
                  effect: textEffect,
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "OtAICZJQk",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 0
                  },
                  text: igxWhXtvE,
                  transformTemplate: transformTemplate1,
                  variants: {
                    e0F0DVkM3: { skewY: 12 },
                    Fh4EB66Mn: { skewY: 12 },
                    isCvpWXnf: { skewY: 12 },
                    OtWI6WMHi: { skewY: 12 },
                    wUNVEAR_x: { skewY: 12 },
                    YDZY7vpoB: { skewY: 12 }
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Section Title - About
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "About"
                    })
                  }),
                  className: "framer-11rhyre",
                  "data-framer-name": "About",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "mdH9wZ4BH",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 12
                  },
                  transformTemplate: transformTemplate1,
                  variants: { YDZY7vpoB: { skewY: 0 } },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Section Title - Portfolio
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "Portfolio"
                    })
                  }),
                  className: "framer-1aj25sm",
                  "data-framer-name": "Portfolio",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "ETe_W8iB4",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 12
                  },
                  transformTemplate: transformTemplate1,
                  variants: { isCvpWXnf: { skewY: 0 } },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Section Title - Contact
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "Contact"
                    })
                  }),
                  className: "framer-1qqtqqg",
                  "data-framer-name": "Contact",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "DKhnkK3Rw",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 12
                  },
                  transformTemplate: transformTemplate1,
                  variants: { wUNVEAR_x: { skewY: 0 } },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Section Title - Stack
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "Stack"
                    })
                  }),
                  className: "framer-5zt3cw",
                  "data-framer-name": "Stack",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "q2ttBybTQ",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 12
                  },
                  transformTemplate: transformTemplate1,
                  variants: { e0F0DVkM3: { skewY: 0 } },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Section Title - Resume
                _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: _jsx(React.Fragment, {
                    children: _jsx(motion.h1, {
                      className: "framer-styles-preset-kavgul",
                      "data-styles-preset": "UsLKbKwka",
                      children: "Resume"
                    })
                  }),
                  className: "framer-9qowu9",
                  "data-framer-name": "Resume",
                  fonts: ["Inter"],
                  layoutDependency,
                  layoutId: "lvMN6TZXV",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    skewY: 12
                  },
                  transformTemplate: transformTemplate1,
                  variants: { OtWI6WMHi: { skewY: 0 } },
                  verticalAlignment: "top",
                  withExternalLayout: true
                }),

                // Avatar Section
                _jsxs(motion.div, {
                  className: "framer-112zoka",
                  "data-framer-name": "Avatar",
                  layoutDependency,
                  layoutId: "KIadJutDK",
                  style: { skewY: 12 },
                  transformTemplate: transformTemplate1,
                  variants: { Fh4EB66Mn: { skewY: 0 } },
                  children: [
                    _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: _jsx(React.Fragment, {
                        children: _jsx(motion.h1, {
                          className: "framer-styles-preset-kavgul",
                          "data-styles-preset": "UsLKbKwka",
                          children: "Hey"
                        })
                      }),
                      className: "framer-1xnug1f",
                      "data-framer-name": "Avatar",
                      fonts: ["Inter"],
                      layoutDependency,
                      layoutId: "goaDzdHfS",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        skewY: 12
                      },
                      variants: { Fh4EB66Mn: { skewY: 0 } },
                      verticalAlignment: "top",
                      withExternalLayout: true
                    }),

                    // Wave SVG
                    _jsx(SVG, {
                      className: "framer-ttv4k6",
                      "data-framer-name": "Wave",
                      layout: "position",
                      layoutDependency,
                      layoutId: "uh39noUEo",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 110"><g transform="translate(0 0.151)"><path d="M 0 109.547 L 0 0 L 110 0 L 110 109.547 Z" fill="transparent"></path><g transform="translate(0 0.128)"><path d="M 14.854 27.706 C 17.726 25.707 22.056 26.09 24.635 28.211 L 21.677 23.93 C 19.297 20.549 20.149 16.891 23.547 14.518 C 26.945 12.153 36.573 18.51 36.573 18.51 C 34.171 15.096 34.621 10.769 38.049 8.374 C 41.477 5.988 46.207 6.813 48.609 10.233 L 80.448 55.026 L 76.39 94.204 L 42.525 81.905 L 12.987 38.289 C 10.564 34.854 11.401 30.116 14.854 27.706 Z" fill="rgb(228,140,21)"></path><path d="M 8.239 52.625 C 8.239 52.625 4.78 47.604 9.825 44.162 C 14.863 40.721 18.319 45.739 18.319 45.739 L 34.364 69.042 C 34.917 68.123 35.522 67.216 36.197 66.321 L 13.928 33.984 C 13.928 33.984 10.473 28.966 15.514 25.524 C 20.553 22.083 24.009 27.1 24.009 27.1 L 44.955 57.521 C 45.734 56.888 46.531 56.252 47.353 55.628 L 23.071 20.357 C 23.071 20.357 19.615 15.339 24.657 11.898 C 29.695 8.456 33.151 13.474 33.151 13.474 L 57.433 48.739 C 58.326 48.194 59.209 47.723 60.095 47.224 L 37.398 14.262 C 37.398 14.262 33.942 9.244 38.981 5.803 C 44.02 2.361 47.475 7.379 47.475 7.379 L 71.474 42.233 L 75.122 47.534 C 60.003 57.862 58.564 77.291 67.202 89.838 C 68.928 92.348 71.449 90.629 71.449 90.629 C 61.082 75.569 64.247 58.647 79.369 48.322 L 74.911 26.102 C 74.911 26.102 73.246 20.248 79.122 18.586 C 85.001 16.928 86.669 22.783 86.669 22.783 L 91.818 38.01 C 93.859 44.047 96.031 50.063 98.907 55.753 C 107.025 71.82 102.176 91.788 86.868 102.247 C 70.169 113.649 47.341 109.41 35.889 92.783 Z" fill="rgb(252,194,27)"></path><path d="M 36.669 97.374 C 24.446 97.374 12.096 85.075 12.096 72.903 C 12.096 71.22 10.858 69.86 9.168 69.86 C 7.479 69.86 5.985 71.22 5.985 72.903 C 5.985 91.161 18.335 103.46 36.669 103.46 C 38.358 103.46 39.724 101.972 39.724 100.29 C 39.724 98.607 38.358 97.374 36.669 97.374 Z" fill="rgb(89,89,106)"></path><path d="M 21.389 103.334 C 12.222 103.334 6.111 97.247 6.111 88.119 C 6.111 86.436 4.745 85.076 3.056 85.076 C 1.366 85.076 0 86.436 0 88.119 C 0 100.29 9.167 109.42 21.389 109.42 C 23.079 109.42 24.444 108.059 24.444 106.377 C 24.444 104.694 23.079 103.334 21.389 103.334 Z M 73.333 5.958 C 71.647 5.958 70.278 7.321 70.278 9.001 C 70.278 10.681 71.647 12.044 73.333 12.044 C 85.556 12.044 97.778 22.966 97.778 36.388 C 97.778 38.068 99.147 39.431 100.833 39.431 C 102.52 39.431 103.889 38.068 103.889 36.388 C 103.889 19.609 91.667 5.958 73.333 5.958 Z" fill="rgb(89,89,106)"></path><path d="M 88.609 0 C 86.923 0 85.554 1.235 85.554 2.915 C 85.554 4.595 86.923 6.086 88.609 6.086 C 97.776 6.086 103.759 12.857 103.759 21.173 C 103.759 22.853 105.253 24.216 106.943 24.216 C 108.633 24.216 109.87 22.853 109.87 21.173 C 109.87 9.497 100.832 0 88.609 0 Z" fill="rgb(89,89,106)"></path></g></g></svg>',
                      svgContentId: 9800666338,
                      withExternalLayout: true
                    })
                  ]
                })
              ]
            }),

            // Content Grid Section
            _jsxs(motion.div, {
              className: "framer-1nw48ne",
              "data-framer-name": "Content",
              layoutDependency,
              layoutId: "YemOsfbEq",
              style: { "--412d4": numberToPixelString(wEsuC2TJ_) },
              children: [
                // About Tile
                _jsx(ResolveLinks, {
                  links: [
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "sK3Qycp36" }, implicitPathVariables: void 0 }
                  ],
                  children: (resolvedLinks) => _jsx(ComponentViewportProvider, {
                    width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px)`,
                    ...addPropertyOverrides({
                      F4efXvL8k: { width: `calc(${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px))` },
                      RzLCXAmZS: { width: `calc(max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 2 + 16px)` }
                    }, baseVariant, gestureVariant),
                    children: _jsx(SmartComponentScopedContainer, {
                      className: "framer-wgsb95-container",
                      layoutDependency,
                      layoutId: "HhnTq85i1-container",
                      nodeId: "HhnTq85i1",
                      rendersWithMotion: true,
                      scopeId: "I5JSnLPt8",
                      children: _jsx(stdin_default2, {
                        height: "100%",
                        id: "HhnTq85i1",
                        IjIe6W9ul: numberToPixelString(lNFPUHIlO),
                        Iy5zBGhef: false,
                        L_eB2gWj1: "About",
                        layoutId: "HhnTq85i1",
                        N1CQJWodn: 10,
                        style: { height: "100%", width: "100%" },
                        toX_51tQK: toAbout,
                        tULH8ktmi: resolvedLinks[0],
                        variant: "Nv38W5Tsu",
                        width: "100%",
                        wqT46RT44: "32px",
                        ...addPropertyOverrides({
                          e0F0DVkM3: { tULH8ktmi: resolvedLinks[7] },
                          F4efXvL8k: { IjIe6W9ul: "24px", N1CQJWodn: 4, toX_51tQK: void 0, tULH8ktmi: resolvedLinks[2], variant: "xdiOya1aU", wqT46RT44: "24px" },
                          Fh4EB66Mn: { tULH8ktmi: resolvedLinks[8] },
                          isCvpWXnf: { tULH8ktmi: resolvedLinks[4] },
                          OtWI6WMHi: { tULH8ktmi: resolvedLinks[6] },
                          RzLCXAmZS: { toX_51tQK: void 0, tULH8ktmi: resolvedLinks[1] },
                          wUNVEAR_x: { tULH8ktmi: resolvedLinks[5] },
                          YDZY7vpoB: { tULH8ktmi: resolvedLinks[3] }
                        }, baseVariant, gestureVariant)
                      })
                    })
                  })
                }),

                // Portfolio Tile
                _jsx(ResolveLinks, {
                  links: [
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 },
                    { href: { webPageId: "APn30jGVo" }, implicitPathVariables: void 0 }
                  ],
                  children: (resolvedLinks1) => _jsx(ComponentViewportProvider, {
                    width: `calc(max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 3 + 32px)`,
                    ...addPropertyOverrides({
                      F4efXvL8k: { width: `calc(${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px))` },
                      RzLCXAmZS: { width: `calc(max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 2 + 16px)` }
                    }, baseVariant, gestureVariant),
                    children: _jsx(SmartComponentScopedContainer, {
                      className: "framer-1y7do4z-container",
                      layoutDependency,
                      layoutId: "L72d87fab-container",
                      nodeId: "L72d87fab",
                      rendersWithMotion: true,
                      scopeId: "I5JSnLPt8",
                      children: _jsx(stdin_default2, {
                        height: "100%",
                        id: "L72d87fab",
                        IjIe6W9ul: numberToPixelString(lNFPUHIlO),
                        Iy5zBGhef: false,
                        L_eB2gWj1: "Portfolio",
                        layoutId: "L72d87fab",
                        N1CQJWodn: 10,
                        style: { height: "100%", width: "100%" },
                        toX_51tQK: toPortfolio,
                        tULH8ktmi: resolvedLinks1[0],
                        variant: "Nv38W5Tsu",
                        width: "100%",
                        wqT46RT44: "32px",
                        ...addPropertyOverrides({
                          e0F0DVkM3: { tULH8ktmi: resolvedLinks1[7] },
                          F4efXvL8k: { IjIe6W9ul: "24px", N1CQJWodn: 4, toX_51tQK: void 0, tULH8ktmi: resolvedLinks1[2], variant: "xdiOya1aU", wqT46RT44: "24px" },
                          Fh4EB66Mn: { tULH8ktmi: resolvedLinks1[8] },
                          isCvpWXnf: { tULH8ktmi: resolvedLinks1[4] },
                          OtWI6WMHi: { tULH8ktmi: resolvedLinks1[6] },
                          RzLCXAmZS: { toX_51tQK: void 0, tULH8ktmi: resolvedLinks1[1] },
                          wUNVEAR_x: { tULH8ktmi: resolvedLinks1[5] },
                          YDZY7vpoB: { tULH8ktmi: resolvedLinks1[3] }
                        }, baseVariant, gestureVariant)
                      })
                    })
                  })
                }),

                // Contact and Avatar Section
                _jsxs(motion.div, {
                  className: "framer-hg0gic",
                  layoutDependency,
                  layoutId: "iSnBNnfIT",
                  children: [
                    // Contact Tile
                    _jsx(ResolveLinks, {
                      links: [
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 },
                        { href: { webPageId: "auQTnh1XA" }, implicitPathVariables: void 0 }
                      ],
                      children: (resolvedLinks2) => _jsx(ComponentViewportProvider, {
                        width: `calc(max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 3 - 0px) / 3, 50px) * 2 + 16px)`,
                        ...addPropertyOverrides({
                          F4efXvL8k: { width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 12px) / 2, 50px)` },
                          RzLCXAmZS: { width: `calc(max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 4 + 16px) / 3, 50px) * 2 + 16px)` }
                        }, baseVariant, gestureVariant),
                        children: _jsx(SmartComponentScopedContainer, {
                          className: "framer-1t6v1ro-container",
                          layoutDependency,
                          layoutId: "o2Vt6tDSd-container",
                          nodeId: "o2Vt6tDSd",
                          rendersWithMotion: true,
                          scopeId: "I5JSnLPt8",
                          children: _jsx(stdin_default2, {
                            height: "100%",
                            id: "o2Vt6tDSd",
                            IjIe6W9ul: numberToPixelString(lNFPUHIlO),
                            Iy5zBGhef: false,
                            L_eB2gWj1: "Contact",
                            layoutId: "o2Vt6tDSd",
                            N1CQJWodn: 10,
                            style: { height: "100%", width: "100%" },
                            toX_51tQK: toContact,
                            tULH8ktmi: resolvedLinks2[0],
                            variant: "Nv38W5Tsu",
                            width: "100%",
                            wqT46RT44: "32px",
                            ...addPropertyOverrides({
                              e0F0DVkM3: { tULH8ktmi: resolvedLinks2[7] },
                              F4efXvL8k: { IjIe6W9ul: "24px", N1CQJWodn: 4, toX_51tQK: void 0, tULH8ktmi: resolvedLinks2[2], variant: "xdiOya1aU", wqT46RT44: "24px" },
                              Fh4EB66Mn: { tULH8ktmi: resolvedLinks2[8] },
                              isCvpWXnf: { tULH8ktmi: resolvedLinks2[4] },
                              OtWI6WMHi: { tULH8ktmi: resolvedLinks2[6] },
                              RzLCXAmZS: { toX_51tQK: void 0, tULH8ktmi: resolvedLinks2[1] },
                              wUNVEAR_x: { tULH8ktmi: resolvedLinks2[5] },
                              YDZY7vpoB: { tULH8ktmi: resolvedLinks2[3] }
                            }, baseVariant, gestureVariant)
                          })
                        })
                      })
                    }),

                    // Avatar Tile
                    _jsxs(motion.div, {
                      className: "framer-vs50g9",
                      "data-framer-name": "Avatar",
                      "data-highlight": true,
                      layoutDependency,
                      layoutId: "qSx8Bdx3d",
                      onMouseEnter: onAvatarHover,
                      style: {
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                        boxShadow: "inset 0px 1px 0px 1px var(--token-4ad2450b-089e-49a2-b079-884bae7e4c6d, rgba(0, 0, 0, 0.02))"
                      },
                      variants: {
                        F4efXvL8k: {
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24
                        }
                      },
                      ...addPropertyOverrides({
                        F4efXvL8k: { "data-highlight": void 0, onMouseEnter: void 0 },
                        RzLCXAmZS: { "data-highlight": void 0, onMouseEnter: void 0 }
                      }, baseVariant, gestureVariant),
                      children: [
                        _jsx(Image, {
                          background: {
                            alt: "Portrait of man looking to the left and smiling with a dark background",
                            fit: "fill",
                            pixelHeight: 2410,
                            pixelWidth: 2410,
                            sizes: `calc(max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 3 - 0px) / 3, 50px) - 2px)`,
                            ...toResponsiveImage(aRNirZwci),
                            ...{ positionX: "center", positionY: "center" }
                          },
                          className: "framer-1y7rt6b",
                          layoutDependency,
                          layoutId: "xhL8nqIvM",
                          style: {
                            borderBottomLeftRadius: 32,
                            borderBottomRightRadius: 32,
                            borderTopLeftRadius: 32,
                            borderTopRightRadius: 32
                          },
                          variants: {
                            F4efXvL8k: {
                              borderBottomLeftRadius: 24,
                              borderBottomRightRadius: 24,
                              borderTopLeftRadius: 24,
                              borderTopRightRadius: 24
                            }
                          },
                          ...addPropertyOverrides({
                            F4efXvL8k: {
                              background: {
                                alt: "Portrait of man looking to the left and smiling with a dark background",
                                fit: "fill",
                                pixelHeight: 2410,
                                pixelWidth: 2410,
                                sizes: `calc(max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 12px) / 2, 50px) - 2px)`,
                                ...toResponsiveImage(aRNirZwci),
                                ...{ positionX: "center", positionY: "center" }
                              }
                            },
                            RzLCXAmZS: {
                              background: {
                                alt: "Portrait of man looking to the left and smiling with a dark background",
                                fit: "fill",
                                pixelHeight: 2410,
                                pixelWidth: 2410,
                                sizes: `calc(max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 4 + 16px) / 3, 50px) - 2px)`,
                                ...toResponsiveImage(aRNirZwci),
                                ...{ positionX: "center", positionY: "center" }
                              }
                            }
                          }, baseVariant, gestureVariant)
                        }),

                        _jsx(motion.div, {
                          className: "framer-jjmphp",
                          "data-framer-name": "BG",
                          layoutDependency,
                          layoutId: "jDHGhpJgS",
                          style: {
                            backdropFilter: "blur(0px)",
                            backgroundColor: "var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, rgb(0, 0, 0))",
                            opacity: 0.08,
                            WebkitBackdropFilter: "blur(0px)"
                          }
                        })
                      ]
                    })
                  ]
                }),

                // Stack and Resume Section
                _jsxs(motion.div, {
                  className: "framer-1fuuf7m",
                  layoutDependency,
                  layoutId: "korCyI4_1",
                  children: [
                    // Stack Tile
                    _jsx(ComponentViewportProvider, {
                      width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px)`,
                      ...addPropertyOverrides({
                        F4efXvL8k: { width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 12px) / 2, 1px)` },
                        RzLCXAmZS: { height: 200, width: `max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 4 + 32px) / 2, 50px)` }
                      }, baseVariant, gestureVariant),
                      children: _jsx(SmartComponentScopedContainer, {
                        className: "framer-naoazj-container",
                        layoutDependency,
                        layoutId: "L4ADaoPNm-container",
                        nodeId: "L4ADaoPNm",
                        rendersWithMotion: true,
                        scopeId: "I5JSnLPt8",
                        children: _jsx(stdin_default, {
                          e3BXUMhP9: 10,
                          GNL9XDX44: true,
                          HCvBAOfgz: true,
                          height: "100%",
                          id: "L4ADaoPNm",
                          IfcXivz35: true,
                          IjIe6W9ul: numberToPixelString(lNFPUHIlO),
                          IzgXthHfg: true,
                          jnVl5jRN0: true,
                          Kg8AZh6zz: true,
                          layoutId: "L4ADaoPNm",
                          m0ttWi2wq: true,
                          pj6CC0KSt: false,
                          rNpVbZiPK: false,
                          style: { height: "100%", width: "100%" },
                          toX_51tQK: toStack,
                          tXueoQY4q: false,
                          V77FCzSwL: true,
                          variant: xkZqPjDGX,
                          Vhi_z14Kp: "32px",
                          width: "100%",
                          ...addPropertyOverrides({
                            F4efXvL8k: { e3BXUMhP9: 4, IjIe6W9ul: "16px", toX_51tQK: void 0, variant: "rXCs9dEMd", Vhi_z14Kp: "24px" },
                            RzLCXAmZS: { toX_51tQK: void 0 }
                          }, baseVariant, gestureVariant)
                        })
                      })
                    }),

                    // Resume Tile
                    _jsx(ComponentViewportProvider, {
                      width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px)`,
                      ...addPropertyOverrides({
                        F4efXvL8k: { width: `max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 12px) / 2, 1px)` },
                        RzLCXAmZS: { height: 200, width: `max((max(((${componentViewport?.width || "100vw"} - (${wEsuC2TJ_ * 2}px + 32px)) - 48px) / 4, 50px) * 4 + 32px) / 2, 50px)` }
                      }, baseVariant, gestureVariant),
                      children: _jsx(SmartComponentScopedContainer, {
                        className: "framer-qtc6gu-container",
                        layoutDependency,
                        layoutId: "aAJUcn73f-container",
                        nodeId: "aAJUcn73f",
                        rendersWithMotion: true,
                        scopeId: "I5JSnLPt8",
                        children: _jsx(stdin_default2, {
                          height: "100%",
                          id: "aAJUcn73f",
                          IjIe6W9ul: numberToPixelString(lNFPUHIlO),
                          Iy5zBGhef: true,
                          L_eB2gWj1: "Resume",
                          layoutId: "aAJUcn73f",
                          N1CQJWodn: 10,
                          style: { height: "100%", width: "100%" },
                          toX_51tQK: toResume,
                          tULH8ktmi: zS6lIL7vu,
                          variant: "Nv38W5Tsu",
                          width: "100%",
                          wqT46RT44: "32px",
                          ...addPropertyOverrides({
                            F4efXvL8k: { N1CQJWodn: 4, toX_51tQK: void 0, variant: "xdiOya1aU", wqT46RT44: "24px" },
                            RzLCXAmZS: { toX_51tQK: void 0 }
                          }, baseVariant, gestureVariant)
                        })
                      })
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    })
  });
});

// CSS compilation
var css2 = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-jQlgi.framer-gknh2g, .framer-jQlgi .framer-gknh2g { display: block; }",
  ".framer-jQlgi.framer-1wwcqpk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 821px; justify-content: flex-start; overflow: hidden; padding: 0px 16px 16px 16px; position: relative; width: 1440px; }",
  ".framer-jQlgi .framer-1f9w7vf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; left: 16px; min-height: 160px; overflow: hidden; padding: 0px; position: absolute; right: 16px; top: 0px; z-index: 1; }",
  ".framer-jQlgi .framer-1z0v65l { flex: none; height: auto; left: 50%; position: absolute; top: 0px; white-space: pre; width: auto; z-index: 1; }",
  ".framer-jQlgi .framer-11rhyre, .framer-jQlgi .framer-1aj25sm, .framer-jQlgi .framer-1qqtqqg, .framer-jQlgi .framer-5zt3cw, .framer-jQlgi .framer-9qowu9 { flex: none; height: auto; left: 50%; position: absolute; top: 240px; white-space: pre; width: auto; z-index: 1; }",
  ".framer-jQlgi .framer-112zoka { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 240px; width: min-content; z-index: 1; }",
  ".framer-jQlgi .framer-1xnug1f { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
  ".framer-jQlgi .framer-ttv4k6 { flex: none; height: 110px; position: relative; width: 110px; }",
  ".framer-jQlgi .framer-1nw48ne { display: grid; flex: 1 0 0px; gap: 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 1px; justify-content: center; overflow: hidden; padding: var(--412d4); position: relative; width: 100%; z-index: 2; }",
  ".framer-jQlgi .framer-wgsb95-container, .framer-jQlgi .framer-qtc6gu-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
  ".framer-jQlgi .framer-1y7do4z-container { align-self: start; flex: none; grid-column: span 3; height: 100%; justify-self: start; position: relative; width: 100%; }",
  ".framer-jQlgi .framer-hg0gic { align-self: start; display: grid; flex: none; gap: 16px; grid-auto-rows: minmax(0, 1fr); grid-column: span 3; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 100%; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
  ".framer-jQlgi .framer-1t6v1ro-container { align-self: start; flex: none; grid-column: span 2; height: 100%; justify-self: start; position: relative; width: 100%; }",
  ".framer-jQlgi .framer-vs50g9 { -webkit-user-select: none; align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; user-select: none; width: 100%; will-change: var(--framer-will-change-override, transform); }",
  ".framer-jQlgi .framer-1y7rt6b { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
  ".framer-jQlgi .framer-jjmphp { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
  ".framer-jQlgi .framer-1fuuf7m { align-self: start; display: grid; flex: none; gap: 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
  ".framer-jQlgi .framer-naoazj-container { align-self: start; cursor: grab; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
  ".framer-jQlgi.framer-v-svhztk.framer-1wwcqpk { width: 700px; }",
  ".framer-jQlgi.framer-v-svhztk .framer-wgsb95-container, .framer-jQlgi.framer-v-svhztk .framer-1y7do4z-container { grid-column: span 2; }",
  ".framer-jQlgi.framer-v-svhztk .framer-hg0gic { grid-column: 1 / -1; }",
  ".framer-jQlgi.framer-v-svhztk .framer-1fuuf7m { grid-auto-rows: 200px; grid-column: 1 / -1; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, 200px); }",
  ".framer-jQlgi.framer-v-1iu01wn.framer-1wwcqpk { height: 800px; min-height: calc(var(--framer-viewport-height, 100vh) * 1); padding: 0px 16px 0px 16px; width: 390px; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-1nw48ne { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; justify-content: flex-start; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-wgsb95-container, .framer-jQlgi.framer-v-1iu01wn .framer-1y7do4z-container { align-self: unset; flex: 1 0 0px; height: 1px; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-hg0gic { align-self: unset; flex: 1 0 0px; gap: 12px; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: 1px; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-1t6v1ro-container { grid-column: unset; z-index: 1; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-1fuuf7m { align-content: center; align-items: center; align-self: unset; display: flex; flex: 0.8 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 1px; }",
  ".framer-jQlgi.framer-v-1iu01wn .framer-naoazj-container, .framer-jQlgi.framer-v-1iu01wn .framer-qtc6gu-container { align-self: unset; flex: 1 0 0px; width: 1px; }",
  ".framer-jQlgi.framer-v-1o49r8j .framer-1f9w7vf { justify-content: flex-end; }",
  ".framer-jQlgi.framer-v-1o49r8j .framer-1z0v65l, .framer-jQlgi.framer-v-1usno1z .framer-1z0v65l, .framer-jQlgi.framer-v-a2qjf6 .framer-1z0v65l, .framer-jQlgi.framer-v-1rsgm1u .framer-1z0v65l, .framer-jQlgi.framer-v-1mdqkcj .framer-1z0v65l { left: 50%; top: -240px; }",
  ".framer-jQlgi.framer-v-1o49r8j .framer-11rhyre, .framer-jQlgi.framer-v-a2qjf6 .framer-1qqtqqg, .framer-jQlgi.framer-v-1rsgm1u .framer-9qowu9, .framer-jQlgi.framer-v-1mdqkcj .framer-5zt3cw, .framer-jQlgi.framer-v-1pt9vom .framer-112zoka { top: 0px; }",
  ".framer-jQlgi.framer-v-1usno1z .framer-1aj25sm { left: 50%; top: 0px; }",
  ".framer-jQlgi.framer-v-1mdqkcj .framer-9qowu9 { top: 220px; }",
  ".framer-jQlgi.framer-v-1pt9vom .framer-1z0v65l { top: -240px; }",
  ...css
];

// Final component export
var FramerI5JSnLPt8 = withCSS(Component, css2, "framer-jQlgi");
var stdin_default3 = FramerI5JSnLPt8;
FramerI5JSnLPt8.displayName = "Header";
FramerI5JSnLPt8.defaultProps = { height: 821, width: 1440 };

// Property controls
addPropertyControls(FramerI5JSnLPt8, {
  variant: {
    options: ["M6uxoYlpQ", "RzLCXAmZS", "F4efXvL8k", "YDZY7vpoB", "isCvpWXnf", "wUNVEAR_x", "OtWI6WMHi", "e0F0DVkM3", "Fh4EB66Mn"],
    optionTitles: ["Desktop", "Tablet", "Phone", "About", "Portfolio", "Contact", "Resume", "Stack", "Avatar"],
    title: "Variant",
    type: ControlType.Enum
  },
  xkZqPjDGX: StackBoxControls?.["variant"] && {
    ...StackBoxControls["variant"],
    defaultValue: "ZPWoiskeZ",
    description: void 0,
    hidden: void 0,
    title: "Stack"
  },
  igxWhXtvE: {
    defaultValue: "Name",
    description: "Put you name here",
    displayTextArea: false,
    title: "Name",
    type: ControlType.String
  },
  aRNirZwci: {
    __defaultAssetReference: "data:framer/asset-reference,HDYCtFPD9ZtkKLNfkY0C8fUbdOA.jpeg?originalFilename=IMG_3450.jpeg&width=2410&height=2410",
    description: "Upload your avatar here",
    title: "Avatar",
    type: ControlType.ResponsiveImage
  },
  zS6lIL7vu: {
    description: "Enter your resume link here",
    title: "Resume Link",
    type: ControlType.Link
  },
  wEsuC2TJ_: {
    defaultValue: "100px 0px 0px 0px",
    title: "Wrapper Padding",
    type: ControlType.Padding
  },
  lNFPUHIlO: {
    defaultValue: "32px",
    title: "Box Padding",
    type: ControlType.Padding
  }
});

// Font loading
addFonts(FramerI5JSnLPt8, [
  {
    explicitInter: true,
    fonts: [
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" },
      { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }
    ]
  },
  ...HeaderBoxFonts,
  ...StackBoxFonts,
  ...getFontsFromSharedStyle(fonts)
], { supportsExplicitInterCodegen: true });

// Export
export {
  fonts,
  css,
  className,
  stdin_default3 as stdin_default
};