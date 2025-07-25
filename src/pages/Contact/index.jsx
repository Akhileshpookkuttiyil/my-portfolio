import React from "react";
import Header from "../../components/UI/Header";
import Contact from "./Components/Contact";
import Footer from "../../components/UI/Footer";
import ContactMethods from "./Components/ContactMethods";

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-10">
        <Contact />
        <ContactMethods />
      </main>
      <Footer />
    </div>
  );
};

export default ContactSection;
