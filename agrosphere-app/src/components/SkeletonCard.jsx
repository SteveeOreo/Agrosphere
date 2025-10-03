import React from 'react';

const SkeletonCard = ({ 
  variant = 'default',
  showImage = true,
  showTitle = true,
  showDescription = true,
  showActions = true,
  className = ''
}) => {
  const variants = {
    default: 'p-6',
    compact: 'p-4',
    large: 'p-8'
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 ${variants[variant]} ${className} animate-pulse`}>
      {/* Image Skeleton */}
      {showImage && (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      )}
      
      {/* Title Skeleton */}
      {showTitle && (
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      )}
      
      {/* Description Skeleton */}
      {showDescription && (
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      )}
      
      {/* Actions Skeleton */}
      {showActions && (
        <div className="flex gap-3">
          <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-20"></div>
        </div>
      )}
    </div>
  );
};

// Skeleton Grid Component
export const SkeletonGrid = ({ 
  count = 6, 
  columns = 3, 
  variant = 'default',
  className = '' 
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} variant={variant} />
      ))}
    </div>
  );
};

export default SkeletonCard;