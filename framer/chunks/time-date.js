// Clean rewrite of chunk-MGC5HSAG.js
// Time & Date Component + Shared Typography Styles
// Preserves exact functionality with live time updates and formatting options

import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import {
  addPropertyControls,
  ControlType,
  RenderTarget,
  useLocaleCode
} from "unframer";
import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

// ========================================
// FONT STACK CONFIGURATION
// ========================================

// Modern font stack with fallbacks for cross-platform compatibility
const fontStack = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

// ========================================
// TIME/DATE FORMATTING FUNCTION
// ========================================

// Formats time or date based on provided options using Intl.DateTimeFormat
function formatTimeOrDate(outputType, options, timeFormat, monthFormat, localCode) {
  const {
    showYear,
    showMonth,
    showWeekday,
    showMinutes,
    showSeconds
  } = options;

  const date = new Date();

  // Special case: if only year is shown, don't show day
  const onlyYearIsShown = !showWeekday && !showMonth && showYear;

  switch (outputType) {
    case "date":
      return new Intl.DateTimeFormat(localCode, {
        weekday: showWeekday ? "long" : undefined,
        day: onlyYearIsShown ? undefined : "numeric",
        month: showMonth ? monthFormat : undefined,
        year: showYear ? "numeric" : undefined
      }).format(date);

    case "time":
      return new Intl.DateTimeFormat(localCode, {
        hour: "numeric",
        minute: showMinutes ? "numeric" : undefined,
        second: showSeconds && showMinutes ? "numeric" : undefined,
        hour12: timeFormat === "12h"
      }).format(date);

    default:
      return new Intl.DateTimeFormat(localCode).format(date);
  }
}

// ========================================
// DEFAULT PROPS CONFIGURATION
// ========================================

const defaultProps = {
  height: 20,
  width: 140,
  outputType: "time",
  color: "#999",
  timeFormat: "24h",
  showYear: true,
  showMonth: true,
  showWeekday: true,
  showMinutes: true,
  showSeconds: true,
  monthFormat: "long",
  alignment: "center"
};

// ========================================
// MAIN TIME COMPONENT
// ========================================

function Time(props) {
  // Merge provided props with defaults
  const mergedProps = { ...defaultProps, ...props };

  const {
    outputType,        // "time" or "date"
    timeFormat,        // "12h" or "24h"
    showYear,          // Boolean: show year in date
    showMonth,         // Boolean: show month in date
    showWeekday,       // Boolean: show weekday in date
    showMinutes,       // Boolean: show minutes in time
    showSeconds,       // Boolean: show seconds in time
    monthFormat,       // "short", "long", or "numeric"
    color,             // Text color
    font,              // Font overrides
    tabularFont        // Boolean: use tabular numbers
  } = mergedProps;

  // Get current locale for internationalization
  const localCode = useLocaleCode();

  // ========================================
  // TEXT CONTENT GENERATION
  // ========================================

  // Memoized function to generate formatted text content
  const getTextContent = useCallback(() => {
    return formatTimeOrDate(
      outputType,
      {
        showYear,
        showMonth,
        showWeekday,
        showMinutes,
        showSeconds
      },
      timeFormat,
      monthFormat,
      localCode
    );
  }, [
    localCode,
    monthFormat,
    outputType,
    showMinutes,
    showMonth,
    showSeconds,
    showWeekday,
    showYear,
    timeFormat
  ]);

  // ========================================
  // LIVE UPDATE FUNCTIONALITY
  // ========================================

  const timeoutRef = useRef();

  // Callback ref that sets up continuous time updates
  const updateCountdown = useCallback((node) => {
    if (node === null) {
      // Clean up timeout when component unmounts
      clearTimeout(timeoutRef.current);
      return;
    }

    let previousContent;

    // Recursive function that updates every second
    const tick = () => {
      const currentDate = new Date();

      // Calculate milliseconds until next second for precise timing
      const nextSecond = new Date().setSeconds(currentDate.getSeconds() + 1, 0) - +currentDate;

      // Schedule next update
      timeoutRef.current = setTimeout(tick, nextSecond);

      // Get new text content
      const textContent = getTextContent();

      // Only update DOM if content has changed (optimization)
      if (previousContent !== textContent) {
        node.textContent = textContent;
        previousContent = textContent;
      }
    };

    // Start the update cycle
    tick();
  }, [getTextContent]);

  // ========================================
  // HYDRATION AND CANVAS HANDLING
  // ========================================

  const [visible, setIsVisible] = useState(false);
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;

  // Handle hydration and canvas mode
  useEffect(() => {
    // Use startTransition to prevent hydration mismatches
    startTransition(() => setIsVisible(true));

    // Don't start live updates in canvas mode
    if (isCanvas) return;
  }, [isCanvas]);

  // ========================================
  // COMPONENT RENDER
  // ========================================

  return _jsx("p", {
    suppressHydrationWarning: true,  // Prevent hydration warnings for time differences
    style: {
      margin: 0,
      padding: 0,
      color,
      fontFamily: fontStack,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1,
      visibility: visible ? "visible" : "hidden",  // Prevent flash during hydration
      ...font,  // Allow font overrides
      fontVariantNumeric: tabularFont ? "tabular-nums" : "normal",  // Monospaced numbers
      whiteSpace: "nowrap"  // Prevent text wrapping
    },
    ref: isCanvas ? undefined : updateCountdown,  // Only attach updater in live mode
    children: getTextContent()  // Initial content
  });
}

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Component metadata
Time.displayName = "Time & Date";

