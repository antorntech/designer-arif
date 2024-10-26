import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewVideoModal from "../viewvideomodal/ViewVideoModal";

const VideoAnimation = () => {
  const [videoAnimations, setVideoAnimations] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/videoanimations")
      .then((res) => res.json())
      .then((data) => setVideoAnimations(data));
  }, []);

  // add-video-modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleVideoClick = (link) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLink(null);
  };

  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-gradient text-2xl md:text-6xl font-bold py-2">
              Video & Animation
            </h1>
            <p className="text-white w-full md:w-1/2 mx-auto mt-3">
              You can easily get the information you need to grow your business
              by exploring my success story.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            {videoAnimations.map((item, index) => (
              <div key={index}>
                <div className="w-full group overflow-hidden relative rounded-md">
                  <img
                    src={`https://api.designerarif.com/${item?.banner}`}
                    className="w-full h-[280px] aspect-square md:w-[700px] md:h-[370px] rounded-3xl"
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-[#13FB9F] rounded-3xl flex items-center justify-center">
                    <div className="size-20 rounded-full flex items-center justify-center relative">
                      <div className="size-20 slide-in-fwd-center absolute top-0 left-0 z-20 flex items-center justify-center bg-black rounded-full"></div>
                      <img
                        src="/play.png"
                        alt="play.png"
                        className="z-30 cursor-pointer"
                        onClick={() => handleVideoClick(item?.videoUrl)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        <ViewVideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoLink={selectedLink}
        />
      </section>
    </>
  );
};

export default VideoAnimation;
