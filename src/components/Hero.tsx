import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import HackerRoom from './HackerRoom';
import { calculateSizes } from '../constants/index';
import * as THREE from 'three';
import Target from './Target';
import ReactLogo from './ReactLogo';
import Rings from './Rings';
import Cube from './Cube';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; 
      meshRef.current.rotation.x += delta * 0.2; 
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        color="#00b7eb" 
        metalness={0.8} 
        roughness={0.2} 
        emissive="#00f7ff" 
        emissiveIntensity={0.3} 
      />
    </mesh>
  );
};

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3">
        <p className="text-center text-white font-medium sm:text-3xl text-2xl font-sans">
          Hello, I am Vivek <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Crafting ideas into digital realities
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={60} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />
            <OrbitControls enableZoom={false} maxDistance={50} minDistance={5} />
            <RotatingCube />
            <Environment preset="studio" />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
