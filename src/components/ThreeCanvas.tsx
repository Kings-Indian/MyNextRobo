'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useState, useEffect } from 'react';

function Model() {
  const { scene } = useGLTF('/models/MyFirstRobot.gltf');
  
  // Adjusted scale and position for better visibility
  const scale = 50;
  const position = [0, 0.5, 0];
  const rotation = [0, 0, 0];

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}

// Pre-load the model
useGLTF.preload('/models/MyFirstRobot.gltf');

interface ThreeCanvasProps {
  onError?: () => void;
}

export default function ThreeCanvas({ onError }: ThreeCanvasProps) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      onError?.();
    }
  }, [isError, onError]);

  if (isError) {
    return null;
  }

  return (
    <Canvas
      camera={{ 
        position: [10, 5, 10],
        fov: 45,
        near: 0.1,
        far: 1000
      }}
      shadows
      onError={() => setIsError(true)}
      style={{ 
        background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)',
        borderRadius: '0.5rem'
      }}
    >
      <color attach="background" args={['#1a1a1a']} />
      <Environment preset="night" /> {/* Changed to night for darker environment */}
      <ambientLight intensity={0.2} /> {/* Reduced ambient light further */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={0.5} // Reduced directional light intensity
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Model />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={30}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        dampingFactor={0.05}
      />
    </Canvas>
  );
} 