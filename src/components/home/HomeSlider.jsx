import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <i class="fa-solid fa-angle-right text-white absolute top-1/2 right-0 bg-[#0bb0ba] p-2 cursor-pointer z-30"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <i class="fa-solid fa-angle-left text-white absolute top-1/2 left-0 bg-[#0bb0ba] p-2 cursor-pointer z-30"></i>
    </div>
  );
}

const HomeSlider = () => {
  const sliders = [
    {
      id: 1,
      mobilePhoto: "images/slider5.png",
      desktopPhoto: "images/slider1.png",
    },
    {
      id: 2,
      mobilePhoto: "images/slider5.png",
      desktopPhoto: "images/slider3.png",
    },
    {
      id: 3,
      mobilePhoto: "images/slider5.png",
      desktopPhoto: "images/slider1.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="z-[-1] my-5 md:my-12 lg:my-28  overflow-hidden">
      <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
        <div className="slider-container">
          <Slider {...settings}>
            {sliders.map((slider) => (
              <>
                <div key={slider.id} className="slider hidden md:block">
                  <img
                    src={slider.desktopPhoto}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div key={slider.id} className="slider block md:hidden">
                  <img
                    src={slider.mobilePhoto}
                    alt=""
                    className="w-[85%] h-full"
                  />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
