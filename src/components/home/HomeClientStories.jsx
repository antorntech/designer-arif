import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeClientStories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const clientsSays = [
    {
      id: 1,
      name: "John Smith",
      icon: (
        <>
          <div className="flex items-center">
            <i class="fa-solid fa-caret-left text-gradient text-5xl"></i>
            <i class="fa-solid fa-caret-right text-gradient text-5xl"></i>
          </div>
        </>
      ),
      avatar: "client01.png",
      clientLogo: "clientlogo01.png",
      designation: "SEO Specialist, Theme Junction",
      description:
        "“Taylor is a professional Designer he really helps my business by providing value to my business.",
    },
    {
      id: 2,
      name: "John Smith",
      icon: (
        <>
          <div className="flex items-center">
            <i class="fa-solid fa-caret-left text-gradient text-5xl"></i>
            <i class="fa-solid fa-caret-right text-gradient text-5xl"></i>
          </div>
        </>
      ),
      avatar: "client02.png",
      clientLogo: "clientlogo02.png",
      designation: "SEO Specialist, Theme Junction",
      description:
        "“Taylor is a professional Designer he really helps my business by providing value to my business.",
    },
    {
      id: 3,
      name: "John Smith",
      icon: (
        <>
          <div className="flex items-center">
            <i class="fa-solid fa-caret-left text-gradient text-5xl"></i>
            <i class="fa-solid fa-caret-right text-gradient text-5xl"></i>
          </div>
        </>
      ),
      avatar: "client01.png",
      clientLogo: "clientlogo01.png",
      designation: "SEO Specialist, Theme Junction",
      description:
        "“Taylor is a professional Designer he really helps my business by providing value to my business.",
    },
    {
      id: 4,
      name: "John Smith",
      icon: (
        <>
          <div className="flex items-center">
            <i class="fa-solid fa-caret-left text-gradient text-5xl"></i>
            <i class="fa-solid fa-caret-right text-gradient text-5xl"></i>
          </div>
        </>
      ),
      avatar: "client02.png",
      clientLogo: "clientlogo02.png",
      designation: "SEO Specialist, Theme Junction",
      description:
        "“Taylor is a professional Designer he really helps my business by providing value to my business.",
    },
  ];
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold">
              My Client's Feedback
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div className="w-full" data-aos="fade-in" data-aos-duration="3000">
            <div className="slider-container">
              <Slider {...settings}>
                {clientsSays.map((client, index) => (
                  <div key={index} className="w-full">
                    <div className="bg-[#002D3B] md:mx-3 p-5 rounded-xl client-card">
                      <div className="flex flex-col items-center justify-between">
                        <div className="pb-28 flex flex-col justify-center items-center">
                          <div className="bg-gradient-to-r from-[#5BEFF9] via-[#38F6CD] to-[#04FE8C] rounded-full p-[2px]">
                            <img
                              src={client.avatar}
                              alt="client"
                              className="w-20 h-20 object-cover rounded-full"
                            />
                          </div>
                          <div className="mt-2 text-center">
                            <h1 className="text-gradient text-lg font-bold">
                              {client.name}
                            </h1>
                            <p className="text-white text-sm">
                              {client.designation}
                            </p>
                          </div>
                          <div className="mt-4 flex justify-center items-center gap-2">
                            <i class="fa-solid fa-star text-[22px] text-gradient"></i>
                            <i class="fa-solid fa-star text-[22px] text-gradient"></i>
                            <i class="fa-solid fa-star text-[22px] text-gradient"></i>
                            <i class="fa-solid fa-star text-[22px] text-gradient"></i>
                            <i class="fa-solid fa-star text-[22px] text-gradient"></i>
                          </div>
                          <div className="text-center mt-2">
                            <p className="text-white">{client.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClientStories;
