import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/UI/Button";
import MagneticButton from "../../../components/animations/MagneticButton";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

// Example project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, payments, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    category: "Full-Stack",
    status: "Personal",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    description:
      "Real-time visualizations with ML insights and predictive analytics.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=600&h=400&fit=crop",
    techStack: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    category: "Data Science",
    status: "Client",
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Badge style handler
const getStatusStyle = (status) => {
  switch (status) {
    case "Live":
      return "bg-success/20 text-success border-success/30";
    case "Client":
      return "bg-orange-100 text-orange-600 border-orange-300";
    default:
      return "bg-muted/20 text-muted border-muted/30";
  }
};

// Project card
const ProjectCard = ({ project, isHovered, setHovered }) => {
  const [expanded, setExpanded] = useState(false);
  const techsToShow = expanded
    ? project.techStack
    : project.techStack.slice(0, 3);
  const hiddenCount = project.techStack.length - 3;

  return (
    <div
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-out"
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </Motion.div>

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${getStatusStyle(
              project.status
            )}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === "Live"
                  ? "bg-success"
                  : project.status === "Client"
                  ? "bg-orange-500"
                  : "bg-muted"
              }`}
            />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Hover icons */}
        {isHovered && (
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            {[
              { icon: "ExternalLink", href: project.demoUrl },
              { icon: "Github", href: project.githubUrl },
            ].map(({ icon, href }) => (
              <MagneticButton
                key={icon}
                magneticStrength={0.3}
                className="p-3 bg-muted/30 hover:bg-accent/30 text-muted-foreground hover:text-accent rounded-lg transition-colors"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon}
                >
                  <Icon name={icon} size={18} />
                </a>
              </MagneticButton>
            ))}
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent uppercase">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 text-xs mb-3">
          {techsToShow.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-muted/40 border border-border"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition text-xs"
            >
              {expanded ? "Show Less" : `+${hiddenCount} more`}
            </button>
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center space-x-3">
          <MagneticButton className="px-4 py-2 border border-border bg-background text-white rounded-md text-sm hover:brightness-110 hover:border-accent transition">
            <Icon name="Eye" size={14} className="inline-block" />
            <span className="ml-2">View</span>
          </MagneticButton>
          <MagneticButton className="px-4 py-2 border border-border text-sm rounded-md hover:bg-muted/20 hover:border-accent transition">
            <Icon name="Github" size={14} />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

// Main section
const FeaturedProjects = () => {
  const [hovered, setHovered] = useState(null);
  const { ref, opacity } = useScrollAnimation();

  return (
    <Motion.section
      ref={ref}
      style={{ opacity }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Icon name="Star" size={16} className="text-accent" />
            </Motion.div>
            <span className="text-sm text-accent font-medium">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Recent </span>
            <span className="bg-gradient-to-r from-accent to-conversion-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions built with modern technologies.
          </p>
        </div>

        {/* Project grid */}
        <Motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {projects.map((project) => (
            <Motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              <ProjectCard
                project={project}
                isHovered={hovered === project.id}
                setHovered={setHovered}
              />
            </Motion.div>
          ))}
        </Motion.div>

        {/* CTA */}
        <Motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Link to="/project-case-studies-portfolio">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="hover:scale-[1.02] hover:bg-accent/10 hover:border-accent hover:text-accent transition-transform duration-200"
            >
              View All Projects
            </Button>
          </Link>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default FeaturedProjects;
