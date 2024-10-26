import React from "react";
import "./ViewVideoModal.css";

const ViewVideoModal = ({ isOpen, onClose, videoLink }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <button
          onClick={onClose}
          className="close-button flex justify-center items-center"
        >
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <iframe
          src={videoLink}
          title="YouTube video player"
          frameborder="0"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ViewVideoModal;
