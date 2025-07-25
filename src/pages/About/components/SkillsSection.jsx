import { motion as Motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";
import { Link } from "react-router-dom";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "Layout",
      skills: [
        "React",
        "Vue.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & APIs",
      icon: "Server",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "WebSockets",
        "Django",
        "Python",
      ],
    },
    {
      title: "Database",
      icon: "Database",
      skills: ["MongoDB"],
    },
    {
      title: "Tools & Platforms",
      icon: "Tool",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section className="py-24 bg-background relative z-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-conversion-accent/10 border border-conversion-accent/30 rounded-full text-conversion-accent text-sm font-medium mb-5 shadow-sm backdrop-blur">
            <Icon name="Settings" size={16} className="mr-2" />
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools I use to build modern, performant, and scalable applications.
          </p>
        </Motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border border-border bg-card/80 backdrop-blur rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 border border-border rounded-xl flex items-center justify-center shadow-inner">
                  <Icon name={category.icon} size={20} />
                </div>
                <h4 className="text-xl font-semibold text-gradient">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground bg-muted/40 border border-border rounded-full transition-all duration-300 hover:text-accent hover:border-accent/50 hover:bg-accent/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-conversion-accent/10 border border-border rounded-3xl p-10 max-w-3xl mx-auto shadow-inner backdrop-blur-md">
            <Icon
              name="Rocket"
              size={28}
              className="text-accent mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              See My Skills in Action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Browse projects where I’ve applied these tools to build powerful
              user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                iconName="FolderOpen"
                iconPosition="left"
                className="bg-gradient-to-r from-accent to-conversion-accent shadow-md"
                onClick={() => (window.location.href = "#projects")}
              >
                View Projects
              </Button>
              <Link to="/schedule-consultation">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="hover:bg-accent/10 hover:border-accent hover:text-accent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
