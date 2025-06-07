'use client';

import Image from 'next/image';

export default function Modules() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Coming Up!
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src="/images/modules.png"
              alt="Modules Preview"
              fill
              className="object-contain rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 