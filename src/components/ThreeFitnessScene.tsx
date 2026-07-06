"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Interactive Biomechanical Humanoid Figure representing Human Performance Engineering
function HumanoidFigure({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Idle rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    
    // Smooth mouse parallax reaction
    const targetX = (mouse.x * Math.PI) / 8;
    const targetY = (mouse.y * Math.PI) / 8;
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (targetX - groupRef.current.rotation.z) * 0.05;
  });

  const jointColor = "#E2FA00";
  const boneColor = "#444444";

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Head / Biometric Mesh */}
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={jointColor} wireframe roughness={0.1} />
      </mesh>
      
      {/* Spine / Neck column */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 1.3, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>

      {/* Shoulder Bar */}
      <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.9, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      
      {/* Shoulder Joints */}
      <mesh position={[-0.45, 1.5, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      <mesh position={[0.45, 1.5, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>

      {/* Chest Cage (Biometric telemetry rings) */}
      <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.26, 0.015, 8, 32]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.015, 8, 32]} />
        <meshStandardMaterial color={boneColor} roughness={0.2} />
      </mesh>

      {/* Hip Pelvis */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      <mesh position={[-0.3, 0.5, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0.5, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>

      {/* Left Upper Arm */}
      <mesh position={[-0.65, 1.25, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Left Elbow Joint */}
      <mesh position={[-0.8, 0.95, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      {/* Left Lower Arm */}
      <mesh position={[-0.8, 0.65, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Left Hand */}
      <mesh position={[-0.8, 0.35, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>

      {/* Right Upper Arm */}
      <mesh position={[0.65, 1.25, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Right Elbow Joint */}
      <mesh position={[0.8, 0.95, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      {/* Right Lower Arm */}
      <mesh position={[0.8, 0.65, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Right Hand */}
      <mesh position={[0.8, 0.35, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>

      {/* Left Thigh */}
      <mesh position={[-0.3, 0.05, 0]} rotation={[0, 0, 0.05]}>
        <cylinderGeometry args={[0.045, 0.04, 0.9, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Left Knee Joint */}
      <mesh position={[-0.32, -0.45, 0]}>
        <sphereGeometry args={[0.075, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      {/* Left Shin */}
      <mesh position={[-0.32, -0.95, 0]}>
        <cylinderGeometry args={[0.035, 0.03, 0.9, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Left Foot */}
      <mesh position={[-0.3, -1.45, 0.08]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>

      {/* Right Thigh */}
      <mesh position={[0.3, 0.05, 0]} rotation={[0, 0, -0.05]}>
        <cylinderGeometry args={[0.045, 0.04, 0.9, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Right Knee Joint */}
      <mesh position={[0.32, -0.45, 0]}>
        <sphereGeometry args={[0.075, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
      {/* Right Shin */}
      <mesh position={[0.32, -0.95, 0]}>
        <cylinderGeometry args={[0.035, 0.03, 0.9, 8]} />
        <meshStandardMaterial color={boneColor} roughness={0.5} />
      </mesh>
      {/* Right Foot */}
      <mesh position={[0.3, -1.45, 0.08]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color={jointColor} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Interactive Dumbbell 3D Object (Sleek Chrome, toned down accents)
function Dumbbell({ position, scale = 1, rotationSpeed = 1 }: { position: [number, number, number]; scale?: number; rotationSpeed?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2 * rotationSpeed;
    groupRef.current.rotation.x += delta * 0.1 * rotationSpeed;

    const targetX = (mouse.x * Math.PI) / 6;
    const targetY = (mouse.y * Math.PI) / 6;
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (targetX - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 1.5, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
        
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.55, 0.55, 0.25, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[-0.62, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 16]} />
          <meshStandardMaterial color="#E2FA00" metalness={0.2} roughness={0.3} />
        </mesh>

        <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.55, 0.55, 0.25, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[0.62, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 16]} />
          <meshStandardMaterial color="#E2FA00" metalness={0.2} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// Kinetic Particle Field (Toned down size & opacity for high-end look)
function ParticleField({ count = 60 }: { count?: number }) {
  const points = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.position.x += (mouse.x * 0.3 - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (-mouse.y * 0.3 - pointsRef.current.position.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#888888"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

// Dynamic lighting setup (Sleek, toned-down premium lighting)
function DynamicLighting() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (!lightRef.current) return;
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    lightRef.current.position.set(x, y, 4);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#555555" />
      <pointLight ref={lightRef} intensity={1} color="#ffffff" distance={10} decay={2} />
    </>
  );
}

export default function ThreeFitnessScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <DynamicLighting />
        <ParticleField count={80} />
        
        {/* Core Humanoid Figure in the Center Stage */}
        <HumanoidFigure position={[0, -1, 0.5]} scale={1.2} />

        {/* Small floating assets at the side for biometric scan context */}
        <Dumbbell position={[3.3, 1.2, -1.8]} scale={0.5} rotationSpeed={0.8} />
        <Dumbbell position={[-3.3, -1.2, -1.8]} scale={0.45} rotationSpeed={0.6} />
      </Canvas>
    </div>
  );
}
