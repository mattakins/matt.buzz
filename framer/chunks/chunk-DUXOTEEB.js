// Clean rewrite of chunk-DUXOTEEB.js
// Ticker Component - creates infinite scrolling/looping content
// Preserves exact Framer motion components and functionality

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  Children,
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  cloneElement
} from "react";
import { addPropertyControls, ControlType, RenderTarget } from "unframer";
import {
  useReducedMotion,
  LayoutGroup,
  useInView,
  useMotionValue,
  useTransform,
  motion,
  frame
} from "unframer";
import { resize } from "@motionone/dom";

// ========================================
// CONSTANTS AND CONFIGURATION
// ========================================

// Maximum number of duplicated items to prevent performance issues
const MAX_DUPLICATED_ITEMS = 100;

// Transform functions for different scroll directions
const directionTransformers = {
  left: (offset) => `translateX(-${offset}px)`,
  right: (offset) => `translateX(${offset}px)`,
  top: (offset) => `translateY(-${offset}px)`,
  bottom: (offset) => `translateY(${offset}px)`
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Clamp a number between min and max values
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// Check if a value is a valid number
const isValidNumber = (value) => typeof value === "number" && !isNaN(value);

// ========================================
// STYLING CONSTANTS
// ========================================

// Base container styles for flex layout
const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  placeItems: "center",
  margin: 0,
  padding: 0,
  listStyleType: "none",
  textIndent: "none"
};

// Placeholder styles when no content is provided
const placeholderStyles = {
  display: "flex",
  width: "100%",
  height: "100%",
  placeContent: "center",
  placeItems: "center",
  flexDirection: "column",
  color: "#96F",
  background: "rgba(136, 85, 255, 0.1)",
  fontSize: 11,
  overflow: "hidden",
  padding: "20px 20px 30px 20px"
};

// Placeholder content styles
const emojiStyles = { fontSize: 32, marginBottom: 10 };
const titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" };
const subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: "center" };

// ========================================
// MAIN TICKER COMPONENT
// ========================================

