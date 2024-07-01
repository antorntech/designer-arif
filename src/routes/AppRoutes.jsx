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
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import AnimatedCursor from "../components/AnimatedCursor/AnimatedCursor";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <AnimatedCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<SingleServices />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
