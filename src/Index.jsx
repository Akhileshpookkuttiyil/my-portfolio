import { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "./components/UI/Header";
import HeroSection from "./pages/HomePage/HeroSection";
import InteractiveCodeDemo from "./pages/HomePage/components/InteractiveCodeDemo";
import FeaturedProjects from "./pages/HomePage/components/FeaturedProjects";
import SkillsPreview from "./pages/HomePage/components/SkillsPreview";
import ContactCTA from "./pages/HomePage/components/ContactCTA";

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
      </main>

      {/* Footer */}
      <Motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card border-t border-border py-12 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-conversion-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
                <span className="text-xl font-bold text-gradient">
                  Akhilesh P
                </span>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                Full-stack developer passionate about creating exceptional
                digital experiences with modern technologies and clean,
                maintainable code.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/project-case-studies-portfolio"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/professional-journey-about"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:akhileshpookkuttiyil@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    hello@akhileshp.dev
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact-collaboration-hub"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    Contact Form
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    Schedule Call
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/akhilesh-p-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Akhilesh P. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <div className="h-4 border-l border-border" />
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <div className="h-4 border-l border-border" />
              <a
                href="#"
                className="hover:text-accent transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </Motion.footer>
    </div>
  );
};

export default Home;
