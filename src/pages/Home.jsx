import React from "react";
import HeroSection from "../components/home/HeroSection";
import HomeTaskSection from "../components/home/HomeTaskSection";
import HomeQualityService from "../components/home/HomeQualityService";
import HomeRecentWork from "../components/home/HomeRecentWork";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeTaskSection />
      <HomeQualityService />
      <HomeRecentWork />
    </>
  );
};

export default Home;
