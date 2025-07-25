import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import clsx from "clsx";

const TimelineSection = () => {
  const [expandedNode, setExpandedNode] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedNode((prev) => (prev === id ? null : id));
  };

  const timelineData = [
    {
      id: 1,
      year: "2024-2025",
      title: "Full-Stack Developer",
      company: "Level X, Calicut",
      type: "career",
      description:
        "Worked on production-ready MERN applications with modular architecture, authentication flows, and clean reusable UI components.",
      details: {
        projects: [
          "Authentication & Role-Based APIs",
          "Order & Product Modules",
          "Reusable UI Components",
        ],
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "JWT",
        ],
        achievements: [
          "Built 20+ frontend components",
          "Secured apps using JWT and cookies",
          "Used GitHub for team-based code reviews",
        ],
      },
      icon: "Briefcase",
      color: "accent",
    },
    {
      id: 2,
      year: "2024-2025",
      title: "Personal Full-Stack Projects",
      company: "Self-Initiated",
      type: "project",
      description:
        "Developed and deployed full-stack MERN applications for eCommerce and food delivery scenarios with modern UX and secure flows.",
      details: {
        projects: [
          "FoodieMania – Role-based food ordering platform with Stripe checkout and cart sync",
          "Instabasket – Grocery eCommerce site with admin control and secure login",
          "PureFarmFoods – AJAX-powered farm grocery system with OTP and email auth",
        ],
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Stripe",
          "JWT",
          "Cloudinary",
          "Twilio",
          "Nodemailer",
        ],
        achievements: [
          "Built protected dashboards for users, sellers, and admins",
          "Integrated Stripe payments and dynamic cart functionality",
          "Secured APIs using JWT, cookies, and session-based control",
        ],
      },
      icon: "Rocket",
      color: "accent",
    },
    {
      id: 3,
      year: "2023-2024",
      title: "MERN Stack Training",
      company: "Level X, Calicut",
      type: "education",
      description:
        "Completed full-stack web development training with real-world projects and modern tools using the MERN stack.",
      details: {
        projects: ["Admin Panel", "Login System", "Dashboard UI"],
        technologies: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Axios",
          "REST APIs",
        ],
        achievements: [
          "Completed 500+ hours of hands-on coding",
          "Built and deployed full-stack projects",
          "Practiced GitHub-based team collaboration",
        ],
      },
      icon: "Code",
      color: "conversion-accent",
    },
    {
      id: 4,
      year: "2021",
      title: "Python & Django Training",
      company: "Avodha",
      type: "education",
      description:
        "Completed hands-on training in Python and Django, learning MVC architecture, server-side rendering, and API basics.",
      details: {
        projects: ["Basic Web Apps", "Form Handling", "MVC Templates"],
        technologies: ["Python", "Django", "HTML", "CSS"],
        achievements: [
          "Learned Django views, models, templates",
          "Built small-scale web applications",
          "Gained backend development experience",
        ],
      },
      icon: "Code",
      color: "conversion-accent",
    },
    {
      id: 5,
      year: "2020",
      title: "Python Intern",
      company: "Fleming Embedded and Software Solutions",
      type: "career",
      description:
        "Interned on internal Django-based projects using forms, views, and MVC templating.",
      details: {
        projects: [
          "Web Form Handling",
          "Template Rendering",
          "Admin View Logic",
        ],
        technologies: ["Python", "Django", "HTML", "CSS"],
        achievements: [
          "Built Django templates and views",
          "Explored backend form logic",
          "Practiced MVC structure in real use",
        ],
      },
      icon: "Briefcase",
      color: "conversion-accent",
    },
    {
      id: 6,
      year: "2020",
      title: "Bachelor of Computer Applications",
      company: "University of Calicut",
      type: "education",
      description:
        "Completed Computer Applications degree with focus on programming fundamentals and academic projects.",
      details: {
        projects: ["Capstone Project", "Java + C++ Labs"],
        technologies: ["Java", "C++", "MySQL", "HTML", "CSS"],
        achievements: [
          "Graduated with distinction",
          "Completed several software assignments",
          "Started building static web apps",
        ],
      },
      icon: "GraduationCap",
      color: "accent",
    },
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Clock" size={16} className="mr-2" />
            Career Journey
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">
            My Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From curious beginnings to professional expertise, here’s how my
            story evolved.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="w-full flex justify-start md:justify-center sm:px-8 relative z-30">
            <div className="bg-card border border-border rounded-full shadow-sm px-6 py-3 flex items-center w-fit">
              <Icon name="TrendingUp" size={20} className="mr-3 text-accent" />
              <span className="text-foreground font-medium text-left">
                The journey continues...
              </span>
            </div>
          </div>
        </Motion.div>

        <div className="absolute left-[30px] md:left-1/2 top-[19rem] bottom-0 w-0.5 bg-gradient-to-b from-accent via-conversion-accent to-accent transform md:-translate-x-1/2 pointer-events-none z-0" />

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={clsx(
                "relative flex flex-col md:flex-row md:items-start gap-4",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="absolute left-[30px] md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                <div
                  className={clsx(
                    "w-4 h-4 rounded-full border-4 border-background shadow-glow",
                    `bg-${item.color}`
                  )}
                />
              </div>

              <div
                className={clsx(
                  "w-full md:w-1/2 mt-12 md:mt-0",
                  index % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pl-8 md:pr-16"
                )}
              >
                <div
                  className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-glow transition-all duration-300 cursor-pointer group"
                  onClick={() => toggleExpanded(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    e.key === "Enter" && toggleExpanded(item.id)
                  }
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={clsx(
                          "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                          `from-${item.color}`,
                          `to-${item.color}/70`
                        )}
                      >
                        <Icon name={item.icon} size={20} color="white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-accent">
                          {item.year}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          {item.type}
                        </div>
                      </div>
                    </div>
                    <Icon
                      name={
                        expandedNode === item.id ? "ChevronUp" : "ChevronDown"
                      }
                      size={20}
                      className="text-muted-foreground group-hover:rotate-180 transition-transform"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-conversion-accent font-medium">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    {expandedNode === item.id && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <SectionDetail
                          icon="FolderOpen"
                          title="Key Projects"
                          items={item.details.projects}
                          pillColor="accent"
                        />
                        <SectionDetail
                          icon="Code2"
                          title="Technologies Used"
                          items={item.details.technologies}
                          pillColor="conversion-accent"
                        />
                        <SectionDetail
                          icon="Trophy"
                          title="Key Achievements"
                          items={item.details.achievements}
                          pillColor="success"
                          checkIcon
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2">
                <div
                  className={clsx(index % 2 === 0 ? "text-left" : "text-right")}
                >
                  <div className="inline-block mt-4 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
                    <span className="text-xl font-bold text-gradient">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}

          <div className="absolute left-6 sm:left-10 md:left-1/2 bottom-0 transform md:-translate-x-1/2 translate-y-4 z-10">
            <div className="w-4 h-4 rounded-full border-4 border-background shadow-glow bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionDetail = ({
  icon,
  title,
  items,
  pillColor,
  checkIcon = false,
}) => (
  <div>
    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
      <Icon
        name={icon}
        size={16}
        className={clsx("mr-2", `text-${pillColor}`)}
      />
      {title}
    </h4>
    {checkIcon ? (
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xs text-muted-foreground flex items-start"
          >
            <Icon name="Check" size={12} className="mr-2 mt-0.5 text-success" />
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={clsx(
              `px-3 py-1 text-xs rounded-full bg-${pillColor}/10 text-${pillColor}`
            )}
          >
            {item}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default TimelineSection;
