'use client';

import { useState } from 'react';
import ThreeCanvas from '@/components/ThreeCanvas';
import Image from 'next/image';

interface AssemblyStep {
  id: number;
  title: string;
  description: string;
  image: string;
  components: string[];
}

interface Material {
  id: number;
  name: string;
  quantity: string;
  category: string;
}

export default function Assembly() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModelLoaded, setIsModelLoaded] = useState(true);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [showMaterials, setShowMaterials] = useState(true);

  const materials: Material[] = [
    { id: 1, name: 'Body Frame', quantity: '1x', category: 'Main Components' },
    { id: 2, name: 'DC Motors', quantity: '2x', category: 'Main Components' },
    { id: 3, name: 'Tank Modules', quantity: '2x', category: 'Main Components' },
    { id: 4, name: 'Battery Holder', quantity: '1x', category: 'Main Components' },
    { id: 5, name: 'ESP32-S', quantity: '1x', category: 'Electronics' },
    { id: 6, name: 'L298N Motor Driver', quantity: '1x', category: 'Electronics' },
    { id: 7, name: 'Step-down Module', quantity: '1x', category: 'Electronics' },
    { id: 8, name: 'Battery', quantity: '1x', category: 'Electronics' },
    { id: 9, name: 'M3 Screws (25mm)', quantity: '4x', category: 'Hardware' },
    { id: 10, name: 'M3 Screws (10mm)', quantity: '8x', category: 'Hardware' },
    { id: 11, name: 'M3 Screws (5mm)', quantity: '4x', category: 'Hardware' }
  ];

  const assemblySteps: AssemblyStep[] = [
    {
      id: 1,
      title: 'Install Motors',
      description: 'Slide the Motors over the Body',
      image: '/images/assembly/motors.png',
      components: ['1x Body', '2x Motors']
    },
    {
      id: 2,
      title: 'Secure Motors',
      description: 'Screw in the Motors to fix them in place',
      image: '/images/assembly/secure_motors.png',
      components: ['4x M3 screws (25mm)']
    },
    {
      id: 3,
      title: 'Install Tank Modules',
      description: 'Slide the Tank Modules (pair of wheels, connected by gears) into the Body',
      image: '/images/assembly/tank_modules.png',
      components: ['2x Tank Modules']
    },
    {
      id: 4,
      title: 'Secure Tank Modules',
      description: 'Screw in the Tank Modules to fix them into the Body',
      image: '/images/assembly/secure_tank.png',
      components: ['8x M3 screws (10mm)']
    },
    {
      id: 5,
      title: 'Attach Battery Holder',
      description: 'Position and secure the Battery Holder with screws',
      image: '/images/assembly/battery_holder.png',
      components: ['1x Battery Holder', '4x M3 screws (5mm)']
    },
    {
      id: 6,
      title: 'Attach Electronics',
      description: 'Install ESP32-S, L298N Motor Driver, and Step-down module',
      image: '/images/assembly/electronics.png',
      components: ['1x ESP32-S', '1x L298N Motor Driver', '1x Step-down module']
    },
    {
      id: 7,
      title: 'Insert Battery',
      description: 'Slide in the Battery',
      image: '/images/assembly/battery.png',
      components: ['1x Battery']
    }
  ];

  const handleModelError = () => {
    setIsModelLoaded(false);
  };

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
    setCurrentStep(stepId);
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

        {/* Materials List */}
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowMaterials(!showMaterials)}
              className="w-full p-6 text-left"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Required Materials
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-gray-600 dark:text-gray-300">
                      Complete list of components needed for assembly
                    </p>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        showMaterials ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {showMaterials && (
              <div className="px-6 pb-6">
                <div className="mt-4 space-y-4">
                  {['Main Components', 'Electronics', 'Hardware'].map((category) => (
                    <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {materials
                          .filter((material) => material.category === category)
                          .map((material) => (
                            <div
                              key={material.id}
                              className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm"
                            >
                              <span className="text-gray-600 dark:text-gray-400">
                                {material.name}
                              </span>
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                {material.quantity}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Model Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-[600px] relative">
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
            {/* Wiring Diagram */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wiring Diagram</h3>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/assembly/Wiring.png"
                  alt="Wiring Diagram"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Assembly Steps */}
          <div className="space-y-4">
            {assemblySteps.map((step) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ${
                  expandedStep === step.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {step.id}
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                        <svg
                          className={`w-6 h-6 transform transition-transform ${
                            expandedStep === step.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {expandedStep === step.id && (
                  <div className="px-6 pb-6">
                    <div className="mt-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Required Components:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {step.components.map((component, index) => (
                          <li
                            key={index}
                            className="text-gray-600 dark:text-gray-400"
                          >
                            {component}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 