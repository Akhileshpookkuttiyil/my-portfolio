import { useEffect } from "react";
import Header from "./components/UI/Header";
import HeroSection from "./pages/HomePage/HeroSection";
import InteractiveCodeDemo from "./pages/HomePage/components/InteractiveCodeDemo";
import FeaturedProjects from "./pages/HomePage/components/FeaturedProjects";

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
      <Header />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        {/* Interactive Code Demo */}
        <InteractiveCodeDemo />
        <FeaturedProjects />
      </main>
    </div>
  );
};

export default Home;
