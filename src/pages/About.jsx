import React from "react";
import PageHeader from "../components/pageheader/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader title="About" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4"></div>
      </section>
    </>
  );
};

export default About;
