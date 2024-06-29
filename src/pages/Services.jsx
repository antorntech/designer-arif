import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Services = () => {
  const myQualityServices = [
    {
      id: 1,
      category: "trending",
      thumbnail: "logodesign.png",
      title: "Logo Design",
      link: "/all-logo-design",
      description: "Project was about precision and information.",
    },
    {
      id: 2,
      category: "trending",
      thumbnail: "branding.png",
      title: "Branding",
      link: "/all-branding",
      description: "Project was about precision and information.",
    },
    {
      id: 3,
      category: "trending",
      thumbnail: "printdesign.png",
      title: "Print Design",
      link: "/all-print-design",
      description: "Project was about precision and information.",
    },
    {
      id: 4,
      category: "featured",
      thumbnail: "socialmedia.png",
      title: "Social Media",
      link: "/all-social-media",
      description: "Project was about precision and information.",
    },
    {
      id: 5,
      category: "logodesign",
      thumbnail: "animation.png",
      title: "Animation",
      link: "/all-animation",
      description: "Project was about precision and information.",
    },
    {
      id: 6,
      category: "logodesign",
      thumbnail: "3dmodeling.png",
      title: "3D Modeling",
      link: "/all-3d-modeling",
      description: "Project was about precision and information.",
    },
  ];

  return (
    <>
      <PageHeader title="Services" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {myQualityServices.map((data, index) => {
              return (
                <Link to={`/services${data.link}`} key={data.id}>
                  <div
                    key={index}
                    className="border-2 border-gray-600 rounded-[10%] overflow-hidden"
                  >
                    <h1 className="text-white text-3xl text-center font-semibold p-5">
                      {data.title}
                    </h1>
                    <div className="overflow-hidden">
                      <img
                        src={data.thumbnail}
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

export default Services;
