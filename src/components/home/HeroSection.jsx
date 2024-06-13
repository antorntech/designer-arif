import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../../assets/banner.json";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section class="h-screen">
        <div class="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="-mt-[45px] md:mt-0 mr-auto place-self-center lg:col-span-7">
            <h1 class="text-gradient text-2xl md:text-4xl lg:text-7xl font-bold tracking-tight py-5">
              Visualize Your Brand with Professional Design Solutions
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="mt-6 md:mt-12 flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="border-[2px] border-[#60efff] px-8 py-4 hover:bg-[#60efff] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white w-full flex justify-center items-center md:w-[250px] gap-2"
              >
                <span>Contact With Me</span>
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:bg-[#60efff] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i class="fa fa-solid fa-facebook text-white text-lg"></i>
                </Link>
                <Link
                  to="/"
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:bg-[#60efff] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i class="fa fa-solid fa-linkedin text-white text-lg"></i>
                </Link>
                <Link
                  to="/"
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:bg-[#60efff] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i class="fa fa-solid fa-globe text-white text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="hero-banner.png"
              alt="mockup"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
