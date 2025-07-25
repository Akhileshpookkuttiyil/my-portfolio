import { useEffect } from "react";
import Header from "../../components/UI/Header";
import HeroSection from "./components/HeroSection";
import InteractiveCodeDemo from "./components/InteractiveCodeDemo";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsPreview from "./components/SkillsPreview";
import ContactCTA from "./components/ContactCTA";
import Footer from "../../components/UI/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Akhilesh P - Full-Stack Developer | Modern Web Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experienced full-stack developer specializing in React, Node.js, and cloud architecture. Building scalable web applications with modern technologies."
      );
    }
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        {/* Interactive MERN code Section */}
        <InteractiveCodeDemo />
        {/* Projects Section */}
        <FeaturedProjects />
        {/* Known Skills Section */}
        <SkillsPreview />
        {/* Contact Section */}
        <ContactCTA />
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
