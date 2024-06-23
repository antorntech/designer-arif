import React from "react";
import HeroSection from "../components/home/HeroSection";
import HomeTaskSection from "../components/home/HomeTaskSection";
import HomeQualityService from "../components/home/HomeQualityService";
import HomeRecentWork from "../components/home/HomeRecentWork";
import HomeExperience from "../components/home/HomeExperience";
import HomeSkills from "../components/home/HomeSkills";
import HomeClientStories from "../components/home/HomeClientStories";
import HomeRecentBlogs from "../components/home/HomeRecentBlogs";
import HomeContacts from "../components/home/HomeContacts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeTaskSection />
      <HomeQualityService />
      <HomeRecentWork />
      <HomeExperience />
      <HomeSkills />
      <HomeClientStories />
      <HomeRecentBlogs />
      <HomeContacts />
    </>
  );
};

export default Home;
