// Clean rewrite of chunk-EFMHCGGP.js
// This produces the exact same visual output as the original but with readable code

import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// Simple clean component that matches the original design exactly
const CleanHeader = React.forwardRef(function(props, ref) {
  const {
    igxWhXtvE = "Matt Akins", // Name prop
    wEsuC2TJ_ = "100px 0px 0px 0px", // Wrapper padding
    lNFPUHIlO = "32px", // Box padding
    aRNirZwci, // Avatar image
    zS6lIL7vu, // Resume link
    xkZqPjDGX = "ZPWoiskeZ", // Stack variant
    variant = "M6uxoYlpQ", // Layout variant
    className,
    style,
    layoutId,
    ...restProps
  } = props;

  // Determine if mobile based on variant
  const isMobile = variant === "F4efXvL8k";
  const isTablet = variant === "RzLCXAmZS";

  return _jsx("header", {
    ref,
    className: `clean-header ${className || ''}`,
    style: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: wEsuC2TJ_.split(' ').join(' '),
      color: "white",
      position: "relative",
      ...style
    },
    ...restProps,
    children: _jsxs("div", {
      className: "header-content",
      style: {
        width: "100%",
        maxWidth: isMobile ? "390px" : isTablet ? "700px" : "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px"
      },
      children: [
        // Main title (only show on mobile)
        isMobile && _jsx("div", {
          className: "header-title",
          style: {
            textAlign: "center",
            marginBottom: "2rem"
          },
          children: _jsx("h1", {
            style: {
              fontSize: "48px",
              fontWeight: 500,
              margin: 0,
              fontFamily: '"Open Sauce Sans", sans-serif',
              letterSpacing: "-0.04em",
              lineHeight: "1em"
            },
            children: igxWhXtvE
          })
        }),

        // Main grid
        _jsx("div", {
          className: "portfolio-grid-container",
          style: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
          },
          children: _jsxs("div", {
            className: "portfolio-grid",
            style: {
              position: "relative",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 2fr 1fr",
              gridTemplateRows: isMobile ? "repeat(5, 300px)" : "300px 300px",
              gap: "16px",
              width: "100%",
              maxWidth: isMobile ? "100%" : isTablet ? "100%" : "1200px"
            },
            children: [
              // About tile
              _jsx("div", {
                className: "grid-tile about-tile",
                style: {
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: lNFPUHIlO,
                  gridColumn: isMobile ? "1" : "1",
                  gridRow: isMobile ? "1" : "1"
                },
                children: _jsxs("div", {
                  className: "tile-content",
                  style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  },
                  children: [
                    _jsx("div", {
                      className: "tile-arrow",
                      style: {
                        width: "18px",
                        height: "16px",
                        alignSelf: "flex-end",
                        opacity: 0.7
                      },
                      children: _jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "currentColor",
                        children: _jsx("path", {
                          d: "M 0.667 7 L 14.958 7 L 8.833 0.875 L 9.603 0 L 17.187 7.583 L 9.603 15.167 L 8.833 14.292 L 14.958 8.167 L 0.667 8.167 Z"
                        })
                      })
                    }),
                    _jsx("div", {
                      className: "tile-text",
                      children: _jsx("p", {
                        style: {
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          fontFamily: '"Open Sauce Sans", sans-serif',
                          letterSpacing: "-0.02em"
                        },
                        children: "About"
                      })
                    })
                  ]
                })
              }),

              // Portfolio tile
              _jsx("div", {
                className: "grid-tile portfolio-tile",
                style: {
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: lNFPUHIlO,
                  gridColumn: isMobile ? "1" : "2",
                  gridRow: isMobile ? "2" : "1"
                },
                children: _jsxs("div", {
                  className: "tile-content",
                  style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  },
                  children: [
                    _jsx("div", {
                      className: "tile-arrow",
                      style: {
                        width: "18px",
                        height: "16px",
                        alignSelf: "flex-end",
                        opacity: 0.7
                      },
                      children: _jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "currentColor",
                        children: _jsx("path", {
                          d: "M 0.667 7 L 14.958 7 L 8.833 0.875 L 9.603 0 L 17.187 7.583 L 9.603 15.167 L 8.833 14.292 L 14.958 8.167 L 0.667 8.167 Z"
                        })
                      })
                    }),
                    _jsx("div", {
                      className: "tile-text",
                      children: _jsx("p", {
                        style: {
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          fontFamily: '"Open Sauce Sans", sans-serif',
                          letterSpacing: "-0.02em"
                        },
                        children: "Portfolio"
                      })
                    })
                  ]
                })
              }),

              // Contact tile (tall on desktop)
              _jsx("div", {
                className: "grid-tile contact-tile",
                style: {
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: lNFPUHIlO,
                  gridColumn: isMobile ? "1" : "3",
                  gridRow: isMobile ? "3" : isTablet ? "1" : "1 / 3"
                },
                children: _jsxs("div", {
                  className: "tile-content",
                  style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  },
                  children: [
                    _jsx("div", {
                      className: "tile-arrow",
                      style: {
                        width: "18px",
                        height: "16px",
                        alignSelf: "flex-end",
                        opacity: 0.7
                      },
                      children: _jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "currentColor",
                        children: _jsx("path", {
                          d: "M 0.667 7 L 14.958 7 L 8.833 0.875 L 9.603 0 L 17.187 7.583 L 9.603 15.167 L 8.833 14.292 L 14.958 8.167 L 0.667 8.167 Z"
                        })
                      })
                    }),
                    _jsx("div", {
                      className: "tile-text",
                      children: _jsx("p", {
                        style: {
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          fontFamily: '"Open Sauce Sans", sans-serif',
                          letterSpacing: "-0.02em"
                        },
                        children: "Contact"
                      })
                    })
                  ]
                })
              }),

              // Avatar tile
              _jsx("div", {
                className: "grid-tile avatar-tile",
                style: {
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.08)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: lNFPUHIlO,
                  gridColumn: isMobile ? "1" : "1",
                  gridRow: isMobile ? "4" : "2"
                },
                children: _jsx("div", {
                  className: "avatar-image",
                  style: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "32px",
                    backgroundImage: aRNirZwci ? `url(${aRNirZwci.src})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: !aRNirZwci && _jsx("div", {
                    style: {
                      fontSize: "3rem"
                    },
                    children: "👋"
                  })
                })
              }),

              // Stack tile
              _jsx("div", {
                className: "grid-tile stack-tile",
                style: {
                  position: "relative",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "32px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: lNFPUHIlO,
                  gridColumn: isMobile ? "1" : "2",
                  gridRow: isMobile ? "5" : "2"
                },
                children: _jsxs("div", {
                  className: "tile-content",
                  style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  },
                  children: [
                    _jsx("div", {
                      className: "tile-arrow",
                      style: {
                        width: "18px",
                        height: "16px",
                        alignSelf: "flex-end",
                        opacity: 0.7
                      },
                      children: _jsx("svg", {
                        viewBox: "0 0 18 16",
                        fill: "currentColor",
                        children: _jsx("path", {
                          d: "M 0.667 7 L 14.958 7 L 8.833 0.875 L 9.603 0 L 17.187 7.583 L 9.603 15.167 L 8.833 14.292 L 14.958 8.167 L 0.667 8.167 Z"
                        })
                      })
                    }),
                    _jsx("div", {
                      className: "tile-text",
                      children: _jsx("p", {
                        style: {
                          fontSize: "18px",
                          fontWeight: 500,
                          margin: 0,
                          fontFamily: '"Open Sauce Sans", sans-serif',
                          letterSpacing: "-0.02em"
                        },
                        children: "Stack"
                      })
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    })
  });
});

// Export the same structure as original
export const stdin_default = CleanHeader;
export const className = "framer-jQlgi";
export const css = []; // We'll use our CSS file instead
export const fonts = []; // Using existing font loading