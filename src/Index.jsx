import { useEffect } from "react";
import Header from "./components/UI/Header";

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
      <Header/>
    </div>
  );
};

export default Home;
