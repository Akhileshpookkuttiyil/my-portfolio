import React, { useState, Suspense } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/UI/Button";
import { MagneticCard } from "../../../components/animations/MagneticButton";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const ProjectShowcase3D = React.lazy(() =>
  import("../../../components/3D/ProjectShowcase3D")
);

// Move this to a separate file like `data/projects.js` in future
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

// Util: status badge color handler
const getStatusStyle = (status) => {
  switch (status) {
    case "Live":
      return "bg-success/20 text-success border-success/30";
    case "Client":
      return "bg-orange-100 text-orange-600 border-orange-300";
    case "Personal":
    default:
      return "bg-muted/20 text-muted border-muted/30";
  }
};

const ProjectCard = ({ project, isHovered, setHovered }) => (
  <MagneticCard
    className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-dramatic transition-all"
    onMouseEnter={() => setHovered(project.id)}
    onMouseLeave={() => setHovered(null)}
  >
    {/* Image */}
    <div className="relative h-48">
      <Motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </Motion.div>

      {/* Status */}
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

      {/* Links */}
      {isHovered && (
        <div className="absolute top-4 right-4 flex space-x-2">
          {[
            { icon: "ExternalLink", href: project.demoUrl },
            { icon: "Github", href: project.githubUrl },
          ].map(({ icon, href }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/90 backdrop-blur-sm text-muted-foreground hover:text-accent transition"
              aria-label={icon}
            >
              <Icon name={icon} size={16} />
            </a>
          ))}
        </div>
      )}
    </div>

    {/* Details */}
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

      {/* Tech */}
      <div className="flex flex-wrap gap-2 text-xs mb-3">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md bg-muted/40 border border-border"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
            +{project.techStack.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="default" size="sm" iconName="Eye">
          View
        </Button>
        <Button variant="outline" size="sm" iconName="Github" />
      </div>
    </div>
  </MagneticCard>
);

const FeaturedProjects = () => {
  const [hovered, setHovered] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const { ref, opacity, scale } = useScrollAnimation();

  return (
    <Motion.section
      ref={ref}
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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

          {/* Toggle */}
          <div className="flex justify-center space-x-2">
            {["grid", "3d"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                aria-label={`Switch to ${mode} view`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                  viewMode === mode
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:bg-accent/10"
                }`}
              >
                <Icon
                  name={mode === "grid" ? "LayoutGrid" : "Cube"}
                  size={16}
                />
                {mode === "grid" ? "Grid View" : "3D View"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {viewMode === "grid" ? (
          <Motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  isHovered={hovered === project.id}
                  setHovered={setHovered}
                />
              </Motion.div>
            ))}
          </Motion.div>
        ) : (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-accent/10 to-conversion-accent/10 rounded-xl">
                <Motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
                />
              </div>
            }
          >
            <div className="h-[600px] rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
              <ProjectShowcase3D projects={projects} />
            </div>
          </Suspense>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
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
        </div>
      </div>
    </Motion.section>
  );
};

export default FeaturedProjects;
