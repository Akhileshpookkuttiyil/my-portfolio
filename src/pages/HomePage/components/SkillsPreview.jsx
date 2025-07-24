import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";
import MagneticButton from "../../../components/animations/MagneticButton";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "Monitor",
    skills: [
      {
        name: "React",
        level: 70,
        experience: "1 year",
        projects: 6,
        color: "text-blue-400",
      },
      {
        name: "JavaScript (ES6+)",
        level: 68,
        experience: "1 year",
        projects: 8,
        color: "text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        level: 65,
        experience: "1 year",
        projects: 5,
        color: "text-cyan-400",
      },
      {
        name: "HTML/CSS",
        level: 70,
        experience: "1 year",
        projects: 10,
        color: "text-pink-400",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      {
        name: "Node.js",
        level: 70,
        experience: "1 year",
        projects: 6,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        level: 68,
        experience: "1 year",
        projects: 6,
        color: "text-gray-500",
      },
      {
        name: "MongoDB",
        level: 68,
        experience: "1 year",
        projects: 6,
        color: "text-green-400",
      },
      {
        name: "Mongoose",
        level: 65,
        experience: "1 year",
        projects: 5,
        color: "text-indigo-400",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      {
        name: "CI/CD (GitHub Actions)",
        level: 70,
        experience: "1 year",
        projects: 6,
        color: "text-purple-400",
      },
      {
        name: "Vercel / Netlify",
        level: 68,
        experience: "1 year",
        projects: 7,
        color: "text-green-400",
      },
      {
        name: "MongoDB Atlas",
        level: 70,
        experience: "1 year",
        projects: 6,
        color: "text-green-500",
      },
      {
        name: "Cloudinary",
        level: 65,
        experience: "1 year",
        projects: 4,
        color: "text-pink-400",
      },
    ],
  },
];

const SkillsPreview = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const values = {};
      skillCategories.forEach((cat) => {
        cat.skills.forEach((skill) => {
          values[skill.name] = skill.level;
        });
      });
      setAnimatedValues(values);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const radarSkills = [70, 65, 68, 72, 66, 60];
  const radarPoints = radarSkills
    .map((val, i) => {
      const angle = ((360 / radarSkills.length) * i - 90) * (Math.PI / 180);
      const radius = (val / 100) * 80;
      const x = 100 + radius * Math.cos(angle);
      const y = 100 + radius * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section className="py-18 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Zap" size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">
              Technical Skills
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technology <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning frontend, backend, and cloud
            technologies with hands-on project experience.
          </p>
        </Motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-glow transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icon
                    name={category.icon}
                    size={20}
                    className="text-accent"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => {
                  const skillKey = `${catIdx}-${skillIdx}`;
                  const isHovered = hoveredSkill === skillKey;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-medium ${skill.color} group-hover:text-accent`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {animatedValues[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2 mb-2 overflow-hidden">
                        <Motion.div
                          className="h-full bg-gradient-to-r from-accent to-conversion-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${animatedValues[skill.name] || 0}%`,
                          }}
                          transition={{
                            duration: 1.5,
                            delay: catIdx * 0.2 + skillIdx * 0.1,
                          }}
                        />
                      </div>
                      <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden text-xs text-muted-foreground"
                      >
                        <div className="flex justify-between">
                          <span>Experience:</span>
                          <span className="text-foreground">
                            {skill.experience}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projects:</span>
                          <span className="text-foreground">
                            {skill.projects}
                          </span>
                        </div>
                      </Motion.div>
                    </div>
                  );
                })}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Full-Stack Proficiency
              </h3>
              <p className="text-muted-foreground mb-6">
                With expertise across the full stack, I build scalable solutions
                from idea to deployment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-conversion-accent">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
              </div>
              <Link to="/">
                <MagneticButton
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-accent to-conversion-accent hover:brightness-110"
                >
                  <Icon name="Folder" size={14} className="inline-block" />
                  <span className="ml-2">See My Projects</span>
                </MagneticButton>
              </Link>
            </div>

            <div className="aspect-square max-w-sm mx-auto relative">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {[1, 2, 3, 4, 5].map((r) => (
                  <circle
                    key={r}
                    cx="100"
                    cy="100"
                    r={r * 20}
                    className="text-border opacity-30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
                {radarSkills.map((_, i) => {
                  const angle =
                    ((360 / radarSkills.length) * i - 90) * (Math.PI / 180);
                  return (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={100 + 100 * Math.cos(angle)}
                      y2={100 + 100 * Math.sin(angle)}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border opacity-30"
                    />
                  );
                })}
                <polygon
                  points={radarPoints}
                  fill="url(#skillGradient)"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="skillGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(6, 182, 212)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(255, 107, 53)"
                      stopOpacity="0.3"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">80%</div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Proficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;
