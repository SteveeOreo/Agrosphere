import { useEffect, useState } from 'react';

export default function MobileLoader({
  isLoading = true,
  message = "Loading...",
  size = "medium",
  overlay = false
}) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const containerClasses = overlay
    ? 'fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-3">
        {/* Spinner */}
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-green-700 rounded-full animate-spin`}></div>
        </div>

        {/* Loading text */}
        <div className={`text-gray-600 font-medium ${textSizeClasses[size]} text-center`}>
          {message}{dots}
        </div>

        {/* Agrosphere branding for overlay */}
        {overlay && (
          <div className="mt-8 text-xs text-gray-400 text-center">
            <div className="flex items-center justify-center space-x-1">
              <span>🌱</span>
              <span>Agrosphere</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
