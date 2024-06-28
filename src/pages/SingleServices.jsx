import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link, useLocation } from "react-router-dom";

const SingleServices = () => {
  const alllogodesigns = [
    {
      id: 2,
      name: "Logo Design 1",
      thumbnail: "/images/logodesign01.png",
      link: "/",
    },
    {
      id: 1,
      name: "Logo Design 2",
      thumbnail: "/images/logodesign02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Logo Design 3",
      thumbnail: "/images/logodesign03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Logo Design 4",
      thumbnail: "/images/logodesign04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Logo Design 5",
      thumbnail: "/images/logodesign01.png",
      link: "/",
    },
    {
      id: 6,
      name: "Logo Design 6",
      thumbnail: "/images/logodesign02.png",
      link: "/",
    },
  ];

  const allbrandings = [
    {
      id: 1,
      name: "Branding 1",
      thumbnail: "/images/branding01.png",
      link: "/",
    },
    {
      id: 2,
      name: "Branding 2",
      thumbnail: "/images/branding02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Branding 3",
      thumbnail: "/images/branding03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Branding 4",
      thumbnail: "/images/branding04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Branding 5",
      thumbnail: "/images/branding01.png",
      link: "/",
    },
    {
      id: 6,
      name: "Branding 6",
      thumbnail: "/images/branding02.png",
      link: "/",
    },
  ];

  const allPrintDesigns = [
    {
      id: 1,
      name: "Print Design 1",
      thumbnail: "/images/printdesign01.png",
      link: "/",
    },
    {
      id: 2,
      name: "Print Design 2",
      thumbnail: "/images/printdesign02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Print Design 3",
      thumbnail: "/images/printdesign03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Print Design 4",
      thumbnail: "/images/printdesign04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Print Design 5",
      thumbnail: "/images/printdesign01.png",
      link: "/",
    },
    {
      id: 6,
      name: "Print Design 6",
      thumbnail: "/images/printdesign02.png",
      link: "/",
    },
  ];

  const allSocialMedia = [
    {
      id: 1,
      name: "Social Media 1",
      thumbnail: "/images/socialmedia01.png",
      link: "/",
    },
    {
      id: 2,
      name: "Social Media 2",
      thumbnail: "/images/socialmedia02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Social Media 3",
      thumbnail: "/images/socialmedia03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Social Media 4",
      thumbnail: "/images/socialmedia04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Social Media 5",
      thumbnail: "/images/socialmedia01.png",
      link: "/",
    },
    {
      id: 6,
      name: "Social Media 6",
      thumbnail: "/images/socialmedia02.png",
      link: "/",
    },
  ];

  const allAnimations = [
    {
      id: 1,
      name: "Animation 1",
      thumbnail: "/images/animation01.png",
      link: "/",
    },
    {
      id: 2,
      name: "Animation 2",
      thumbnail: "/images/animation02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Animation 3",
      thumbnail: "/images/animation03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Animation 4",
      thumbnail: "/images/animation04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Animation 5",
      thumbnail: "/images/animation01.png",
      link: "/",
    },
    {
      id: 6,
      name: "Animation 6",
      thumbnail: "/images/animation02.png",
      link: "/",
    },
  ];

  const all3dModeling = [
    {
      id: 1,
      name: "3dmodeling 1",
      thumbnail: "/images/3dmodeling01.png",
      link: "/",
    },
    {
      id: 2,
      name: "3dmodeling 2",
      thumbnail: "/images/3dmodeling02.png",
      link: "/",
    },
    {
      id: 3,
      name: "3dmodeling 3",
      thumbnail: "/images/3dmodeling03.png",
      link: "/",
    },
    {
      id: 4,
      name: "3dmodeling 4",
      thumbnail: "/images/3dmodeling04.png",
      link: "/",
    },
    {
      id: 5,
      name: "3dmodeling 5",
      thumbnail: "/images/3dmodeling01.png",
      link: "/",
    },
    {
      id: 6,
      name: "3dmodeling 6",
      thumbnail: "/images/3dmodeling02.png",
      link: "/",
    },
  ];

  const location = useLocation();

  // Extract the pathname from the location object
  const currentPath = location.pathname;

  // Split the pathname by '/' and get the last segment
  const extractedPath = currentPath.split("/").pop();

  // Determine which data array to use based on the extracted path
  let dataToRender = [];
  if (extractedPath === "all-logo-design") {
    dataToRender = alllogodesigns;
  } else if (extractedPath === "all-branding") {
    dataToRender = allbrandings;
  } else if (extractedPath === "all-print-design") {
    dataToRender = allPrintDesigns;
  } else if (extractedPath === "all-social-media") {
    dataToRender = allSocialMedia;
  } else if (extractedPath === "all-animation") {
    dataToRender = allAnimations;
  } else if (extractedPath === "all-3d-modeling") {
    dataToRender = all3dModeling;
  }

  return (
    <>
      <PageHeader title={extractedPath} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataToRender.length > 0 ? (
              dataToRender.map((data) => (
                <Link to={data.link} key={data.id} className="w-full h-full">
                  <div className="w-full group overflow-hidden relative rounded-md">
                    <img
                      src={data?.thumbnail}
                      className="w-full group-hover:scale-125 transition-all duration-300"
                      alt={data.name}
                    />
                    <div className="w-full h-full p-5 absolute bottom-[-5px] left-0 bg-gradient-to-t from-[#002D3B] via-[#002d3b56] to-transparent">
                      <div className="flex flex-col items-start justify-end gap-5 h-full">
                        <div className="w-full px-4 py-2">
                          <h2 className="text-white text-2xl font-semibold">
                            {data.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No data available for the current path.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServices;
