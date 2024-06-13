import React from "react";

const HomeQualityService = () => {
  const services = [
    {
      id: 1,
      img: "service01.png",
      title: "Logo Design",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
    {
      id: 2,
      img: "service01.png",
      title: "Print Design",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
    {
      id: 3,
      img: "service01.png",
      title: "Packaging Design",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
    {
      id: 4,
      img: "service01.png",
      title: "Brand Style Guide",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
    {
      id: 5,
      img: "service01.png",
      title: "Stationery Design",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
    {
      id: 6,
      img: "service01.png",
      title: "Design Consultation",
      description:
        "Corporis necessitatibus consequatur dicta atque magni officiis alias.",
    },
  ];
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold">
              My Quality Service
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-6 md:gap-12 lg:gap-y-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-[2px] border-[#60efff57] text-center hover:bg-[#60efff57] p-5 rounded-md transition-all duration-300 flex flex-col items-center gap-3"
              >
                <img src={service.img} alt="" className="mx-auto w-[100px]" />
                <h1 className="text-white font-semibold text-2xl">
                  {service.title}
                </h1>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeQualityService;
