import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Text,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { motion as Motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

const ProjectCard3D = ({ project, position, isActive, onClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    const targetY = isActive ? 0.5 : 0;
    const targetRotY = hovered ? Math.sin(t) * 0.1 : 0;

    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.1
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY,
      0.1
    );
    if (isActive) {
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2.5, 0.1]}
        radius={0.1}
        smoothness={4}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={isActive ? "#06b6d4" : "#374151"}
          roughness={0.15}
          metalness={0.8}
          emissive={isActive ? "#06b6d4" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </RoundedBox>

      {/* Title */}
      <Text
        position={[0, 0.85, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.title}
      </Text>

      {/* Category */}
      <Text
        position={[0, 0.3, 0.06]}
        fontSize={0.12}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.category}
      </Text>

      {/* Tech icons (placeholder cubes) */}
      {project.techStack.slice(0, 3).map((_, i) => (
        <RoundedBox
          key={i}
          args={[0.15, 0.15, 0.02]}
          position={[-0.4 + i * 0.4, -0.5, 0.06]}
          radius={0.02}
        >
          <meshStandardMaterial color="#8b5cf6" />
        </RoundedBox>
      ))}
    </group>
  );
};

const ProjectShowcase3D = ({ projects = [], className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const active = projects[activeIndex];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.6} />
          <Environment preset="city" />

          <group ref={groupRef}>
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                position={[(i - 1) * 3, 0, 0]}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </group>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Overlay Info */}
      <AnimatePresence mode="wait">
        <Motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {active?.title}
              </h3>
              <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded-md">
                {active?.category}
              </span>
            </div>
            <div className="flex space-x-2">
              {["demoUrl", "githubUrl"].map((key) => (
                <a
                  key={key}
                  href={active?.[key] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{
                      __html:
                        key === "demoUrl"
                          ? '<path stroke="currentColor" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />'
                          : '<path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>',
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            {active?.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {active?.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </Motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute top-6 right-6 flex space-x-2">
        {projects.slice(0, 3).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Project ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === activeIndex ? "bg-accent" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase3D;
