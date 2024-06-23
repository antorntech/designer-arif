import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
