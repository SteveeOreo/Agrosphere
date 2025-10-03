// Performance optimization utilities

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately on first call
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Memoize function results for performance
 * @param {Function} fn - Function to memoize
 * @param {Function} getKey - Function to generate cache key
 * @returns {Function} Memoized function
 */
export const memoize = (fn, getKey = (...args) => JSON.stringify(args)) => {
  const cache = new Map();
  return (...args) => {
    const key = getKey(...args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Virtual scrolling for large lists
 * @param {Array} items - Array of items
 * @param {number} itemHeight - Height of each item
 * @param {number} containerHeight - Height of container
 * @param {number} scrollTop - Current scroll position
 * @returns {Object} Visible items and styling info
 */
export const getVirtualScrollItems = (items, itemHeight, containerHeight, scrollTop) => {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  const visibleItems = items.slice(startIndex, endIndex).map((item, index) => ({
    ...item,
    index: startIndex + index
  }));
  
  return {
    visibleItems,
    totalHeight: items.length * itemHeight,
    offsetY: startIndex * itemHeight
  };
};

/**
 * Intersection Observer for element visibility
 * @param {Function} callback - Callback when element intersects
 * @param {Object} options - Intersection observer options
 * @returns {IntersectionObserver} Observer instance
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

/**
 * Batch DOM updates for better performance
 * @param {Function[]} updates - Array of DOM update functions
 */
export const batchDOMUpdates = (updates) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

/**
 * Memory usage monitor
 * @returns {Object} Memory usage information
 */
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    return {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576),
      total: Math.round(performance.memory.totalJSHeapSize / 1048576),
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
    };
  }
  return null;
};

/**
 * Cleanup function for removing event listeners and observers
 * @param {Array} cleanupTasks - Array of cleanup functions
 */
export const cleanup = (cleanupTasks) => {
  cleanupTasks.forEach(task => {
    if (typeof task === 'function') {
      task();
    }
  });
};

/**
 * Preload route components
 * @param {Function} importFunction - Dynamic import function
 */
export const preloadRoute = (importFunction) => {
  const componentImport = importFunction();
  // Store in cache for faster subsequent loads
  if (componentImport && typeof componentImport.then === 'function') {
    componentImport.catch(() => {
      // Silently handle preload errors
    });
  }
  return componentImport;
};