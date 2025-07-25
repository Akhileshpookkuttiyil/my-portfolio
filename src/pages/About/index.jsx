import React from "react";
import Header from "../../components/UI/Header";
import AboutIntroSection from "./components/AboutIntroSection";
import TimelineSection from "./components/TimelineSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutIntroSection />
      <TimelineSection />
    </div>
  );
};

export default About;
