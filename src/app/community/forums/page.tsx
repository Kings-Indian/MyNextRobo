'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  replies: number;
  views: number;
}

export default function CommunityForums() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API call
  const posts: ForumPost[] = [
    {
      id: '1',
      title: 'Help with Robot Navigation Algorithm',
      content: 'I\'m working on implementing SLAM for my robot and need some guidance...',
      author: 'John Doe',
      date: '2024-03-15',
      category: 'navigation',
      replies: 5,
      views: 120,
    },
    {
      id: '2',
      title: 'Best Practices for Robot Assembly',
      content: 'What are your recommended tools and techniques for assembling robot components?',
      author: 'Jane Smith',
      date: '2024-03-14',
      category: 'assembly',
      replies: 8,
      views: 150,
    },
    {
      id: '3',
      title: 'Machine Learning for Robot Control',
      content: 'Discussion about implementing reinforcement learning for robot control systems.',
      author: 'Mike Johnson',
      date: '2024-03-13',
      category: 'ai',
      replies: 12,
      views: 200,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'assembly', name: 'Assembly' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'software', name: 'Software' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Community Forums
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Join discussions, ask questions, and share knowledge with the community
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.content}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.replies} replies</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                    </div>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline">
                    View Discussion
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No discussions found matching your criteria.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Start New Discussion
          </button>
        </div>
      </div>
    </div>
  );
} 