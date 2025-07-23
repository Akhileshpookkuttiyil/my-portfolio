import React, { useRef, useState } from "react";
import { motion as Motion, useSpring, useMotionValue } from "framer-motion";

const MagneticButton = ({
  children,
  className = "",
  magneticStrength = 0.3,
  attractionDistance = 100,
  springConfig = { damping: 15, stiffness: 200 },
  onClick,
  ...props
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < attractionDistance) {
      x.set(dx * magneticStrength);
      y.set(dy * magneticStrength);
    }
  };

  const resetMotion = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.button
      ref={ref}
      className={`relative transform-gpu overflow-hidden ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMotion}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Motion.div
        className="relative z-10"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </Motion.div>

      {/* Magnetic field border */}
      <Motion.div
        className="absolute inset-0 rounded-full border border-accent/10 pointer-events-none"
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Ripple effect */}
      <Motion.div
        className="absolute inset-0 rounded-full bg-accent/10 pointer-events-none"
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </Motion.button>
  );
};

// ==========================
// MagneticCard
// ==========================

export const MagneticCard = ({
  children,
  className = "",
  magneticStrength = 0.1,
  attractionDistance = 150,
  tiltStrength = 0.1,
  springConfig = { damping: 15, stiffness: 200 },
  ...props
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < attractionDistance) {
      x.set(dx * magneticStrength);
      y.set(dy * magneticStrength);
      rotateY.set(dx * tiltStrength);
      rotateX.set(-dy * tiltStrength);
    }
  };

  const resetMotion = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      className={`relative transform-gpu ${className}`}
      style={{
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMotion}
      {...props}
    >
      <Motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </Motion.div>
    </Motion.div>
  );
};

export default MagneticButton;
