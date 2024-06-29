import React, { useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/contactform/ContactForm";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-12">
            <div className="border-2 border-gray-600 p-5 bg-[#123641] md:bg-[#002d3b80] rounded-md">
              <h1 className="text-2xl md:text-4xl font-bold text-gradient ">
                Get in touch
              </h1>
              <div className="mb-5 w-[100px] h-[3px] bg-gradient-to-r from-[#4AF3E3] via-[#4AF3E3] to-[#4af38b]"></div>
              <ContactForm />
            </div>
            <div className="hidden mx-auto md:flex flex-col justify-center items-start gap-8">
              <img
                src="contactillustration.png"
                alt=""
                className="w-full md:w-[570px] h-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
