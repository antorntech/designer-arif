import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const HomeTaskSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/tasklist")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="rounded-md md:bg-gradient-to-r from-[#5bf0f846] via-[#38f6cd5b] to-[#04fe8e5b] p-1 md:bg-[#22fab211] w-full h-full grid max-w-screen-xl py-8 mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-2 text-white font-bold mx-auto"
            >
              <CountUp
                end={item?.value}
                duration={5}
                suffix="+"
                className="text-5xl"
              />
              <span className="text-md md:text-2xl font-bold">
                {item.label.split(" ").map((word, index, wordsArray) => (
                  <React.Fragment key={index}>
                    {index > 0 && (index !== 1 || wordsArray.length === 2) && (
                      <br />
                    )}{" "}
                    {word}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeTaskSection;
