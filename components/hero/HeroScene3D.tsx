"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function HeroObject() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.16;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.12} floatIntensity={0.25}>
      <mesh ref={mesh} scale={1.2}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial color="#c8ff55" wireframe transparent opacity={0.72} roughness={0.5} />
      </mesh>
      <Line points={[[0, -2.1, 0], [0, 2.1, 0]]} color="#c8ff55" transparent opacity={0.18} lineWidth={0.6} />
    </Float>
  );
}

export function HeroScene3D() {
  return (
    <div className="hero-scene" aria-label="Abstract rotating wireframe geometry" role="img">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <directionalLight position={[3, 4, 5]} intensity={1.4} color="#dfffa3" />
          <pointLight position={[-3, -1, 2]} intensity={1.2} color="#a855f7" />
          <HeroObject />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Suspense>
      </Canvas>
      <span className="scene-orbit orbit-one" />
      <span className="scene-orbit orbit-two" />
      <span className="scene-label">AI / AUTOMATION / SYSTEMS</span>
    </div>
  );
}
