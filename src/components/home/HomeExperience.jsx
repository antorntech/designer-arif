import React, { useEffect, useState } from "react";

const HomeExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/experience")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/certification")
      .then((res) => res.json())
      .then((data) => setCertifications(data));
  }, []);

  return (
    <section
      className="py-6 md:py-[50px] lg:py-[100px]"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-medal text-gradient text-5xl"></i>
              <h1 className="text-gradient text-2xl md:text-6xl font-bold">
                My Experience
              </h1>
            </div>
            <div className="w-full mt-8 flex flex-col items-center gap-5">
              {experiences.map((experience) => {
                return (
                  <div
                    className="w-full mt-3 blurry p-5 hover:bg-slate-800 transition-all duration-300"
                    key={experience._id}
                  >
                    <p className="text-white font-semibold">
                      {experience.starttime} - {experience.endtime}
                    </p>
                    <p className="text-gradient text-xl md:text-3xl">
                      {experience.title}
                    </p>
                    <p className="text-white">{experience.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-gradient text-5xl"></i>
              <h1 className="text-gradient text-2xl md:text-6xl font-bold">
                My Certification
              </h1>
            </div>
            <div className="w-full mt-8 flex flex-col items-center gap-5">
              {certifications.map((certification) => {
                return (
                  <div
                    className="w-full mt-3 blurry p-5 hover:bg-slate-800 transition-all duration-300"
                    key={certification._id}
                  >
                    <p className="text-white font-semibold">
                      {certification.starttime} - {certification.endtime}
                    </p>
                    <p className="text-gradient text-xl md:text-3xl">
                      {certification.title}
                    </p>
                    <p className="text-white">{certification.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
