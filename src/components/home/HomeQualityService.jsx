// import React from "react";

// const HomeQualityService = () => {
//   const [activeTab, setActiveTab] = React.useState("all");

//   const openTab = (tabName) => {
//     setActiveTab(tabName);
//     console.log(tabName);
//   };

//   const myFeaturedCourses = [
//     {
//       id: 1,
//       category: "trending",
//       thumbnail: "mywork01.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 2,
//       category: "trending",
//       thumbnail: "mywork02.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 3,
//       category: "trending",
//       thumbnail: "mywork03.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 4,
//       category: "featured",
//       thumbnail: "mywork03.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 5,
//       category: "logodesign",
//       thumbnail: "mywork02.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 6,
//       category: "logodesign",
//       thumbnail: "mywork01.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 7,
//       category: "popular",
//       thumbnail: "mywork01.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//     {
//       id: 8,
//       category: "popular",
//       thumbnail: "mywork03.png",
//       title: "Deloitte",
//       description: "Project was about precision and information.",
//     },
//   ];

//   const trendingCourses = myFeaturedCourses.filter(
//     (course) => course.category === "trending"
//   );
//   const featuredCourses = myFeaturedCourses.filter(
//     (course) => course.category === "featured"
//   );
//   const logodesignCourses = myFeaturedCourses.filter(
//     (course) => course.category === "logodesign"
//   );

//   return (
//     <>
//       <section
//         className="py-6 md:py-[50px] lg:py-[100px]"
//         data-aos="zoom-in"
//         data-aos-duration="2000"
//       >
//         <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
//           <div className="text-center mb-8 md:mb-16">
//             <h1 className="text-gradient text-2xl md:text-6xl font-bold">
//               My Quality Services
//             </h1>
//             <p className="text-white w-full md:w-1/2 mx-auto mt-3">
//               I break down complex user experinece problems to create integritiy
//               focussed solutions that connect billions of people
//             </p>
//           </div>
//           <div className="w-full lg:w-1/2 lg:my-3 mx-auto">
//             <div className="tab custom-shadow mb-8 lg:mb-5 px-2 py-2 rounded-md lg:rounded-full bg-[#001C25]  flex justify-center items-center">
//               <ul className="w-full grid grid-cols-2 lg:flex items-center lg:justify-between gap-4">
//                 <li
//                   className={
//                     activeTab === "all"
//                       ? "flex justify-center items-center tablinks active bg-[#40F4D8] rounded-md lg:rounded-full text-white py-2 px-3"
//                       : "flex justify-center items-center tablinks hover:bg-[#40F4D8] text-white rounded-md lg:rounded-full py-2 px-3 cursor-pointer transition duration-700 ease-in-out"
//                   }
//                   onClick={() => openTab("all")}
//                 >
//                   See All
//                 </li>
//                 <li
//                   className={
//                     activeTab === "trending"
//                       ? "flex justify-center items-center tablinks active bg-[#40F4D8] rounded-md lg:rounded-full text-white py-2 px-3"
//                       : "flex justify-center items-center tablinks hover:bg-[#40F4D8] text-white rounded-md lg:rounded-full py-2 px-3 cursor-pointer transition duration-700 ease-in-out"
//                   }
//                   onClick={() => openTab("trending")}
//                 >
//                   Trending
//                 </li>
//                 <li
//                   className={
//                     activeTab === "featured"
//                       ? "flex justify-center items-center tablinks active bg-[#40F4D8] rounded-md lg:rounded-full text-white py-2 px-3"
//                       : "flex justify-center items-center tablinks hover:bg-[#40F4D8] text-white rounded-md lg:rounded-full py-2 px-3 cursor-pointer transition duration-700 ease-in-out"
//                   }
//                   onClick={() => openTab("featured")}
//                 >
//                   Featured
//                 </li>
//                 <li
//                   className={
//                     activeTab === "logodesign"
//                       ? "flex justify-center items-center tablinks active bg-[#40F4D8] rounded-md lg:rounded-full text-white py-2 px-3"
//                       : "flex justify-center items-center tablinks hover:bg-[#40F4D8] text-white rounded-md lg:rounded-full py-2 px-3 cursor-pointer transition duration-700 ease-in-out"
//                   }
//                   onClick={() => openTab("logodesign")}
//                 >
//                   Logo Design
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="w-full py-3">
//             {/* all tab */}
//             <div
//               id="all"
//               className={
//                 activeTab === "all" ? "tabcontent" : "tabcontent hidden"
//               }
//             >
//               <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
//                 {myFeaturedCourses.map((data, index) => {
//                   return (
//                     <>
//                       <div
//                         key={index}
//                         className="group hover:shadow-lg flex flex-col blurry rounded-xl gap-5 align-start animate__animated animate__fadeIn relative overflow-hidden"
//                       >
//                         <div className="front-content p-5">
//                           <div>
//                             <img
//                               src={data.thumbnail}
//                               alt=""
//                               className="rounded-t-lg rounded-tr-lg rounded-tl-lg w-full h-full object-fit"
//                             />
//                           </div>
//                         </div>
//                         <div className="back-content blurry p-5 flex flex-col items-center justify-center absolute top-[-500px] left-0 group-hover:top-0 w-full h-full rounded-xl text-white transition-all duration-700">
//                           <h1 className="text-2xl text-gradient font-bold">
//                             {data.title.slice(0, 20)}
//                           </h1>
//                           <p className="text-white w-full p-3 text-center">
//                             {data.description}
//                           </p>
//                           <button class="border border-zinc-100 mt-1 bg-zink-700 text-gray-100 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
//                             Read More
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* trending tab */}
//             <div
//               id="trending"
//               className={
//                 activeTab === "trending" ? "tabcontent" : "tabcontent hidden"
//               }
//             >
//               <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
//                 {trendingCourses.map((data, index) => {
//                   return (
//                     <>
//                       <div
//                         key={index}
//                         className="group hover:shadow-lg flex flex-col blurry rounded-xl gap-5 align-start animate__animated animate__fadeIn relative overflow-hidden"
//                       >
//                         <div className="front-content p-5">
//                           <div>
//                             <img
//                               src={data.thumbnail}
//                               alt=""
//                               className="rounded-t-lg rounded-tr-lg rounded-tl-lg w-full h-full object-fit"
//                             />
//                           </div>
//                         </div>
//                         <div className="back-content blurry p-5 flex flex-col items-center justify-center absolute top-[-500px] left-0 group-hover:top-0 w-full h-full rounded-xl text-white transition-all duration-700">
//                           <h1 className="text-2xl text-gradient font-bold">
//                             {data.title.slice(0, 20)}
//                           </h1>
//                           <p className="text-white w-full p-3 text-center">
//                             {data.description}
//                           </p>
//                           <button class="border border-zinc-100 mt-1 bg-zink-700 text-gray-100 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
//                             Read More
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* featured tab */}
//             <div
//               id="featured"
//               className={
//                 activeTab === "featured" ? "tabcontent" : "tabcontent hidden"
//               }
//             >
//               <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
//                 {featuredCourses.map((data, index) => {
//                   return (
//                     <>
//                       <div
//                         key={index}
//                         className="group hover:shadow-lg flex flex-col blurry rounded-xl gap-5 align-start animate__animated animate__fadeIn relative overflow-hidden"
//                       >
//                         <div className="front-content p-5">
//                           <div>
//                             <img
//                               src={data.thumbnail}
//                               alt=""
//                               className="rounded-t-lg rounded-tr-lg rounded-tl-lg w-full h-full object-fit"
//                             />
//                           </div>
//                         </div>
//                         <div className="back-content blurry p-5 flex flex-col items-center justify-center absolute top-[-500px] left-0 group-hover:top-0 w-full h-full rounded-xl text-white transition-all duration-700">
//                           <h1 className="text-2xl text-gradient font-bold">
//                             {data.title.slice(0, 20)}
//                           </h1>
//                           <p className="text-white w-full p-3 text-center">
//                             {data.description}
//                           </p>
//                           <button class="border border-zinc-100 mt-1 bg-zink-700 text-gray-100 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
//                             Read More
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* logodesign tab  */}
//             <div
//               id="logodesign"
//               className={
//                 activeTab === "logodesign" ? "tabcontent" : "tabcontent hidden"
//               }
//             >
//               <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
//                 {logodesignCourses.map((data, index) => {
//                   return (
//                     <>
//                       <div
//                         key={index}
//                         className="group hover:shadow-lg flex flex-col blurry rounded-xl gap-5 align-start animate__animated animate__fadeIn relative overflow-hidden"
//                       >
//                         <div className="front-content p-5">
//                           <div>
//                             <img
//                               src={data.thumbnail}
//                               alt=""
//                               className="rounded-t-lg rounded-tr-lg rounded-tl-lg w-full h-full object-fit"
//                             />
//                           </div>
//                         </div>
//                         <div className="back-content blurry p-5 flex flex-col items-center justify-center absolute top-[-500px] left-0 group-hover:top-0 w-full h-full rounded-xl text-white transition-all duration-700">
//                           <h1 className="text-2xl text-gradient font-bold">
//                             {data.title.slice(0, 20)}
//                           </h1>
//                           <p className="text-white w-full p-3 text-center">
//                             {data.description}
//                           </p>
//                           <button class="border border-zinc-100 mt-1 bg-zink-700 text-gray-100 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
//                             Read More
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomeQualityService;

