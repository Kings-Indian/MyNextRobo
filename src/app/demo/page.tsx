'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Platform Demo
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Experience our platform's capabilities through interactive demonstrations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('features')}
                className={`${
                  activeTab === 'features'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('models')}
                className={`${
                  activeTab === 'models'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                3D Models
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`${
                  activeTab === 'community'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Community
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Platform Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Interactive 3D Viewer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Experience our powerful 3D model viewer with real-time manipulation and
                      simulation capabilities.
                    </p>
                    <Link
                      href="/models"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Try it now →
                    </Link>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Project Management
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Organize and collaborate on robotics projects with our intuitive project
                      management tools.
                    </p>
                    <Link
                      href="/community"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View projects →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'models' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3D Model Showcase
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Robot Assembly
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Interactive assembly guides with step-by-step instructions.
                    </p>
                    <Link
                      href="/assembly"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View assembly →
                    </Link>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Module Library
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Browse our extensive collection of robot modules and components.
                    </p>
                    <Link
                      href="/modules"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Explore modules →
                    </Link>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Custom Models
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Upload and share your own robot designs with the community.
                    </p>
                    <Link
                      href="/models/upload"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Upload model →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Community Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Project Sharing
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Share your robotics projects and collaborate with other enthusiasts.
                    </p>
                    <Link
                      href="/community/projects"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Browse projects →
                    </Link>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Discussion Forums
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Join discussions, ask questions, and share knowledge with the community.
                    </p>
                    <Link
                      href="/community/forums"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Visit forums →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 