import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[80px] border-t-2 border-[#383838]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img src="/images/s.png" alt="" className="mb-6 w-72" />
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
                  to="/projects"
                  className="text-cyan-600 hover:text-cyan-500 transition-all duration-300"
                >
                  Projects
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
