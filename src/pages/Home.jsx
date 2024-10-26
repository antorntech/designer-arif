import React from "react";
import HeroSection from "../components/home/HeroSection";
import HomeTaskSection from "../components/home/HomeTaskSection";
import HomeQualityService from "../components/home/HomeQualityService";
import HomeRecentWork from "../components/home/HomeRecentWork";
import HomeExperience from "../components/home/HomeExperience";
import HomeSkills from "../components/home/HomeSkills";
import HomeClientStories from "../components/home/HomeClientStories";
import HomeContacts from "../components/home/HomeContacts";
import HomeRecentBlogs02 from "../components/home/HomeRecentBlogs02";
import HomeSlider from "../components/home/HomeSlider";
import VideoAnimation from "../components/home/VideoAnimation";

const Home = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <HomeSlider />
      <HomeTaskSection />
      <HomeQualityService />
      <HomeRecentWork />
      <HomeExperience />
      <HomeSkills />
      <VideoAnimation />
      <HomeClientStories />
      <HomeRecentBlogs02 />
      <HomeContacts />
    </>
  );
};

export default Home;
