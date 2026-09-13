import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Core() {
  const ref = useRef(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.3;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <Float speed={1.35} rotationIntensity={0.45} floatIntensity={0.45}>
      <group ref={ref}>
        <TorusKnot args={[1.05, 0.24, 180, 28, 2, 3]} scale={1.05}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.22}
            chromaticAberration={0.06}
            anisotropy={0.35}
            roughness={0.16}
            metalness={0.55}
            color="#d7d7d9"
          />
        </TorusKnot>
        <mesh scale={0.52}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#111214" roughness={0.2} metalness={0.95} emissive="#2a2c31" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function Orbit() {
  const ref = useRef(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.1;
  });
  return (
    <group ref={ref} rotation={[Math.PI / 2.7, 0.2, 0.2]}>
      <mesh>
        <torusGeometry args={[1.72, 0.012, 16, 180]} />
        <meshBasicMaterial color="#8f939a" transparent opacity={0.34} />
      </mesh>
      <mesh rotation={[0.25, 0, 0.4]}>
        <torusGeometry args={[2.12, 0.008, 16, 180]} />
        <meshBasicMaterial color="#60636a" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} color="#f1f1f1" />
      <pointLight position={[-3, 1.5, 3]} intensity={5.5} distance={8} color="#808995" />
      <pointLight position={[3, -2, 2]} intensity={4} distance={7} color="#4c4f56" />
      <Core />
      <Orbit />
      <Sparkles count={95} scale={5.4} size={1.8} speed={0.3} color="#d2d4d8" />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true }}>
      <Scene />
    </Canvas>
  );
}
