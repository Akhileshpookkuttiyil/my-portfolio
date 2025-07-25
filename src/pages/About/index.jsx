import React from "react";
import Header from "../../components/UI/Header";
import AboutIntroSection from "./components/AboutIntroSection";
import TimelineSection from "./components/TimelineSection";
import TechnicalPhilosophySection from "./components/TechnicalPhilosophySection";
import Footer from "../../components/UI/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutIntroSection />
      <TimelineSection />
      <TechnicalPhilosophySection />
      <Footer />
    </div>
  );
};

export default About;
