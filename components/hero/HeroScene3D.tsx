"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { MathUtils } from "three";
import type { Group, Mesh } from "three";

function HeroObject() {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current || !mesh.current) return;
    mesh.current.rotation.y += delta * 0.14;
    mesh.current.rotation.x += delta * 0.06;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.12, 0.035);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.18, 0.035);
  });

  return (
    <Float speed={0.75} rotationIntensity={0.1} floatIntensity={0.22}>
      <group ref={group}>
        <mesh ref={mesh} scale={1.18}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial color="#4b9bff" wireframe transparent opacity={0.72} roughness={0.45} />
        </mesh>
        <mesh scale={0.72}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#0b2d62" wireframe transparent opacity={0.36} />
        </mesh>
      </group>
      <Line points={[[0, -2.1, 0], [0, 2.1, 0]]} color="#7ec9ff" transparent opacity={0.2} lineWidth={0.55} />
    </Float>
  );
}

export function HeroScene3D() {
  return (
    <div className="hero-scene" aria-label="Abstract rotating blue wireframe geometry" role="img">
      <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 4.7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 5]} intensity={1.25} color="#b8e1ff" />
          <pointLight position={[-3, -1, 2]} intensity={1.1} color="#2f81ff" />
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
