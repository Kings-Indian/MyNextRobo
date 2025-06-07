'use client';

import { useState } from 'react';
import Link from 'next/link';

/* Mock data for future reference
const posts = [
  {
    id: '1',
    title: 'Help with Motor Configuration',
    content: 'I'm having trouble setting up my motor drivers...',
    author: 'John Doe',
    date: '2024-03-15',
    category: 'technical',
    replies: 5,
    views: 120,
  },


const categories = [
  { id: 'all', name: 'All Topics' },
  { id: 'technical', name: 'Technical Support' },
  { id: 'discussion', name: 'General Discussion' },
  { id: 'projects', name: 'Project Showcase' },
];
*/

export default function Forums() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Community Forums
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Join the discussion and share your knowledge
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search forums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
                }`}
              >
                All Topics
              </button>
              <button
                onClick={() => setSelectedCategory('technical')}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === 'technical'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
                }`}
              >
                Technical Support
              </button>
              <button
                onClick={() => setSelectedCategory('discussion')}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === 'discussion'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
                }`}
              >
                General Discussion
              </button>
              <button
                onClick={() => setSelectedCategory('projects')}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === 'projects'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
                }`}
              >
                Project Showcase
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No posts yet. Be the first to start a discussion!
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Create New Post
          </button>
        </div>
      </div>
    </div>
  );
} 