import React from "react";
import { Link } from "react-router-dom";

const HomeQualityService = () => {
  const myFeaturedCourses = [
    {
      id: 1,
      category: "trending",
      thumbnail: "logodesign.png",
      title: "Logo Design",
      description: "Project was about precision and information.",
    },
    {
      id: 2,
      category: "trending",
      thumbnail: "branding.png",
      title: "Branding",
      description: "Project was about precision and information.",
    },
    {
      id: 3,
      category: "trending",
      thumbnail: "printdesign.png",
      title: "Print Design",
      description: "Project was about precision and information.",
    },
    {
      id: 4,
      category: "featured",
      thumbnail: "socialmedia.png",
      title: "Social Media",
      description: "Project was about precision and information.",
    },
    {
      id: 5,
      category: "logodesign",
      thumbnail: "animation.png",
      title: "Animation",
      description: "Project was about precision and information.",
    },
    {
      id: 6,
      category: "logodesign",
      thumbnail: "3dmodeling.png",
      title: "3D Modeling",
      description: "Project was about precision and information.",
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
            <h1 className="text-gradient text-2xl md:text-6xl font-bold">
              My Quality Services
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {myFeaturedCourses.map((data, index) => {
              return (
                <Link to="/services">
                  <div
                    key={index}
                    className="border-2 border-gray-600 rounded-[10%] overflow-hidden"
                  >
                    <h1 className="text-white text-2xl text-center font-semibold p-5">
                      {data.title}
                    </h1>
                    <img
                      src={data.thumbnail}
                      alt=""
                      className="rounded-b-[10%] rounded-br-[10%] rounded-bl-[10%] w-full h-full object-fit"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeQualityService;
