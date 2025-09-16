/**
 * Enhanced navigation with View Transitions API support
 * Based on the smooth transitions seen on crysta.framer.website
 */

/**
 * Navigates to a new page with smooth view transition if supported
 * @param {string} href - The URL to navigate to
 * @param {function} fallbackNavigate - Fallback navigation function
 */
export function navigateWithTransition(href, fallbackNavigate) {
  // Check if View Transitions API is supported
  if (!document.startViewTransition) {
    // Fallback to regular navigation
    fallbackNavigate(href);
    return;
  }

  // Use View Transitions API for smooth page transitions
  document.startViewTransition(() => {
    fallbackNavigate(href);
  });
}

/**
 * React hook for enhanced navigation with view transitions
 * @param {object} router - The unframer router object
 */
export function useViewTransitionRouter(router) {
  const navigateWithViewTransition = (href) => {
    navigateWithTransition(href, (url) => {
      router.navigate(url);
    });
  };

  return {
    ...router,
    navigate: navigateWithViewTransition,
  };
}

/**
 * Enhanced navigate function for React Router with view transitions
 * @param {string} href - The URL to navigate to
 * @param {function} reactRouterNavigate - React Router's navigate function
 */
export function navigateWithReactRouter(href, reactRouterNavigate) {
  navigateWithTransition(href, reactRouterNavigate);
}