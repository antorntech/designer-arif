import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/herocontent")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const phoneNumber = "+8801996774893";
  const message = "Hello, I'm interested in your work!";
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="h-[80vh] md:h-[83vh] mt-[20px] md:mt-0">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="-mt-[45px] md:mt-0 mr-auto place-self-center lg:col-span-6">
            <h1 className="text-gradient text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight py-5">
              {data[0]?.title
                ? data[0]?.title
                : "Visualize Your Brand with Professional Design Solutions"}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {data[0]?.description
                ? data[0]?.description
                : "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"}
            </p>
            <div className="mt-6 md:mt-12 flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="border-[2px] border-[#60efff] px-8 py-2 md:py-4 hover:bg-gradient-to-r from-[#5BEFF9] via-[#38F6CD] to-[#04FE8C] font-semibold rounded-full text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Contact With Me</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="https://www.facebook.com/helloarif0?mibextid=ZbWKwL"
                  target="_blank"
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:hover:bg-gradient-to-r from-[#5BEFF9] via-[#38F6CD] to-[#04FE8C] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i className="fa fa-solid fa-facebook text-white text-lg"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/helloarif"
                  target="_blank"
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:hover:bg-gradient-to-r from-[#5BEFF9] via-[#38F6CD] to-[#04FE8C] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i className="fa fa-solid fa-linkedin text-white text-lg"></i>
                </Link>
                <Link
                  to="/"
                  onClick={handleClick}
                  className="border-[2px] border-[#60efff] w-12 h-12 flex justify-center items-center hover:hover:bg-gradient-to-r from-[#5BEFF9] via-[#38F6CD] to-[#04FE8C] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-full text-white"
                >
                  <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-6 lg:flex">
            <img
              src={`https://api.designerarif.com/${data[0]?.banner}`}
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
