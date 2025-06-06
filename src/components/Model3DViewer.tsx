'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState, useCallback } from 'react';

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[rgb(0,62,65)] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[rgb(0,62,65)]">Loading 3D Model...</p>
        </div>
      </div>
    </div>
  ),
});

export default function Model3DViewer() {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[rgb(0,62,65)]">Failed to load 3D Model</p>
            <p className="text-sm text-gray-500">Please try refreshing the page</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[rgb(0,62,65)] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[rgb(0,62,65)]">Loading 3D Model...</p>
          </div>
        </div>
      }>
        <ThreeCanvas onError={handleError} />
      </Suspense>
    </div>
  );
} 