// Property controls for Framer interface
addPropertyControls(Time, {
  // Output type selection
  outputType: {
    title: "Type",
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ["date", "time"],
    optionTitles: ["Date", "Time"],
    defaultValue: defaultProps.outputType
  },

  // Date-specific controls
  showWeekday: {
    title: "Day",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: defaultProps.showWeekday,
    hidden: (props) => props.outputType !== "date"
  },
  showMonth: {
    title: "Month",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: defaultProps.showMonth,
    hidden: (props) => props.outputType !== "date"
  },
  monthFormat: {
    title: "Format",
    type: ControlType.Enum,
    options: ["short", "long", "numeric"],
    optionTitles: ["Short", "Long", "Numeric"],
    defaultValue: defaultProps.monthFormat,
    hidden: (props) => props.outputType !== "date" || !props.showMonth
  },
  showYear: {
    title: "Year",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: defaultProps.showYear,
    hidden: (props) => props.outputType !== "date"
  },

  // Time-specific controls
  timeFormat: {
    title: "Format",
    type: ControlType.Enum,
    options: ["12h", "24h"],
    optionTitles: ["12h", "24h"],
    displaySegmentedControl: true,
    defaultValue: defaultProps.timeFormat,
    hidden: (props) => props.outputType !== "time"
  },
  showMinutes: {
    title: "Minutes",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: defaultProps.showMinutes,
    hidden: (props) => props.outputType !== "time"
  },
  showSeconds: {
    title: "Seconds",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: defaultProps.showSeconds,
    hidden: (props) => props.outputType !== "time" || !props.showMinutes
  },

  // Styling controls
  font: {
    type: ControlType.Font,
    controls: "extended"
  },
  tabularFont: {
    title: "Tabular",
    type: ControlType.Boolean,
    defaultValue: true
  },
  color: {
    type: ControlType.Color,
    defaultValue: defaultProps.color
  }
});

// ========================================
// SHARED TYPOGRAPHY STYLES
// ========================================

import { fontStore } from "unframer";

// Load Open Sauce Sans Medium for shared styles
fontStore.loadFonts(["BI;Open Sauce Sans/Medium/v0"]);

// Font definition for 14px text
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

// CSS for 14px text preset with Open Sauce Sans
const css = [
  '.framer-pytU4 .framer-styles-preset-1heszc:not(.rich-text-wrapper), .framer-pytU4 .framer-styles-preset-1heszc.rich-text-wrapper p { --framer-font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-5fde730a-8086-4528-a317-d71b3bf4efde, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'
];

// CSS class name for 14px text preset
const className = "framer-pytU4";

// ========================================
// EXPORTS
// ========================================

export {
  Time,      // Live time/date component with formatting options
  fonts,     // Open Sauce Sans Medium 500 font definition
  css,       // CSS for 14px text preset
  className  // CSS class name "framer-pytU4"
};