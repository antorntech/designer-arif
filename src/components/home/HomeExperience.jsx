import React from "react";

const HomeExperience = () => {
  const experiences = [
    {
      id: 1,
      date: "2022 - Present",
      title: "UI/UX Designer",
      location: "Blockdots, London",
    },
    {
      id: 2,
      date: "2021 - 2022",
      title: "Logo Design Course",
      location: "Parsons, The New School",
    },
    {
      id: 3,
      date: "2020 - 2021",
      title: "Senior Graphic Designer",
      location: "House of Life, Leeds",
    },
    {
      id: 4,
      date: "2018 - 2020",
      title: "Junior Graphic Designer",
      location: "Theme Junction, Bursa",
    },
  ];

  const educations = [
    {
      id: 1,
      date: "2022 - Present",
      title: "UI/UX Designer",
      location: "Blockdots, London",
    },
    {
      id: 2,
      date: "2021 - 2022",
      title: "Logo Designer",
      location: "Parsons, The New School",
    },
    {
      id: 3,
      date: "2020 - 2021",
      title: "UI/UX Design Course",
      location: "House of Life, Leeds",
    },
    {
      id: 4,
      date: "2018 - 2020",
      title: "Logo Design Course",
      location: "Theme Junction, Bursa",
    },
  ];
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
                    key={experience.id}
                  >
                    <p className="text-white font-semibold">
                      {experience.date}
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
              {educations.map((education) => {
                return (
                  <div
                    className="w-full mt-3 blurry p-5 hover:bg-slate-800 transition-all duration-300"
                    key={education.id}
                  >
                    <p className="text-white font-semibold">{education.date}</p>
                    <p className="text-gradient text-xl md:text-3xl">
                      {education.title}
                    </p>
                    <p className="text-white">{education.location}</p>
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
