'use client';

import { useState } from 'react';
import ThreeCanvas from '@/components/ThreeCanvas';

interface AssemblyStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Assembly() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModelLoaded, setIsModelLoaded] = useState(true);

  const assemblySteps: AssemblyStep[] = [
    {
      id: 1,
      title: 'Base Assembly',
      description: 'Start by attaching the base plate to the main chassis. Ensure all mounting points are properly aligned.',
      image: '/images/assembly/base.jpg',
    },
    {
      id: 2,
      title: 'Motor Installation',
      description: 'Install the drive motors and secure them with the provided mounting brackets.',
      image: '/images/assembly/motors.jpg',
    },
    {
      id: 3,
      title: 'Sensor Integration',
      description: 'Connect and mount the various sensors (ultrasonic, infrared, etc.) to their designated positions.',
      image: '/images/assembly/sensors.jpg',
    },
    {
      id: 4,
      title: 'Control System',
      description: 'Install the main control board and connect all necessary wiring.',
      image: '/images/assembly/control.jpg',
    },
    {
      id: 5,
      title: 'Final Assembly',
      description: 'Complete the assembly by attaching the outer shell and performing final checks.',
      image: '/images/assembly/final.jpg',
    },
  ];

  const handleModelError = () => {
    setIsModelLoaded(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Robot Assembly Guide
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Follow our step-by-step guide to assemble your robot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Model Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-[500px] relative">
              {isModelLoaded ? (
                <ThreeCanvas onError={handleModelError} />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">
                    Failed to load 3D model. Please try refreshing the page.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Assembly Steps */}
          <div className="space-y-6">
            {assemblySteps.map((step) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
                  currentStep === step.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      {step.id}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                    <div className="mt-4">
                      <button
                        onClick={() => setCurrentStep(step.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View in 3D
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Step
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(assemblySteps.length, currentStep + 1))}
            disabled={currentStep === assemblySteps.length}
            className="px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
} 