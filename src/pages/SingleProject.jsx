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
          <div className="mb-8">
            <h1 className="text-2x md:text-4xl text-gradient font-bold">
              Project Details
            </h1>
            <p className="mt-2 text-gray-300">
              You can find details about this project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.projectsGallery.map((project) => (
              <div
                key={project}
                className="w-full group overflow-hidden relative rounded-md"
              >
                <img src={project} className="w-full" alt="" />
              </div>
            ))}
          </div>
          <div>
            <p className="mt-8 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              numquam totam repellat odit ea suscipit. Molestias voluptas,
              ratione, officiis animi error alias eligendi aperiam aut beatae
              velit culpa? Magni, sit iusto. Aperiam architecto corporis enim
              qui ab itaque alias dolorum, placeat molestias vero aliquid saepe
              a illo unde excepturi ducimus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
