import React from "react";
import { motion as Motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ContactMethods = () => {
  const contactPlatforms = [
    {
      platform: "Email",
      handle: "akhileshpookkuttiyil@gmail.com",
      icon: "Mail",
      color: "accent",
      href: "mailto:akhileshpookkuttiyil@gmail.com",
      description: "For detailed discussions and opportunities",
      action: "Send Email",
    },
    {
      platform: "WhatsApp",
      handle: "+91 9746132518",
      icon: "MessageCircle",
      color: "success",
      href: "https://wa.me/919746132518",
      description: "For quick chats or urgent queries",
      action: "Message on WhatsApp",
    },
    {
      platform: "GitHub",
      handle: "@Akhileshpookkuttiyil",
      icon: "Github",
      color: "foreground",
      href: "https://github.com/Akhileshpookkuttiyil",
      description: "Code, collaboration, and open source",
      action: "View GitHub",
    },
    {
      platform: "Twitter",
      handle: "@akhilesh_dev",
      icon: "Twitter",
      color: "sky-500",
      href: "https://twitter.com/akhilesh_dev",
      description: "Dev thoughts, updates, and DMs",
      action: "Follow on Twitter",
    },
    {
      platform: "LinkedIn",
      handle: "/in/akhilesh-p-dev",
      icon: "Linkedin",
      color: "blue-600",
      href: "https://linkedin.com/in/akhilesh-p-dev",
      description: "Professional updates and networking",
      action: "Connect on LinkedIn",
    },
    {
      platform: "Discord",
      handle: "akhilesh_dev#1234",
      icon: "MessageSquare",
      color: "indigo-500",
      href: "#",
      description: "For real-time dev discussions",
      action: "Join on Discord",
    },
  ];

  return (
    <Motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-14 lg:py-24 bg-card/30"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <Motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Let’s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out on your preferred platform. I'm always open to meaningful
            tech conversations and collaborations.
          </p>
        </Motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactPlatforms.map((item, index) => (
            <Motion.a
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 bg-${item.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={item.icon}
                    size={24}
                    className={`text-${item.color}`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.platform}
                </h3>
                <p className="text-muted-foreground text-sm truncate mb-2">
                  {item.handle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className={`text-${item.color} hover:bg-${item.color}/10 w-full justify-center`}
              >
                {item.action}
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Motion.a>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <Motion.div
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-accent/10 to-conversion-accent/10 border border-accent/20 rounded-2xl p-8 max-w-3xl mx-auto mt-20"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-muted-foreground mb-6">
          Join these satisfied clients and experience collaborative development
          that delivers results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .querySelector("#project-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-gradient-to-r from-accent to-conversion-accent text-white rounded-lg font-medium hover:from-accent/90 hover:to-conversion-accent/90 transition-all duration-300"
          >
            Start Your Project
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#calendar-booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all duration-300"
          >
            Schedule Consultation
          </button>
        </div>
      </Motion.div>
    </Motion.section>
  );
};

export default ContactMethods;