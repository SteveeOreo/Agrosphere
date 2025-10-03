// Image optimization utilities for better performance

/**
 * Lazy load images with intersection observer
 * @param {string} selector - CSS selector for images to lazy load
 */
export const initLazyLoading = (selector = 'img[data-src]') => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll(selector);
    images.forEach(img => imageObserver.observe(img));
  }
};

/**
 * Preload critical images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Generate responsive image srcSet
 * @param {string} baseUrl - Base image URL
 * @param {number[]} sizes - Array of sizes for responsive images
 * @returns {string} srcSet string
 */
export const generateSrcSet = (baseUrl, sizes = [320, 640, 1024, 1280]) => {
  return sizes
    .map(size => `${baseUrl}?w=${size} ${size}w`)
    .join(', ');
};

/**
 * Optimize image loading with blur placeholder
 * @param {HTMLImageElement} img - Image element
 * @param {string} src - Image source
 * @param {string} placeholder - Placeholder image (base64 or URL)
 */
export const loadImageWithPlaceholder = (img, src, placeholder) => {
  // Set placeholder first
  img.src = placeholder;
  img.classList.add('blur-sm', 'transition-all', 'duration-300');
  
  // Create new image to load actual source
  const imageLoader = new Image();
  imageLoader.onload = () => {
    img.src = src;
    img.classList.remove('blur-sm');
    img.classList.add('loaded');
  };
  imageLoader.src = src;
};

/**
 * Check if image format is supported
 * @param {string} format - Image format (webp, avif, etc.)
 * @returns {Promise<boolean>}
 */
export const supportsImageFormat = (format) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    
    const testImages = {
      webp: 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
      avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
    };
    
    img.src = testImages[format] || '';
  });
};