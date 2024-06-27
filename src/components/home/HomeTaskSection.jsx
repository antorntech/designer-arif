import React from "react";
import CountUp from "react-countup";

const HomeTaskSection = () => {
  return (
    <>
      <div className="rounded-md bg-gradient-to-r from-[#5bf0f869] via-[#38f6cd88] to-[#04fe8e91] p-1 bg-[#22fab211] w-full h-full grid max-w-screen-xl py-8 mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={5}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={50}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Project <br /> Completed
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={1}
              duration={5}
              suffix="K"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Happy <br /> Clients
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-bold mx-auto">
            <CountUp
              end={5}
              duration={5}
              suffix="+"
              className="text-xl md:text-5xl"
            />
            <p className="text-md md:text-2xl font-bold">
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTaskSection;
