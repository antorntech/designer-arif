import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [mainLogo, setMainLogo] = useState("");

  const getSettings = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await fetch(
        "https://api.designerarif.com/api/v1/settings",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMainLogo(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  const year = new Date().getFullYear();
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[80px] border-t-2 border-[#383838]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img
              src={
                mainLogo
                  ? `https://api.designerarif.com${mainLogo.logoPic}`
                  : "/images/s.png"
              }
              alt=""
              className="mb-6"
              width={150}
            />
            <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-12">
              <li>
                <Link
                  to="/"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-gray-300 mt-8 text-center">
              © {year} Site Designed & Developed by{" "}
              <Link
                to="https://antors.netlify.app/"
                target="_blank"
                className="text-cyan-500 underline"
              >
                AM ANTOR
              </Link>{" "}
              - All Rights Reserved by{" "}
              <span className="text-gradient">Designer Arif Hossain</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
