'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarState {
  position: { x: number; y: number };
  rotation: number;
  wheelRotation: number;
}

export default function Demo() {
  const [carState, setCarState] = useState<CarState>({
    position: { x: 0, y: 0 },
    rotation: -90,
    wheelRotation: 0,
  });

  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  const [speed, setSpeed] = useState(1); // Default speed multiplier
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key.toLowerCase()]: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key.toLowerCase()]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const baseMoveSpeed = 2.5; 
    const baseRotateSpeed = 2.5; 
    const baseWheelSpeed = 5; 

    const updateCarState = () => {
      setCarState((prev) => {
        let newState = { ...prev };
        const moveSpeed = baseMoveSpeed * speed;
        const rotateSpeed = baseRotateSpeed * speed;
        const wheelSpeed = baseWheelSpeed * speed;

        // Convert rotation to radians for movement calculations
        const rotationRad = (prev.rotation * Math.PI) / 180;

        // Forward movement (Up arrow or W)
        if (keys['arrowup'] || keys['w'] || keys['up']) {
          newState.position.x += Math.cos(rotationRad) * moveSpeed;
          newState.position.y += Math.sin(rotationRad) * moveSpeed;
          newState.wheelRotation += wheelSpeed;
        }
        // Backward movement (Down arrow or S)
        if (keys['arrowdown'] || keys['s'] || keys['down']) {
          newState.position.x -= Math.cos(rotationRad) * moveSpeed;
          newState.position.y -= Math.sin(rotationRad) * moveSpeed;
          newState.wheelRotation -= wheelSpeed;
        }
        // Left rotation (Left arrow or A)
        if (keys['arrowleft'] || keys['a'] || keys['left']) {
          newState.rotation -= rotateSpeed;
        }
        // Right rotation (Right arrow or D)
        if (keys['arrowright'] || keys['d'] || keys['right']) {
          newState.rotation += rotateSpeed;
        }

        return newState;
      });

      animationFrameRef.current = requestAnimationFrame(updateCarState);
    };

    animationFrameRef.current = requestAnimationFrame(updateCarState);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [keys, speed]);

  const handleControlStart = (direction: string) => {
    setKeys((prev) => ({ ...prev, [direction]: true }));
  };

  const handleControlEnd = (direction: string) => {
    setKeys((prev) => ({ ...prev, [direction]: false }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Interactive Car Demo
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400">
            Use WASD keys or on-screen controls
          </p>
        </div>

        <div className="relative w-full h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div
            className="absolute w-40 h-24"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${carState.position.x}px, ${carState.position.y}px) rotate(${carState.rotation}deg)`,
            }}
          >
            <Image
              src="/images/car.webp"
              alt="Car"
              width={160}
              height={96}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Speed Control */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center gap-3">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Speed Control</div>
              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300 min-w-[60px]">Speed:</span>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(speed - 0.1) / 1.9 * 100}%, #E5E7EB ${(speed - 0.1) / 1.9 * 100}%, #E5E7EB 100%)`
                  }}
                />
                <span className="text-gray-900 dark:text-white font-bold min-w-[40px]">{speed.toFixed(1)}x</span>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <button
              className="w-16 h-16 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold select-none transition-transform active:scale-90"
              onMouseDown={() => handleControlStart('up')}
              onMouseUp={() => handleControlEnd('up')}
              onMouseLeave={() => handleControlEnd('up')}
              onTouchStart={() => handleControlStart('up')}
              onTouchEnd={() => handleControlEnd('up')}
              onTouchCancel={() => handleControlEnd('up')}
            >
              ↑
            </button>
            <div className="flex gap-2">
              <button
                className="w-16 h-16 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold select-none transition-transform active:scale-90"
                onMouseDown={() => handleControlStart('left')}
                onMouseUp={() => handleControlEnd('left')}
                onMouseLeave={() => handleControlEnd('left')}
                onTouchStart={() => handleControlStart('left')}
                onTouchEnd={() => handleControlEnd('left')}
                onTouchCancel={() => handleControlEnd('left')}
              >
                ←
              </button>
              <button
                className="w-16 h-16 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold select-none transition-transform active:scale-90"
                onMouseDown={() => handleControlStart('down')}
                onMouseUp={() => handleControlEnd('down')}
                onMouseLeave={() => handleControlEnd('down')}
                onTouchStart={() => handleControlStart('down')}
                onTouchEnd={() => handleControlEnd('down')}
                onTouchCancel={() => handleControlEnd('down')}
              >
                ↓
              </button>
              <button
                className="w-16 h-16 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold select-none transition-transform active:scale-90"
                onMouseDown={() => handleControlStart('right')}
                onMouseUp={() => handleControlEnd('right')}
                onMouseLeave={() => handleControlEnd('right')}
                onTouchStart={() => handleControlStart('right')}
                onTouchEnd={() => handleControlEnd('right')}
                onTouchCancel={() => handleControlEnd('right')}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Controls
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>W - Move Forward</p>
              <p>S - Move Backward</p>
              <p>A - Rotate Left</p>
              <p>D - Rotate Right</p>
              <p className="text-sm text-gray-500">(Mobile/Desktop: Use on-screen arrows)</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Status
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Position: ({Math.round(carState.position.x)}, {Math.round(carState.position.y)})</p>
              <p>Rotation: {Math.round(carState.rotation)}°</p>
              <p>Wheel Rotation: {Math.round(carState.wheelRotation)}°</p>
              <p>Speed: {speed.toFixed(1)}x</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 