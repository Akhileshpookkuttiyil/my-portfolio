import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
// import { motion } from "framer-motion"; // Optional if using animation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const navigationItems = [
    { name: "Home", path: "/", icon: "Home" },
    {
      name: "Projects",
      path: "/projects",
      icon: "FolderOpen",
    },
    { name: "About", path: "/about", icon: "User" },
    {
      name: "Contact",
      path: "/contact",
      icon: "MessageCircle",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-glow"
          : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group transition-smooth"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-conversion-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-conversion-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-14">
            {navigationItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-foreground bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10 flex items-center">
                      <Icon name={item.icon} size={16} className="mr-1" />
                      <span className="leading-none">{item.name}</span>
                    </span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-conversion-accent/20 rounded-lg"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-conversion-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="bg-gradient-to-r from-accent to-conversion-accent hover:from-accent/90 hover:to-conversion-accent/90"
            >
              Schedule Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-transform duration-200"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Optional: Wrap with motion.div for animated height */}
          {/* <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}> */}
          <div className="px-4 py-4 bg-card/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = activePath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10 border border-accent/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon name={item.icon} size={18} />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                fullWidth
                className="justify-center"
              >
                View GitHub
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                fullWidth
                className="justify-center bg-gradient-to-r from-accent to-conversion-accent hover:from-accent/90 hover:to-conversion-accent/90"
              >
                Schedule Call
              </Button>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
