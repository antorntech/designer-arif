import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const recentblogs = [
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
  ];
  return (
    <>
      <PageHeader title={`Blog Details`} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 w-full">
              <img
                src="/blogdetailsbanner.png"
                alt=""
                className="w-full rounded-md"
              />
              <h1 className="text-white text-2xl md:text-4xl font-bold mt-8">
                How to use React Hooks in React Native
              </h1>
              <p className="text-sm md:text-base text-gray-300 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                placeat! Similique ducimus incidunt unde soluta, ipsa minima in
                deserunt pariatur cumque quod ex illo asperiores nam dignissimos
                nulla assumenda maxime quo voluptatum ratione saepe fugit amet.
                Voluptatibus corrupti sint impedit doloribus incidunt architecto
                culpa quam, illo deleniti ipsum, dolor libero dicta praesentium
                animi laborum rerum iure rem dolore aliquid, qui eaque
                voluptatem laudantium. Debitis vel cupiditate tempora
                repellendus ipsum dolores, eos aperiam fugiat pariatur, in ea
                nobis? Accusamus eos a adipisci nam consequatur soluta iste cum
                eaque delectus nesciunt sed nemo dicta distinctio magni non,
                dolores dolore laborum aspernatur? Corporis.
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-gradient text-2xl md:text-4xl font-bold mb-8">
                Recent Blogs
              </h1>
              <div className="grid grid-cols-1 gap-8">
                {recentblogs.map((blog) => (
                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div key={blog.id} className="grid grid-cols-3 gap-5">
                      <div className="col-span-1 w-full">
                        <img
                          src={blog.thumbnail}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <div className="w-full h-full flex flex-col justify-between">
                          <h1 className="text-md text-white">{blog.title}</h1>
                          <div className="flex items-center justify-between">
                            <p className="text-gray-400">Arif Hossain</p>
                            <p className="text-gray-400">8 Aug, 2022</p>
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