function Ticker(props) {
  // ========================================
  // PROPS DESTRUCTURING WITH DEFAULTS
  // ========================================

  let {
    slots = [],                    // Array of child components to scroll
    gap,                          // Gap between items
    padding,                      // Uniform padding
    paddingPerSide,              // Whether to use individual padding values
    paddingTop,                  // Top padding (when paddingPerSide is true)
    paddingRight,                // Right padding
    paddingBottom,               // Bottom padding
    paddingLeft,                 // Left padding
    speed,                       // Animation speed
    hoverFactor,                 // Speed factor on hover
    direction,                   // Scroll direction (left, right, top, bottom)
    alignment,                   // Content alignment
    sizingOptions,               // Width/height sizing options
    fadeOptions,                 // Fade/mask options
    style                        // Additional styles
  } = props;

  // Extract fade and sizing options
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } = fadeOptions;
  const { widthType, heightType } = sizingOptions;

  // ========================================
  // SETUP AND CONFIGURATION
  // ========================================

  // Calculate padding value based on per-side or uniform setting
  const paddingValue = paddingPerSide
    ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    : `${padding}px`;

  // Determine current render target (canvas vs. live)
  const currentTarget = RenderTarget.current();
  const isCanvas = currentTarget === RenderTarget.canvas || currentTarget === RenderTarget.export;

  // Filter out falsy slots and count children
  const filteredSlots = slots.filter(Boolean);
  const numChildren = Children.count(filteredSlots);
  const hasChildren = numChildren > 0;

  // Handle legacy boolean direction prop
  if (direction === true) {
    direction = "left";
  }

  // Determine if scrolling horizontally or vertically
  const isHorizontal = direction === "left" || direction === "right";

  // ========================================
  // ANIMATION AND TRANSFORM SETUP
  // ========================================

  // Motion values and transforms for animation
  const offset = useMotionValue(0);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer);

  // ========================================
  // REFS AND STATE MANAGEMENT
  // ========================================

  // Ref for the parent container
  const parentRef = useRef(null);

  // Refs for measuring first and last children
  const childrenRef = useMemo(() => {
    return [{ current: null }, { current: null }];
  }, []);

  // State for parent and children measurements
  const [size, setSize] = useState({ parent: null, children: null });

  // ========================================
  // DUPLICATION LOGIC
  // ========================================

  let clonedChildren = null;
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;

  // Canvas mode: simple duplication for preview
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren) : 0;
    opacity = 1;
  }

  // Live mode: calculate duplication based on container size
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS);
    opacity = 1;
  }

  // ========================================
  // MEASUREMENT FUNCTION
  // ========================================

  // Measure parent and children dimensions
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      // Get parent container size
      const parentLength = isHorizontal
        ? parentRef.current.offsetWidth
        : parentRef.current.offsetHeight;

      // Get start position from first child
      const start = childrenRef[0].current
        ? (isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop)
        : 0;

      // Get end position from last child
      const end = childrenRef[1].current
        ? (isHorizontal
            ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth
            : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight)
        : 0;

      // Calculate total children length including gap
      const childrenLength = end - start + gap;

      setSize({ parent: parentLength, children: childrenLength });
    }
  }, []);

  // ========================================
  // CHILDREN RENDERING
  // ========================================

  // Styles for children (content visibility optimization in canvas)
  const childrenStyles = isCanvas ? { contentVisibility: "auto" } : {};

  if (hasChildren) {
    // Set up resize observer for live mode
    if (!isCanvas) {
      let initialResize = useRef(true);

      useLayoutEffect(() => {
        // Initial measurement
        frame.read(measure, false, true);

        // Set up resize observer
        return resize(parentRef.current, ({ contentSize }) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            frame.read(measure, false, true);
          }
          initialResize.current = false;
        });
      }, []);
    }

    // Create cloned children with measurement refs
    clonedChildren = Children.map(filteredSlots, (child, index) => {
      let ref;

      // Assign refs to first and last children for measurement
      if (index === 0) {
        ref = childrenRef[0];
      }
      if (index === filteredSlots.length - 1) {
        ref = childrenRef[1];
      }

      // Determine child size based on sizing options
      const size2 = {
        width: widthType ? child.props?.width : "100%",
        height: heightType ? child.props?.height : "100%"
      };

      return _jsx(LayoutGroup, {
        inherit: "id",
        children: _jsx("li", {
          ref,
          style: size2,
          children: cloneElement(child, {
            style: {
              ...child.props?.style,
              ...size2,
              flexShrink: 0,
              ...childrenStyles
            },
            layoutId: child.props.layoutId
              ? child.props.layoutId + "-original-" + index
              : undefined
          }, child.props?.children)
        })
      });
    });
  }

  // ========================================
  // ANIMATION SETUP
  // ========================================

  // Check if component is in view (always true for canvas)
  const isInView = isCanvas ? true : useInView(parentRef);

  // Create duplicated children for seamless looping (live mode only)
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = dupedChildren.concat(
        Children.map(filteredSlots, (child, childIndex) => {
          const size2 = {
            width: widthType ? child.props?.width : "100%",
            height: heightType ? child.props?.height : "100%",
            willChange: !isInView ? undefined : "transform"
          };

          return _jsx(LayoutGroup, {
            inherit: "id",
            children: _jsx("li", {
              style: size2,
              "aria-hidden": true,
              children: cloneElement(child, {
                key: i + " " + childIndex,
                style: {
                  ...child.props?.style,
                  width: widthType ? child.props?.width : "100%",
                  height: heightType ? child.props?.height : "100%",
                  flexShrink: 0,
                  ...childrenStyles
                },
                layoutId: child.props.layoutId
                  ? child.props.layoutId + "-dupe-" + i
                  : undefined
              }, child.props?.children)
            }, i + "li" + childIndex)
          }, i + "lg" + childIndex);
        })
      );
    }
  }

  // ========================================
  // ANIMATION CALCULATION AND CONTROL
  // ========================================

  // Calculate animation distance
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children);

  // Animation refs and state
  const initialTime = useRef(null);
  const prevTime = useRef(null);
  const xOrY = useRef(0);
  const isHover = useRef(false);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null);
  const animationRef = useRef(null);

  // Set up Web Animations API for smooth performance (live mode only)
  if (!isCanvas) {
    useEffect(() => {
      // Skip animation if reduced motion is preferred or no valid values
      if (isReducedMotion || !animateToValue || !speed) {
        return;
      }

      // Create animation using Web Animations API
      animationRef.current = listRef.current.animate(
        {
          transform: [transformer(0), transformer(animateToValue)]
        },
        {
          duration: Math.abs(animateToValue) / speed * 1000,
          iterations: Infinity,
          easing: "linear"
        }
      );

      // Cleanup function
      return () => animationRef.current.cancel();
    }, [hoverFactor, animateToValue, speed]);

    // Play/pause animation based on visibility and document state
    const playOrPause = useCallback(() => {
      if (!animationRef.current) return;

      const hidden = document.hidden;

      if (isInView && !hidden && animationRef.current.playState === "paused") {
        animationRef.current.play();
      } else if ((!isInView || hidden) && animationRef.current.playState === "running") {
        animationRef.current.pause();
      }
    }, [isInView]);

    // Update animation state when dependencies change
    useEffect(() => {
      playOrPause();
    }, [isInView, hoverFactor, animateToValue, speed]);

    // Listen for document visibility changes
    useEffect(() => {
      document.addEventListener("visibilitychange", playOrPause);
      return () => {
        document.removeEventListener("visibilitychange", playOrPause);
      };
    }, [playOrPause]);
  }

  // ========================================
  // FADE MASK CALCULATION
  // ========================================

  // Calculate fade mask for smooth edges
  const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;

  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;

  // ========================================
  // RENDER LOGIC
  // ========================================

  // Show placeholder when no children are provided
  if (!hasChildren) {
    return _jsxs("section", {
      style: placeholderStyles,
      children: [
        _jsx("div", {
          style: emojiStyles,
          children: "✨"
        }),
        _jsx("p", {
          style: titleStyles,
          children: "Connect to Content"
        }),
        _jsx("p", {
          style: subtitleStyles,
          children: "Add layers or components to infinitely loop on your page."
        })
      ]
    });
  }

  // Main ticker component render
  return _jsx("section", {
    style: {
      ...containerStyle,
      opacity,
      WebkitMaskImage: fadeContent ? fadeMask : undefined,
      maskImage: fadeContent ? fadeMask : undefined,
      overflow: overflow ? "visible" : "hidden",
      padding: paddingValue
    },
    ref: parentRef,
    children: _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap,
        // Positioning for different directions
        top: direction === "bottom" && isValidNumber(animateToValue) ? -animateToValue : undefined,
        left: direction === "right" && isValidNumber(animateToValue) ? -animateToValue : undefined,
        placeItems: alignment,
        position: "relative",
        flexDirection: isHorizontal ? "row" : "column",
        ...style,
        willChange: isCanvas || !isInView ? "auto" : "transform",
        transform: transformer(0)
      },
      // Mouse events for hover speed control
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          animationRef.current.playbackRate = hoverFactor;
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          animationRef.current.playbackRate = 1;
        }
      },
      children: [clonedChildren, dupedChildren]
    })
  });
}

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Default props
Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: {
    widthType: true,
    heightType: true
  },
  fadeOptions: {
    fadeContent: true,
    overflow: false,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0
  },
  direction: true
};

