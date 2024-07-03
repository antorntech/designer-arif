import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeQualityService = () => {
  const [myQualityServices, setmyQualityServices] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/servicecategory")
      .then((res) => res.json())
      .then((data) => setmyQualityServices(data));
  }, []);

  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold">
              My Quality Services
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            {myQualityServices?.map((data) => {
              return (
                <Link to={`/services/${data?.link}`} key={data?.id}>
                  <div className="border-2 border-gray-600 rounded-[10%] overflow-hidden">
                    <h1 className="text-white text-2xl text-center font-semibold p-5">
                      {data?.title}
                    </h1>
                    <div className="overflow-hidden">
                      <img
                        src={`https://api.designerarif.com/${data?.thumbnail}`}
                        alt=""
                        className="rounded-b-[10%] rounded-br-[10%] rounded-bl-[10%] hover:scale-125 w-full h-full object-fit transition-all duration-500"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeQualityService;
