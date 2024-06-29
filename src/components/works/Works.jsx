import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  const [activeTab, setActiveTab] = React.useState("all");

  const openTab = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };

  const myFeaturedCourses = [
    {
      id: 1,
      category: "trending",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 2,
      category: "trending",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 3,
      category: "featured",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 4,
      category: "featured",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 5,
      category: "webdesign",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 6,
      category: "webdesign",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 7,
      category: "popular",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
    {
      id: 8,
      category: "popular",
      thumbnail: "assets/img/course/1/1.png",
      title: "Deloitte",
      description: "Project was about precision and information.",
    },
  ];

  const [reactions, setReactions] = React.useState(
    myFeaturedCourses.map(() => false)
  );

  const trendingCourses = myFeaturedCourses.filter(
    (course) => course.category === "trending"
  );
  const featuredCourses = myFeaturedCourses.filter(
    (course) => course.category === "featured"
  );
  const webDesignCourses = myFeaturedCourses.filter(
    (course) => course.category === "webdesign"
  );

  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col w-full py-10 lg:py-20">
          <div className="w-full lg:my-3">
            <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-1 gap-4 items-center">
              <div className="lg:col-span-2">
                <p className="text-gray-500 text-lg">
                  Showing 1-8 of 24 results
                </p>
              </div>
              <div className="lg:col-start-3">
                <select
                  className="tab w-full border border-gray-300 rounded-lg px-3 py-[12px] focus:outline-none"
                  value={activeTab}
                  onChange={(e) => openTab(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="trending">Trending</option>
                  <option value="featured">Featured</option>
                  <option value="webdesign">Web Design</option>
                </select>
              </div>
              <div className="lg:col-start-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search items..."
                    className="block w-full rounded-md bg-gray-200 py-[12px] pl-6 pr-20 text-base/6 text-neutral-950 ring-transparent transition placeholder:text-neutral-500 focus:border-none focus:outline-none focus:ring-transparent"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center text-white"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-3">
            {/* all tab */}
            <div
              id="all"
              className={
                activeTab === "all" ? "tabcontent" : "tabcontent hidden"
              }
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                {myFeaturedCourses.map((data, index) => {
                  return (
                    <>
                      <div key={index}>
                        <h1>{data.title}</h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {/* trending tab */}
            <div
              id="trending"
              className={
                activeTab === "trending" ? "tabcontent" : "tabcontent hidden"
              }
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                {trendingCourses.map((data, index) => {
                  return (
                    <>
                      <div key={index}>
                        <h1>{data.title}</h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {/* featured tab */}
            <div
              id="featured"
              className={
                activeTab === "featured" ? "tabcontent" : "tabcontent hidden"
              }
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                {featuredCourses.map((data, index) => {
                  return (
                    <>
                      <div key={index}>
                        <h1>{data.title}</h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {/* webdesign tab  */}
            <div
              id="webdesign"
              className={
                activeTab === "webdesign" ? "tabcontent" : "tabcontent hidden"
              }
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                {webDesignCourses.map((data, index) => {
                  return (
                    <>
                      <div key={index}>
                        <h1>{data.title}</h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="cursor-pointer flex items-center gap-1 border hover:bg-[#1FC211] text-black hover:text-white font-bold py-2 px-4 rounded transition duration-300">
              <i className="fa-solid fa-chevron-left"></i>
              Prev.
            </div>
            <div className="cursor-pointer flex items-center gap-1 border hover:bg-[#1FC211] text-black hover:text-white font-bold py-2 px-4 rounded transition duration-300">
              Next <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
