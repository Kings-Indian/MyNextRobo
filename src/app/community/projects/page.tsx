'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  likes: number;
}

export default function CommunityProjects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API call
  const projects: Project[] = [
    {
      id: '1',
      title: 'Autonomous Navigation Robot',
      description: 'A robot capable of autonomous navigation using computer vision and machine learning.',
      author: 'John Doe',
      date: '2024-03-15',
      category: 'navigation',
      likes: 42,
    },
    {
      id: '2',
      title: 'Robotic Arm Assembly',
      description: 'Detailed guide for assembling a 6-DOF robotic arm with custom components.',
      author: 'Jane Smith',
      date: '2024-03-14',
      category: 'assembly',
      likes: 28,
    },
    {
      id: '3',
      title: 'Smart Home Assistant',
      description: 'A voice-controlled robot assistant for home automation and monitoring.',
      author: 'Mike Johnson',
      date: '2024-03-13',
      category: 'automation',
      likes: 35,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'assembly', name: 'Assembly' },
    { id: 'automation', name: 'Automation' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Community Projects
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Explore and collaborate on robotics projects from our community
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    By {project.author} • {project.date}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.likes} likes
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 