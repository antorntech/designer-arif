import React from "react";
import "./ViewVideoModal.css";

const ViewVideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <button onClick={onClose} className="close-button">
          +
        </button>
        <iframe
          width="720"
          height="420"
          src="https://www.youtube.com/embed/t6iwNbweKJw?si=kIRoQQvhfCcydSdf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ViewVideoModal;
