import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog01.jpg",
      comments: "No Comments",
    },
    {
      id: 2,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog02.jpg",
      comments: "No Comments",
    },
    {
      id: 3,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog03.jpg",
      comments: "No Comments",
    },
    {
      id: 4,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog04.png",
      comments: "No Comments",
    },
    {
      id: 5,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog05.png",
      comments: "No Comments",
    },
    {
      id: 6,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "/images/blog06.png",
      comments: "No Comments",
    },
  ];
  return (
    <>
      <PageHeader title="Blogs" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={blog.thumbnail}
                    className="w-full group-hover:scale-125 transition-all duration-300"
                    alt=""
                  />
                  <div className="w-full h-full p-5 absolute bottom-[-5px] left-0 bg-gradient-to-t from-[#002D3B] via-[#002d3bb0] to-transparent">
                    <div className="flex flex-col items-start justify-end gap-5 h-full">
                      <div className="w-full px-4 py-2">
                        <h2 className="text-white text-2xl font-semibold">
                          {blog.title}
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

export default Blogs;
