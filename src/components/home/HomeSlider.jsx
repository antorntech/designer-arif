import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const sliders = [
    {
      id: 1,
      banner: "images/slider1.png",
    },
    {
      id: 2,
      banner: "images/slider3.png",
    },
    {
      id: 3,
      banner: "images/slider1.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="z-[-1] my-5 md:my-12 lg:my-24 overflow-hidden">
      <div className="slider-container mx-10">
        <Slider {...settings}>
          {sliders.map((slider) => (
            <div key={slider.id} className="slider">
              <img src={slider.banner} alt="" className="w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
