import React from "react";
import Header from "../../components/UI/Header";
import ProjectShowcaseGrid from "./components/ProjectsSection";

const Project = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectShowcaseGrid />
    </div>
  );
};

export default Project;
