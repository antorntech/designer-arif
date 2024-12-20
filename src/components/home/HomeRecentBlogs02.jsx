import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeRecentBlogs02 = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/blogs/recent")
      .then((res) => res.json())
      .then((data) => setRecentBlogs(data));
  }, []);

  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            {recentBlogs.map((blog, index) => (
              <Link to={`/blog/${blog?._id}`} key={index}>
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={`https://api.designerarif.com/${blog?.banner}`}
                    className="w-full aspect-square md:w-[410px] md:h-[370px] group-hover:scale-125 transition-all duration-300"
                    alt=""
                  />
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
