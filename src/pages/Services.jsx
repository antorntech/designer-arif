import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Services = () => {
  const [myQualityServices, setmyQualityServices] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/servicecategory")
      .then((res) => res.json())
      .then((data) => setmyQualityServices(data));
  }, []);

  return (
    <>
      <PageHeader title="Services" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        className="w-full h-full md:w-[472px] md:h-[400px] rounded-b-[10%] rounded-br-[10%] rounded-bl-[10%] hover:scale-125 object-fit transition-all duration-500"
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

export default Services;
