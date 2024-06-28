import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      thumbnail: "projects01.png",
      link: "/",
    },
    {
      id: 2,
      name: "Project 2",
      thumbnail: "projects02.png",
      link: "/",
    },
    {
      id: 3,
      name: "Project 3",
      thumbnail: "projects03.png",
      link: "/",
    },
    {
      id: 4,
      name: "Project 4",
      thumbnail: "projects04.png",
      link: "/",
    },
    {
      id: 5,
      name: "Project 5",
      thumbnail: "projects05.png",
      link: "/",
    },
    {
      id: 6,
      name: "Project 6",
      thumbnail: "projects06.png",
      link: "/",
    },
  ];
  return (
    <>
      <PageHeader title="Projects" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className="w-full h-full"
              >
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={project.thumbnail}
                    className="w-full group-hover:scale-125 transition-all duration-300"
                    alt=""
                  />
                  <div className="w-full h-full p-5 absolute bottom-[-5px] left-0 bg-gradient-to-t from-[#002D3B] via-[#002d3b56] to-transparent">
                    <div className="flex flex-col items-start justify-end gap-5 h-full">
                      <div className="w-full px-4 py-2">
                        <h2 className="text-white text-2xl font-semibold">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
