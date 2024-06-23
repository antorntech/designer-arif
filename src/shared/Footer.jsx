import React from "react";

const Footer = () => {
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[80px] border-t-2 border-[#383838]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img src="logo-white.png" alt="" className="mb-6 w-56" />
            <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-12">
              <li>
                <a
                  href="#"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-gray-300 mt-8">
              © 2024 All Rights Reserved by AM ANTOR
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
