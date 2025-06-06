'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Module {
  id: string;
  name: string;
  description: string;
  category: string;
  compatibility: string[];
  image: string;
}

export default function Modules() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'sensors', name: 'Sensors' },
    { id: 'motors', name: 'Motors' },
    { id: 'controllers', name: 'Controllers' },
    { id: 'power', name: 'Power Systems' },
    { id: 'communication', name: 'Communication' },
  ];

  // Mock data - replace with actual API call
  const modules: Module[] = [
    {
      id: '1',
      name: 'Ultrasonic Sensor Array',
      description: 'High-precision distance measurement with multiple sensors for comprehensive coverage.',
      category: 'sensors',
      compatibility: ['Base Model', 'Advanced Model'],
      image: '/images/modules/ultrasonic.jpg',
    },
    {
      id: '2',
      name: 'DC Motor Controller',
      description: 'Precise motor control with current sensing and thermal protection.',
      category: 'controllers',
      compatibility: ['Base Model', 'Advanced Model', 'Custom Build'],
      image: '/images/modules/motor-controller.jpg',
    },
    {
      id: '3',
      name: 'LiDAR Module',
      description: '360-degree scanning for accurate mapping and navigation.',
      category: 'sensors',
      compatibility: ['Advanced Model'],
      image: '/images/modules/lidar.jpg',
    },
    {
      id: '4',
      name: 'WiFi Communication Module',
      description: 'Wireless connectivity for remote control and data transmission.',
      category: 'communication',
      compatibility: ['Base Model', 'Advanced Model', 'Custom Build'],
      image: '/images/modules/wifi.jpg',
    },
    {
      id: '5',
      name: 'Battery Management System',
      description: 'Smart battery monitoring and protection for extended operation.',
      category: 'power',
      compatibility: ['Base Model', 'Advanced Model'],
      image: '/images/modules/bms.jpg',
    },
  ];

  const filteredModules = modules.filter((module) => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Robot Modules
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Explore our collection of modular components for your robot
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search modules..."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={module.image}
                  alt={module.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {module.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {module.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Compatible with:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {module.compatibility.map((model) => (
                      <span
                        key={model}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/modules/${module.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add to Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No modules found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 