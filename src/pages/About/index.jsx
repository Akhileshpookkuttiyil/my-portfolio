import React from "react";
import Header from "../../components/UI/Header";
import AboutIntroSection from "./components/AboutIntroSection";
import TimelineSection from "./components/TimelineSection";
import Footer from "../../components/UI/Footer";
import SkillsSection from "./components/SkillsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutIntroSection />
      <TimelineSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default About;
