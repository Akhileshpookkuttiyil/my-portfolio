import React from "react";
import { motion as Motion } from "framer-motion";
import { useParallax } from "../../hooks/useScrollAnimation";

const ParallaxSection = ({
  children,
  speed = 0.5,
  className = "",
  backgroundElements = [],
  overlay = true,
}) => {
  const { ref, y } = useParallax(speed);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background elements with parallax */}
      {backgroundElements.map((element, index) => (
        <Motion.div
          key={index}
          style={{ y: y * (element?.speed || 1) }}
          className={`absolute inset-0 ${element?.className || ""}`}
        >
          {element?.content}
        </Motion.div>
      ))}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const ParallaxImage = ({
  src,
  alt,
  speed = 0.3,
  className = "",
  overlayColor = "bg-background/40",
}) => {
  const { ref, y } = useParallax(speed);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
      />
      <div className={`absolute inset-0 ${overlayColor}`} />
    </div>
  );
};

export const ParallaxText = ({
  children,
  speed = 0.2,
  className = "",
  direction = "up",
}) => {
  const { ref, y } = useParallax(speed * (direction === "down" ? -1 : 1));

  return (
    <Motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </Motion.div>
  );
};

export const FloatingElement = ({ children, className = "", delay = 0 }) => {
  return (
    <Motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </Motion.div>
  );
};

export default ParallaxSection;
