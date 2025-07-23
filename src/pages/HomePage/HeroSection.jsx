import React, { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import Icon from "../../components/AppIcon";
import MagneticButton from "../../components/animations/MagneticButton";
import { FloatingElement } from "../../components/animations/ParallaxSection";

const roles = [
  "Full-Stack Web Developer (MERN)",
  "React.js & Tailwind CSS Frontend Developer",
  "Node.js & Express Backend Developer",
  "MongoDB & SQL Database Developer",
  "Python Developer (Django Familiarity)",
  "Web Deployment: Vercel & Netlify",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingRef = useRef(null);

  useEffect(() => {
    const fullText = roles[loopNum % roles.length];

    typingRef.current = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === fullText) {
          setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      },
      isDeleting ? 40 : 80
    );

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [text, isDeleting, loopNum]);

  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center bg-background overflow-hidden">
      {/* Background Grid */}
      <Motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        animate={{ backgroundPosition: ["0 0", "40px 40px"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Blobs */}
      <FloatingElement className="absolute top-16 left-6 sm:top-24 sm:left-14">
        <Motion.div
          className="w-16 h-16 sm:w-24 sm:h-24 bg-accent/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </FloatingElement>

      <FloatingElement className="absolute bottom-16 right-6 sm:bottom-20 sm:right-14">
        <Motion.div
          className="w-20 h-20 sm:w-28 sm:h-28 bg-conversion-accent/40 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </FloatingElement>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full mx-auto">
          {/* Text Column */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-gradient bg-gradient-to-r from-accent via-pink-500 to-conversion-accent bg-clip-text text-transparent">
                Akhilesh P
              </span>
            </h1>

            <div className="relative h-16 mt-2 mb-6 text-lg md:text-2xl text-muted-foreground font-mono">
              <span className="invisible absolute">
                {roles.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
              <span className="absolute">
                {text}
                <Motion.span
                  className="inline-block w-[1ch] text-accent"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </Motion.span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl">
              I build scalable, high-performance web applications with a focus
              on clean architecture, responsive design, and seamless user
              experience.
            </p>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row sm:justify-start items-center gap-6 mb-8">
              <MagneticButton
                magneticStrength={0.4}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-accent to-conversion-accent text-white font-semibold rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule a Call</span>
                </div>
              </MagneticButton>

              <MagneticButton
                magneticStrength={0.3}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-background border border-border hover:bg-accent/10 text-foreground font-medium rounded-lg transition"
              >
                <div className="flex items-center gap-2">
                  <Icon name="Download" size={20} />
                  <span>Download Resume</span>
                </div>
              </MagneticButton>
            </div>

            <div className="w-full flex items-center justify-between gap-4 sm:justify-start">
              {/* Social Icons */}
              <div className="flex grow justify-evenly sm:grow-0 sm:justify-start sm:space-x-4">
                {["Github", "Linkedin", "Twitter", "Mail"].map((icon) => (
                  <MagneticButton
                    key={icon}
                    magneticStrength={0.3}
                    className="p-3 bg-muted/30 hover:bg-accent/30 text-muted-foreground hover:text-accent rounded-lg transition-colors"
                  >
                    <Icon name={icon} size={20} />
                  </MagneticButton>
                ))}
              </div>

              {/* Mobile Scroll Indicator */}
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="flex sm:hidden flex-col items-center space-y-1 shrink-0"
              >
                <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
                  Swipe
                </span>
                <Motion.div
                  className="w-6 h-6 border-2 border-muted-foreground rounded-full flex items-center justify-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Motion.div
                    className="w-2 h-2 rounded-full bg-muted-foreground"
                    animate={{ y: [0, 2, 0], opacity: [1, 0.4, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Motion.div>
              </Motion.div>
            </div>
          </Motion.div>

          {/* Code Card Column */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Motion.div
              className="bg-card border border-border rounded-xl shadow-xl backdrop-blur-sm overflow-hidden"
              whileHover={{ rotateX: 3, rotateY: 3, scale: 1.01 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex justify-between items-center px-4 py-3 bg-muted/20 border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-warning rounded-full" />
                  <div className="w-3 h-3 bg-success rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  portfolio.js
                </span>
                <Icon
                  name="Code2"
                  size={16}
                  className="text-muted-foreground"
                />
              </div>

              <div className="p-6 font-mono text-sm text-success space-y-1">
                {[
                  "const developer = {",
                  "  name: 'Akhilesh P',",
                  "  title: 'Full-Stack Developer (MERN)',",
                  "  skills: ['React', 'Node.js', 'MongoDB' ,'Python', 'Django'],",
                  "  passion: 'Building clean,scalable,and user-centric web applications',",
                  "  github: 'https://github.com/yourusername',",
                  "  location: 'India',",
                  "  availableForHire: true",
                  "};",
                ].map((line, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                  >
                    {line}
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </div>

      {/* Desktop Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-2"
      >
        <span className="text-xs text-muted-foreground tracking-wide uppercase">
          Scroll down
        </span>
        <div className="w-5 h-9 border-2 border-muted-foreground rounded-full flex justify-center items-start p-1">
          <Motion.div
            className="w-1 h-2 rounded-full bg-muted-foreground"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
