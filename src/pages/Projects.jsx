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
                to={project.link}
                key={project.id}
                className="w-full h-full"
              >
                <div
                  key={project.id}
                  className="w-full h-full flex flex-col items-center justify-center gap-2"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className="text-center text-white">{project.name}</p>
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
