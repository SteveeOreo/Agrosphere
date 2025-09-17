import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices
 * @returns {boolean} - True if device is mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

/**
 * Custom hook to get screen size breakpoints
 * @returns {object} - Object with current breakpoint info
 */
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

/**
 * Get responsive classes based on screen size
 * @param {object} classes - Object with mobile, tablet, desktop classes
 * @returns {string} - Combined class string
 */
export const getResponsiveClasses = (classes) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  let result = classes.base || '';

  if (isMobile && classes.mobile) {
    result += ` ${classes.mobile}`;
  }

  if (isTablet && classes.tablet) {
    result += ` ${classes.tablet}`;
  }

  if (isDesktop && classes.desktop) {
    result += ` ${classes.desktop}`;
  }

  return result.trim();
};

/**
 * Mobile-specific touch handlers
 */
export const touchHandlers = {
  // Prevent double-tap zoom on buttons
  preventDoubleClick: (callback) => {
    let lastTap = 0;
    return (event) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 500 && tapLength > 0) {
        event.preventDefault();
        return;
      }
      lastTap = currentTime;
      callback(event);
    };
  },

  // Handle swipe gestures
  handleSwipe: (element, onSwipeLeft, onSwipeRight, threshold = 100) => {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    element.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    });

    element.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      endY = e.changedTouches[0].screenY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Only trigger if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > threshold && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < -threshold && onSwipeLeft) {
          onSwipeLeft();
        }
      }
    });
  }
};

/**
 * Mobile-specific styling utilities
 */
export const mobileStyles = {
  // Common mobile padding
  mobilePadding: 'px-4 py-3 sm:px-6 sm:py-4',

  // Mobile-friendly button sizes
  mobileButton: 'px-6 py-3 text-base font-semibold',

  // Mobile card styling
  mobileCard: 'bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow',

  // Mobile text sizes
  mobileHeading: 'text-xl sm:text-2xl lg:text-3xl',
  mobileSubheading: 'text-lg sm:text-xl lg:text-2xl',
  mobileBody: 'text-sm sm:text-base',

  // Mobile spacing
  mobileSpacing: 'space-y-4 sm:space-y-6 lg:space-y-8',

  // Mobile grid
  mobileGrid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',

  // Mobile form inputs
  mobileInput: 'w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700',
};

/**
 * Viewport meta tag helper for mobile optimization
 */
export const setMobileViewport = () => {
  if (typeof document !== 'undefined') {
    let viewport = document.querySelector('meta[name="viewport"]');

    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }

    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  }
};

/**
 * Handle mobile keyboard visibility
 */
export const useMobileKeyboard = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // On mobile, when keyboard opens, viewport height decreases significantly
      const heightDifference = window.screen.height - window.innerHeight;
      setIsKeyboardVisible(heightDifference > 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isKeyboardVisible;
};

/**
 * Prevent body scroll when mobile menu is open
 */
export const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    if (isLocked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = originalStyle;
    }

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};
