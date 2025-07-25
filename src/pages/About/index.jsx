import React from "react";
import Header from "../../components/UI/Header";
import AboutIntroSection from "./components/AboutIntroSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutIntroSection />
    </div>
  );
};

export default About;
