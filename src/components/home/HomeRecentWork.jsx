import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CustomModal from "../custommodal/CustomModal";

const HomeRecentWork = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const recentWorks = [
    {
      id: 1,
      thumbnail: "recentWork01.png",
    },
    {
      id: 2,
      thumbnail: "recentWork02.png",
    },
    {
      id: 3,
      thumbnail: "recentWork03.png",
    },
    {
      id: 4,
      thumbnail: "recentWork04.png",
    },
    {
      id: 5,
      thumbnail: "recentWork05.png",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold">
              My Recent Work
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div
            className="grid grid-cols-1"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            <div className="slider-container">
              <Slider {...settings}>
                {recentWorks.map((work, index) => (
                  <div key={index} className="w-full cursor-pointer">
                    <div className="mx-3 rounded-[10%] border-2 border-gray-600">
                      <img
                        src={work.thumbnail}
                        alt=""
                        onClick={() => handleImageClick(work.thumbnail)}
                        className="w-full object-contain rounded-[10%]"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default HomeRecentWork;
