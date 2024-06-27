import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-12">
            <div className="hidden mx-auto md:flex flex-col justify-center items-start gap-8">
              <img
                src="contactillustration.png"
                alt=""
                className="w-full md:w-[570px] h-[520px] object-contain"
              />
            </div>
            <div className="border-2 border-gray-600 p-5 bg-[#123641] md:bg-[#002d3b80] rounded-md">
              <h1 className="text-2xl md:text-4xl font-bold text-gradient ">
                Get in touch
              </h1>
              <div className="mb-5 w-[100px] h-[3px] bg-gradient-to-r from-[#4AF3E3] via-[#4AF3E3] to-[#4af38b]"></div>
              <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <input
                  className="w-full p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
                <input
                  className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
                <select className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                  <option
                    disabled
                    className="w-full mt-3 p-3 rounded-md bg-[#eef8ff80] border-[1px] border-gray-700 text-white focus:outline-none"
                  >
                    Please choose an option
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    Logo Design
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    Branding
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    Print Design
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    Social Media
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    Animation
                  </option>
                  <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
                    3D Modeling
                  </option>
                </select>
              </div>
              <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
                <textarea
                  rows="5"
                  className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="w-full mt-5 flex  items-center gap-5">
                <button className="mt-3 p-3 bg-gradient-to-r from-[#2d90a1] to-[#04466d] hover:from-[#04466d] hover:to-[#2d90a1] rounded-md text-white transition-all duration-500">
                  Send Message ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
