import React from "react";
import { Link } from "react-router-dom";

const HomeRecentBlogs02 = () => {
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
                  <div className="w-full h-full p-5 absolute top-0 left-0 bg-gradient-to-t from-[#002D3B] via-[rgba(121,121,121,0.16)] to-transparent">
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

export default HomeRecentBlogs02;
