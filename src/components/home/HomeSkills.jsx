import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const HomeSkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="py-6 md:py-[50px] lg:py-[100px]">
      <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-gradient text-2xl md:text-6xl font-bold">
            My Skills
          </h1>
          <p className="text-white w-full md:w-1/2 mx-auto mt-3">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
        </div>
        <div
          className="w-full rounded-md flex flex-col md:flex-row items-center justify-center gap-5"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          {skills.map((skill) => (
            <div
              className="w-full flex items-center gap-5 rounded-md"
              key={skill.id}
            >
              <div className="w-full text-center">
                <div className="blurry group p-5 hover:bg-slate-800 transition-all duration-300 flex flex-col items-center gap-2">
                  <img
                    src={`https://api.designerarif.com/${skill.skillphoto}`}
                    alt=""
                    className="w-20 h-20 group-hover:grayscale group-hover:scale-[1.1] transition-all duration-300"
                  />
                  <CountUp
                    end={skill.percentance}
                    duration={5}
                    suffix="%"
                    className="text-white text-xl mt-3"
                  />
                  <p className="text-2xl font-semibold mt-2 text-gradient">
                    {skill.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
