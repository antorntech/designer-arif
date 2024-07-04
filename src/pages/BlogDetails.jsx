import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [tags, setTags] = useState(null); // Initialize tags as null initially

  useEffect(() => {
    fetch(`https://api.designerarif.com/api/v1/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        // Extract tags from the single string element
        if (data.tags) {
          setTags(data.tags[0]?.split(","));
        }
      });
  }, [id]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/blogs/recent")
      .then((res) => res.json())
      .then((data) => setRecentBlogs(data));
  }, []);

  return (
    <>
      <PageHeader title={`Blog Details`} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 w-full">
              <img
                src={`https://api.designerarif.com/${blog?.banner}`}
                alt=""
                className="w-full rounded-md"
              />
              <h1 className="text-white text-2xl md:text-4xl font-bold mt-8">
                {blog?.title}
              </h1>
              <p className="text-sm md:text-base text-gray-300 mt-3">
                {blog?.description}
              </p>
              <div className="w-full h-[1px] my-5 bg-gradient-to-r from-[#4AF3E3] via-[#4AF3E3] to-[#4af38b]"></div>
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold text-gray-300 my-3">
                  Tags:
                </p>
                <div className="flex items-center gap-3">
                  {tags &&
                    tags.map((tag, index) => (
                      <p
                        key={index}
                        className="text-white bg-[#1d978b] p-1 px-3 rounded-md"
                      >
                        {tag}
                      </p>
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-gradient text-2xl md:text-4xl font-bold mb-8">
                Recent Blogs
              </h1>
              <div className="grid grid-cols-1 gap-8">
                {recentBlogs.map((blog, index) => (
                  <Link key={blog._id} to={`/blog/${blog._id}`}>
                    <div key={blog.id} className="grid grid-cols-3 gap-5">
                      <div className="col-span-1 w-full">
                        <img
                          src={`https://api.designerarif.com/${blog.banner}`}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <div className="w-full h-full flex flex-col justify-between">
                          <h1 className="text-md text-white">{blog.title}</h1>
                          <div className="flex items-center justify-between">
                            <p className="text-gray-400">Arif Hossain</p>
                            <p className="text-gray-400">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
