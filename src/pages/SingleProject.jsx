import React from "react";
import PageHeader from "../components/pageheader/PageHeader";

const SingleProject = () => {
  const project = {
    name: "Project 1",
    thumbnail: "projects01.png",
    projectsGallery: [
      "/images/3dmodeling01.png",
      "/images/3dmodeling02.png",
      "/images/3dmodeling03.png",
      "/images/3dmodeling04.png",
      "/images/3dmodeling01.png",
    ],
  };
  return (
    <>
      <PageHeader title={project.name} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div>
            <h1>Project Details</h1>
            <p>You can find details about this project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.projectsGallery.map((project) => (
              <div
                key={project}
                className="w-full group overflow-hidden relative rounded-md"
              >
                <img
                  src={project}
                  className="w-full group-hover:scale-125 transition-all duration-300"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
