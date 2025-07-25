import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-background">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-conversion-accent/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* Text Intro */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <Motion.div variants={fadeInUp}>
            <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-success text-sm font-medium">
                Available for New Projects
              </span>
            </div>
          </Motion.div>

          <Motion.h1
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Let's Build Something</span>
            <br />
            <span className="text-gradient">Amazing Together</span>
          </Motion.h1>

          <Motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Ready to transform your ideas into exceptional digital experiences?
            I'm here to collaborate, consult, and create solutions that drive
            real results for your business.
          </Motion.p>

          {/* Quick Stats */}
          <Motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { label: "Response Time", value: "24h", color: "accent" },
              {
                label: "Projects Delivered",
                value: "20+",
                color: "conversion-accent",
              },
              { label: "Client Satisfaction", value: "90%", color: "success" },
            ].map(({ label, value, color }) => (
              <div key={label} className="text-center">
                <div className={`text-2xl font-bold text-${color} mb-1`}>
                  {value}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
