import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = ({ 
  message = 'Loading...', 
  showLogo = true,
  overlay = true 
}) => {
  const baseClasses = overlay 
    ? 'fixed inset-0 bg-white/90 backdrop-blur-sm z-50' 
    : 'w-full h-screen bg-white';

  return (
    <div className={`${baseClasses} flex flex-col items-center justify-center`}>
      {/* Logo */}
      {showLogo && (
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">Agrosphere</h2>
        </div>
      )}
      
      {/* Loading Spinner */}
      <LoadingSpinner 
        size="lg" 
        color="green" 
        text={message}
      />
      
      {/* Loading Animation */}
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default PageLoader;