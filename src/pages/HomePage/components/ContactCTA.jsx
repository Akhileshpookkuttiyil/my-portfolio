import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";

const ContactCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      description: "Get in touch for project discussions",
      value: "akhileshpookkuttiyil@gmail.com",
      action: "Send Email",
      href: "mailto:akhileshpookkuttiyil@gmail.com",
      color: "text-accent",
    },
    {
      icon: "Calendar",
      title: "Schedule Call",
      description: "Book a free consultation",
      value: "30-min discovery call",
      action: "Book Now",
      href: "#", 
      color: "text-conversion-accent",
    },
    {
      icon: "MessageCircle",
      title: "Quick Chat",
      description: "Connect on LinkedIn",
      value: "@akhilesh p",
      action: "Connect",
      href: "https://www.linkedin.com/in/akhilesh-p-dev",
      color: "text-success",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-conversion-accent/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-conversion-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
            >
              <Icon name="Rocket" size={16} className="text-accent" />
              <span className="text-sm text-accent font-medium">
                Let's Build Together
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Ready to Start Your </span>
              <span className="text-gradient">Next Project?</span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Let's collaborate to bring your ideas to life. Whether you need a
              complete web application, technical consultation, or ongoing
              development support, I'm here to help.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact-collaboration-hub">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-gradient-to-r from-accent to-conversion-accent hover:from-accent/90 hover:to-conversion-accent/90 shadow-glow"
                >
                  Start a Project
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="hover:bg-accent/10 hover:border-accent hover:text-accent"
              >
                Schedule Consultation
              </Button>
            </Motion.div>
          </div>

          {/* Contact Methods */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <Motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-glow hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon
                      name={method.icon}
                      size={24}
                      className={method.color}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-foreground font-medium">{method.value}</p>
                </div>
                <a
                  href={method.href}
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
                >
                  <span className="text-sm font-medium">{method.action}</span>
                  <Icon name="ArrowRight" size={16} />
                </a>
              </Motion.div>
            ))}
          </Motion.div>

          {/* Newsletter */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 text-center"
          >
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="mb-6">
                <Icon
                  name="Bell"
                  size={32}
                  className="text-accent mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                  Join My Dev Journal
                </h3>
                <p className="text-muted-foreground text-center text-sm sm:text-base">
                  Be the first to know about my latest projects, personal coding
                  tips, and insights from my journey as a developer. One email a
                  week. Zero spam.
                </p>
              </div>

              {/* Subscription Form */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  variant="default"
                  iconName={isSubscribed ? "Check" : "Send"}
                  iconPosition="right"
                  className={`transition-all duration-300 ${
                    isSubscribed
                      ? "bg-success hover:bg-success/90"
                      : "bg-gradient-to-r from-accent to-conversion-accent hover:from-accent/90 hover:to-conversion-accent/90"
                  }`}
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>

              {/* Success Message */}
              {isSubscribed && (
                <Motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-success text-sm mt-4 text-center"
                >
                  You're in! I'll keep you posted with valuable insights and
                  updates.
                </Motion.p>
              )}

              {/* Trust & Credibility Indicators */}
              <div className="flex items-center justify-center flex-wrap gap-4 mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={16} />
                  <span>500+ devs & clients subscribed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Mail" size={16} />
                  <span>One concise email/week</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Shield" size={16} />
                  <span>Privacy respected</span>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Quick Stats */}
          {/* Quick Stats */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              {
                label: "Avg. Response Time",
                value: "< 12 hrs",
                icon: "Clock",
              },
              {
                label: "Projects Delivered",
                value: "30+",
                icon: "CheckCircle",
              },
              {
                label: "Client Satisfaction",
                value: "100%",
                icon: "Heart",
              },
              {
                label: "On-Time Delivery",
                value: "98%",
                icon: "Target",
              },
            ].map((stat, index) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-5 rounded-xl border border-border bg-muted/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon
                  name={stat.icon}
                  size={22}
                  className="text-conversion-accent mx-auto mb-2"
                />
                <div className="text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
