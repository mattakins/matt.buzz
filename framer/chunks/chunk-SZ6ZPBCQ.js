// Clean rewrite of chunk-SZ6ZPBCQ.js
// Text Reveal Component with scroll-based character-by-character animation
// Creates a progressive text reveal effect based on scroll position

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "unframer";
import { motion, useScroll, useTransform } from "unframer";
import { useRef } from "react";

// ========================================
// CHARACTER ANIMATION COMPONENT
// ========================================

// Individual character component with opacity animation
// Each character animates from 0.2 to 1.0 opacity based on scroll progress
const EachCharacter = ({ char, start, end, progress }) => {
  // Transform scroll progress to opacity values
  // start/end define the scroll range where this character animates
  const opacityProgress = useTransform(progress, [start, end], [0.2, 1]);

  return _jsx(motion.span, {
    style: { opacity: opacityProgress },
    children: char
  });
};

// ========================================
// WORD ANIMATION COMPONENT
// ========================================

// Word component that breaks text into individual characters
// Each character gets its own animation timing within the word's range
const EachWord = ({ word, progress, starting, ending }) => {
  const characters = word.split("");
  const wordLength = word.length;

  // Calculate animation timing for each character
  const amount = ending - starting;  // Total scroll range for this word
  const step = amount / wordLength;  // Scroll range per character

  return _jsxs(motion.span, {
    style: { whiteSpace: "pre" },
    children: [
      // Map each character to its own EachCharacter component
      characters.map((char, idx) => {
        const charStart = starting + step * idx;        // Start of character animation
        const charEnd = starting + step * (idx + 1);    // End of character animation

        return _jsx(EachCharacter, {
          char,
          start: charStart,
          end: charEnd,
          progress
        }, idx);
      }),
      "\xA0"  // Non-breaking space after each word
    ]
  });
};

// ========================================
// MAIN TEXT REVEAL COMPONENT
// ========================================

// Main component that orchestrates the text reveal animation
// Splits text into lines and words, assigns scroll-based timing to each
function Text_Reveal(props) {
  const { text, font, textColor } = props;

  // Parse text structure
  const lines = text.split("\n");           // Split into lines for layout
  const words = text.split(/\s+/);          // Split into words for timing
  const totalWords = words.length;

  // Scroll tracking setup
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.31", "end 0.3"]  // Animation triggers when element enters/exits viewport
  });

  // Track current word index for sequential timing
  let wordIndex = 0;

  // ========================================
  // COMPONENT RENDER
  // ========================================

  return _jsx("div", {
    ref,
    style: {
      ...font,                    // Apply custom font styles
      display: "flex",
      flexDirection: "column",
      color: textColor,           // Apply text color
      whiteSpace: "pre-wrap",     // Preserve whitespace and line breaks
      lineHeight: 1.2
    },
    children: lines.map((line, lineIndex) => {
      const lineWords = line.split(" ");

      return _jsx("div", {
        style: {
          display: "flex",
          flexWrap: "wrap"  // Allow words to wrap to next line
        },
        children: lineWords.map((word, idx) => {
          // Calculate scroll timing for this word
          const safeTotal = totalWords + 1;           // Prevent division by zero
          const starting = wordIndex / safeTotal;     // Start point (0-1)
          const ending = (wordIndex + 1) / safeTotal; // End point (0-1)

          wordIndex++;  // Increment for next word

          return _jsx(EachWord, {
            word,
            progress: scrollYProgress,
            starting,
            ending
          }, `${lineIndex}-${idx}`);
        })
      }, lineIndex);
    })
  });
}

// ========================================
// COMPONENT CONFIGURATION
// ========================================

// Property controls for Framer interface
addPropertyControls(Text_Reveal, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Text\nNew Paragraph",
    displayTextArea: true
  },
  font: {
    type: "font",
    controls: "extended"
  },
  textColor: {
    type: ControlType.Color
  }
});

// ========================================
// EXPORTS
// ========================================

export {
  Text_Reveal  // Scroll-based text reveal animation component
};
