import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../../../components/animations/MagneticButton";
import Button from "../../../components/UI/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import purefarmfoods from "../../../assets/images/purefarmfoods.png";
import foodiemania from "../../../assets/images/foodiemania.png";
import instabasket from "../../../assets/images/instabasket.png";

// -------------------- Project Data --------------------
const projectData = [
  {
    id: 1,
    title: "FoodieMania",
    description:
      "Scalable full-stack food delivery platform supporting multi-role access (User, Seller, Admin), real-time cart sync, secure JWT auth, and integrated Stripe/COD payments. Built with mobile responsiveness and lazy-loaded resources for performance.",
    image: foodiemania,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "Tailwind CSS",
      "Multer",
      "Cloudinary",
      "Axios",
      "React Router",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://food-app-one-rho.vercel.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/FoodApp",
    details: {
      role: "Fullstack Developer",
      features: [
        "Multi-role Authentication (User, Seller, Admin)",
        "Real-time Cart Sync Across Devices",
        "Stripe & COD Checkout Flows",
        "Advanced Search & Filtering",
        "Admin Analytics Dashboard",
        "Email Verification via Nodemailer",
      ],
      challenges:
        "Secure session management, sync across tabs without WebSockets, performance optimization for multi-role views.",
      apis: [
        "Stripe",
        "Cloudinary",
        "MongoDB Atlas",
        "Nominatim",
        "Nodemailer",
      ],
    },
  },
  {
    id: 2,
    title: "InstaBasket",
    description:
      "Responsive grocery e-commerce app where users can browse server-added products, add them to cart, and securely purchase using Stripe payments. Features category filtering, cart persistence, and basic order management.",
    image: instabasket,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Multer",
      "Cloudinary",
      "JWT",
      "React Hook Form",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://insta-basket.vercel.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/InstaBasket",
    details: {
      role: "Fullstack Developer",
      features: [
        "Server-side Product Management",
        "User Cart and Order Flow",
        "Stripe Payment Integration",
        "Category Filtering and Search",
        "Basic Order Status View",
        "Email Verification via Nodemailer",
      ],
      challenges:
        "Handled secure payment integration, form validations, and cart persistence across page reloads.",
      apis: ["Stripe", "MongoDB Atlas", "Cloudinary", "Nodemailer"],
    },
  },
  {
    id: 3,
    title: "PureFarmFoods",
    description:
      "Server-side rendered multi-role web application for managing an organic product marketplace. Features role-based dashboards for users, sellers, and admins with secure product listing, order tracking, and admin-level moderation.",
    image: purefarmfoods,
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "MongoDB",
      "Razorpay",
      "Bootstrap",
      "Multer",
      "Cloudinary",
      "JWT",
      "Cookie-Parser",
      "Twilio",
      "Nodemailer",
    ],
    category: "Fullstack",
    status: "Personal",
    demoUrl: "https://purefarmfoods-production.up.railway.app",
    githubUrl: "https://github.com/Akhileshpookkuttiyil/PureFarmFoods",
    details: {
      role: "Fullstack Developer",
      features: [
        "Role-based Web Interface (User, Seller, Admin)",
        "Admin Product & Seller Approval System",
        "Twilio SMS Phone Verification",
        "Nodemailer Email Verification",
        "Dynamic EJS Templates for Views",
        "Invoice Generation & Order Tracking",
      ],
      challenges:
        "Built secure approval workflows, integrated dual-verification flows, and handled role-based UI with reusable EJS components.",
      apis: ["Razorpay", "MongoDB Atlas", "Cloudinary", "Twilio", "Nodemailer"],
    },
  },
];

const tags = ["All", "React", "Node.js", "MongoDB", "EJS"];

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

// -------------------- Project Card --------------------
const ProjectCard = ({ project, isExpanded, onToggle }) => (
  <Motion.div
    layout
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35 }}
    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 flex flex-col justify-between min-h-[480px]"
  >
    {/* Image + Status */}
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-fill"
      />
      <div className="absolute top-4 left-4">
        <span
          className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${getStatusStyle(
            project.status
          )}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{project.status}</span>
        </span>
      </div>
      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {[
          { icon: "ExternalLink", href: project.demoUrl },
          { icon: "Github", href: project.githubUrl },
        ].map(({ icon, href }) => (
          <MagneticButton
            key={icon}
            className="p-3 bg-muted/30 hover:bg-accent/30 text-muted-foreground hover:text-accent rounded-lg"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon name={icon} size={18} />
            </a>
          </MagneticButton>
        ))}
      </div>
    </div>

    {/* Info */}
    <div className="p-5 overflow-visible">
      <span className="text-xs font-medium text-accent uppercase">
        {project.category}
      </span>
      <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
      <p
        className={`text-sm text-muted-foreground mb-3 ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded bg-muted/20 border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-3 mb-3">
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <MagneticButton className="px-4 py-2 border border-border text-white rounded-md text-sm hover:brightness-110 hover:border-accent transition">
            <Icon name="Eye" size={14} className="inline-block" />
            <span className="ml-1">View</span>
          </MagneticButton>
        </a>

        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <MagneticButton className="px-4 py-2 border border-border text-sm rounded-md hover:bg-muted/20 hover:border-accent transition">
            <Icon name="Github" size={14} />
          </MagneticButton>
        </a>
      </div>

      <button
        onClick={onToggle}
        className="text-sm text-accent hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Learn More"}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <Motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-3 text-sm text-muted-foreground space-y-1"
          >
            {project.details?.role && (
              <p>
                <strong>Role:</strong> {project.details.role}
              </p>
            )}
            {project.details?.features && (
              <p>
                <strong>Features:</strong> {project.details.features.join(", ")}
              </p>
            )}
            {project.details?.challenges && (
              <p>
                <strong>Challenges:</strong> {project.details.challenges}
              </p>
            )}
            {project.details?.apis && (
              <p>
                <strong>APIs:</strong> {project.details.apis.join(", ")}
              </p>
            )}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  </Motion.div>
);

// -------------------- Showcase Grid --------------------
const ProjectShowcaseGrid = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedCardId, setExpandedCardId] = useState(null);

  const filtered =
    activeTag === "All"
      ? projectData
      : projectData.filter((project) =>
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(activeTag.toLowerCase())
          )
        );

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Projects </span>
            <span className="bg-gradient-to-r from-accent to-conversion-accent bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore my work built with diverse technologies.
          </p>
        </div>

        {/* Filters */}
        <Motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveTag(tag);
                setExpandedCardId(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border focus:outline-none transition ${
                activeTag === tag
                  ? "bg-accent text-background border-accent"
                  : "text-muted-foreground border-border hover:text-accent hover:border-accent"
              }`}
            >
              {tag}
            </button>
          ))}
        </Motion.div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <Motion.div
              key={activeTag}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {filtered.map((project) => (
                <Motion.div
                  key={project.id}
                  layout
                  className="mb-6 break-inside-avoid"
                >
                  <ProjectCard
                    project={project}
                    isExpanded={expandedCardId === project.id}
                    onToggle={() =>
                      setExpandedCardId((prev) =>
                        prev === project.id ? null : project.id
                      )
                    }
                  />
                </Motion.div>
              ))}
            </Motion.div>
          ) : (
            <Motion.div
              key="no-projects"
              className="text-center mt-20 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Icon
                name="Inbox"
                size={48}
                className="mx-auto mb-4 text-muted"
              />
              <p className="text-lg">
                No projects found for{" "}
                <span className="text-accent">{activeTag}</span>.
              </p>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcaseGrid;
