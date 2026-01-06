"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const GeometricShape = ({ position, color, speed, rotationSpeed, scale, type }: any) => {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * rotationSpeed;
            mesh.current.rotation.y += delta * rotationSpeed;
        }
    });

    const Geometry = useMemo(() => {
        switch (type) {
            case 'cube': return <boxGeometry args={[1, 1, 1]} />;
            case 'octahedron': return <octahedronGeometry args={[0.7]} />;
            case 'tetrahedron': return <tetrahedronGeometry args={[0.8]} />;
            default: return <boxGeometry args={[1, 1, 1]} />;
        }
    }, [type]);

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} position={position} scale={scale}>
                {Geometry}
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.4}
                    roughness={0.2}
                    metalness={0.8}
                />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
                    <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={1} />
                </lineSegments>
            </mesh>
        </Float>
    );
};

const FloatingShapes = () => {
    const count = 4; // Reduced to 4

    const shapes = useMemo(() => {
        const colors = ["#d4a574", "#64748b", "#cbd5e1"]; // Bronze, Slate, Silver
        const types = ['cube', 'octahedron', 'tetrahedron'];

        return new Array(count).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ],
            color: colors[Math.floor(Math.random() * colors.length)],
            type: types[Math.floor(Math.random() * types.length)],
            speed: Math.random() * 0.2 + 0.1,
            rotationSpeed: Math.random() * 0.2 + 0.1,
            scale: Math.random() * 2 + 2 // Scale 2.0 - 4.0
        }));
    }, []);

    return (
        <>
            {shapes.map((props, i) => (
                <GeometricShape key={i} {...props} />
            ))}
        </>
    );
};

const Background3D = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#d4a574" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#5ec4c4" />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default Background3D;
