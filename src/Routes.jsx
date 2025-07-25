import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/HomePage/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
