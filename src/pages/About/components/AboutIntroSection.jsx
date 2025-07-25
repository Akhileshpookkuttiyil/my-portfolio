import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/UI/Button";
import profileImage from "../../../assets/images/profile.png";

const AboutIntroSection = () => {
  const handleSmoothScroll = () => {
    const nextSection = document.getElementById("experience");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 scroll-smooth pb-5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-conversion-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent to-conversion-accent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                <Icon name="Code2" size={16} className="mr-2" />
                Full-Stack Developer & Problem Solver
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Akhilesh P</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Bridging technical excellence with collaborative problem-solving
                to create digital experiences that matter.
              </p>
            </div>

            {/* Philosophy Statement */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-conversion-accent rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={20} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  My Philosophy
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Great software isn't just about clean code—it's about
                understanding people, solving real problems, and building
                bridges between complex technical solutions and human needs.
                Every line of code should serve a purpose, every feature should
                add value, and every project should leave the world a little bit
                better."
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {[
                { value: "1+", label: "Year Experience" },
                { value: "25+", label: "Projects Delivered" },
                { value: "15+", label: "Technologies" },
              ].map((item, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-gradient-to-r from-accent to-conversion-accent hover:from-accent/90 hover:to-conversion-accent/90"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-dramatic">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-conversion-accent/20 z-10"></div>
                <Image
                  src={profileImage}
                  alt="Akhilesh P - Full-Stack Developer"
                  className="w-full h-full object-fill"
                  loading="lazy"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent to-conversion-accent rounded-2xl flex items-center justify-center shadow-glow animate-bounce">
                <Icon name="Code" size={24} color="white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center shadow-glow">
                <Icon name="Coffee" size={20} className="text-accent" />
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-accent/10 to-conversion-accent/10 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={handleSmoothScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll to know more</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
