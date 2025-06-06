'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  name: string;
  email: string;
  lastLogin: string;
  savedProjects: Array<{
    id: string;
    name: string;
    lastModified: string;
  }>;
}

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        // TODO: Replace with actual API call
        const mockData: UserData = {
          name: 'John Doe',
          email: 'john@example.com',
          lastLogin: new Date().toLocaleString(),
          savedProjects: [
            {
              id: '1',
              name: 'Robot Assembly Project',
              lastModified: new Date().toLocaleString(),
            },
            {
              id: '2',
              name: 'Module Integration',
              lastModified: new Date().toLocaleString(),
            },
          ],
        };
        setUserData(mockData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No user data found
          </h2>
          <button
            onClick={() => router.push('/signin')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome, {userData.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Account Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Email: {userData.email}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Last Login: {userData.lastLogin}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Saved Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.savedProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Last Modified: {project.lastModified}
                </p>
                <button
                  onClick={() => router.push(`/community/${project.id}`)}
                  className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 