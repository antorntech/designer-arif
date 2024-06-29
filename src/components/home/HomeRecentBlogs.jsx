import React from "react";
import { Link } from "react-router-dom";

const HomeRecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "blog01.jpg",
      comments: "No Comments",
    },
    {
      id: 2,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "blog02.jpg",
      comments: "No Comments",
    },
    {
      id: 3,
      title: "How to use React Hooks in React Native",
      category: "Logo Design",
      date: "2022-01-01",
      thumbnail: "blog03.jpg",
      comments: "No Comments",
    },
  ];
  return (
    <>
      <section
        className="py-6 md:py-[50px] lg:py-[100px]"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold py-2">
              My Recent Blogs
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={blog.thumbnail}
                    className="w-full group-hover:scale-125 transition-all duration-300"
                    alt=""
                  />
                  <div className="w-full h-full p-5 absolute top-0 left-0">
                    <div className="flex flex-col items-start justify-between gap-5 h-full">
                      <span className="text-white bg-[#002D3B] backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-4">
                        {blog.category}
                      </span>
                      <div className="w-full bg-[#002D3B] rounded-md px-4 py-2 group-hover:bg-gradient-to-r from-slate-900 to-cyan-900 transition-all duration-300">
                        <div className="flex items-center gap-5 pb-2">
                          <div className="flex items-center gap-2 text-[#3e6fb3] text-sm">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>{blog.date}</p>
                          </div>
                          <div className="flex items-center gap-2 text-[#3e6fb3] text-sm">
                            <i className="fa-regular fa-comments"></i>
                            <p>{blog.comments}</p>
                          </div>
                        </div>
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

export default HomeRecentBlogs;
