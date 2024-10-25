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
import HomeSuccessStory from "../components/home/HomeSuccessStory";

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
      <HomeSuccessStory />
      <HomeClientStories />
      <HomeRecentBlogs02 />
      <HomeContacts />
    </>
  );
};

export default Home;
