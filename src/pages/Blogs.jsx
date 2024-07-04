import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <PageHeader title="Blogs" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog._id}`} key={blog._id}>
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={`https://api.designerarif.com/${blog?.banner}`}
                    className="w-full md:w-[410px] md:h-[370px] group-hover:scale-125 transition-all duration-300"
                    alt=""
                  />
                  <div className="w-full h-full p-5 absolute bottom-[-5px] left-0 bg-gradient-to-t from-[#002D3B] via-[#002d3bb0] to-transparent">
                    <div className="flex flex-col items-start justify-end gap-5 h-full">
                      <div className="w-full px-4 py-2">
                        <h2 className="text-white text-2xl font-semibold">
                          {blog?.title}
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
