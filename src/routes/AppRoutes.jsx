import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ScrlTopOfPage from "../components/scrlTopOfPage/ScrlTopOfPage";
import Projects from "../pages/Projects";
import SingleServices from "../pages/SingleServices";
import SingleProject from "../pages/SingleProject";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<SingleServices />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
