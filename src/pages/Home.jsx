import React from "react";
import HeroSection from "../components/home/HeroSection";
import HomeTaskSection from "../components/home/HomeTaskSection";
import HomeQualityService from "../components/home/HomeQualityService";
import HomeRecentWork from "../components/home/HomeRecentWork";
import HomeExperience from "../components/home/HomeExperience";
import HomeSkills from "../components/home/HomeSkills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeTaskSection />
      <HomeQualityService />
      <HomeRecentWork />
      <HomeExperience />
      <HomeSkills />
    </>
  );
};

export default Home;
