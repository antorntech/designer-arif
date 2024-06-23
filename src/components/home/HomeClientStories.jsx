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
    arrows: false,
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
      avatar: "client01.jpg",
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
      avatar: "client02.jpg",
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
      avatar: "client01.jpg",
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
      avatar: "client02.jpg",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-gradient text-2xl md:text-6xl font-bold">
                My Client's Stories
              </h1>
              <p className="text-white w-full mt-3">
                Empowering people in new a digital journey with my super
                services
              </p>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {clientsSays.map((client, index) => (
                  <div key={index} className="w-full">
                    <div className="bg-[#000304] md:mx-3 p-5 rounded-md">
                      <div className="flex justify-between items-start">
                        <img src={client.clientLogo} alt="" />
                        <img
                          src={client.avatar}
                          className="rounded-md w-32 h-32"
                          alt=""
                          style={{ clipPath: "circle(97% at 100% 0)" }}
                        />
                      </div>
                      <div className="py-3">{client.icon}</div>
                      <p className="text-white pb-5 text-sm">
                        {client.description}
                      </p>
                      <div className="pt-3">
                        <p className="text-white font-semibold text-xl">
                          {client.name}
                        </p>
                        <p className="text-white text-sm">
                          {client.designation}
                        </p>
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