// Property controls for Framer interface
addPropertyControls(Ticker, {
  // Children slots
  slots: {
    type: ControlType.Array,
    title: "Children",
    control: {
      type: ControlType.ComponentInstance
    }
  },

  // Animation speed
  speed: {
    type: ControlType.Number,
    title: "Speed",
    min: 0,
    max: 1000,
    defaultValue: 100,
    unit: "%",
    displayStepper: true,
    step: 5
  },

  // Scroll direction
  direction: {
    type: ControlType.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: true
  },

  // Content alignment
  alignment: {
    type: ControlType.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"]
      }
    },
    defaultValue: "center",
    displaySegmentedControl: true
  },

  // Gap between items
  gap: {
    type: ControlType.Number,
    title: "Gap"
  },

  // Padding configuration
  padding: {
    title: "Padding",
    type: ControlType.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0
  },

  // Sizing options
  sizingOptions: {
    type: ControlType.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: ControlType.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: true
      },
      heightType: {
        type: ControlType.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: true
      }
    }
  },

  // Fade/clipping options
  fadeOptions: {
    type: ControlType.Object,
    title: "Clipping",
    controls: {
      fadeContent: {
        type: ControlType.Boolean,
        title: "Fade",
        defaultValue: true
      },
      overflow: {
        type: ControlType.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: false,
        hidden(props) {
          return props.fadeContent === true;
        }
      },
      fadeWidth: {
        type: ControlType.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(props) {
          return props.fadeContent === false;
        }
      },
      fadeInset: {
        type: ControlType.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(props) {
          return props.fadeContent === false;
        }
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props) {
          return props.fadeContent === false;
        }
      }
    }
  },

  // Hover speed factor
  hoverFactor: {
    type: ControlType.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: "Slows down the speed while you are hovering."
  }
});

export {
  Ticker
};