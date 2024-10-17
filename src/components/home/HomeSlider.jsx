import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSkeleton from "../BannerSkeleton/BannerSkeleton";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <i className="fa-solid fa-angle-right text-white absolute top-1/2 right-0 bg-[#0bb0ba] p-2 cursor-pointer z-30"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <i className="fa-solid fa-angle-left text-white absolute top-1/2 left-0 bg-[#0bb0ba] p-2 cursor-pointer z-30"></i>
    </div>
  );
}

const HomeSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/slider")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(() => setLoading(false)); // Ensure loading is false even if fetch fails
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="z-[-1] my-5 md:my-12 lg:my-28 overflow-hidden">
      <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
        <div className="slider-container">
          {loading ? ( // Show BannerSkeleton while loading
            <div className="w-full h-[50vh]">
              <BannerSkeleton />
            </div>
          ) : (
            <Slider {...settings}>
              {data.map((slider) => (
                <div key={slider.id}>
                  <div className="slider hidden md:block">
                    <img
                      src={`https://api.designerarif.com/${slider.desktopPhoto}`}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="slider block md:hidden">
                    <img
                      src={`https://api.designerarif.com/${slider.mobilePhoto}`}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
