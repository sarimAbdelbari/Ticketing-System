

import React from 'react';

const LoadingSkeleton = () => {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Skeleton */}
        <div className="animate-pulse space-y-3 sm:space-y-4">
          {/* Title */}
          <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4" />
          
          {/* Subtitle */}
          <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2" />
          
          {/* Content Blocks */}
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md" />
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md" />
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6" />
          </div>
          
          {/* Image Placeholder */}
          <div className="h-32 sm:h-48 md:h-56 bg-gray-200 dark:bg-gray-700 rounded-md" />
          
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md" />
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md hidden sm:block" />
            <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-md hidden sm:block" />
          </div>
  
          {/* Mobile-only footer items */}
          <div className="sm:hidden space-y-2">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md" />
          </div>
        </div>
      </div>
    );
  };

export default LoadingSkeleton;