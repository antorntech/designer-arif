import React from "react";

const CustomModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      <button
        onClick={onClose}
        className="absolute flex justify-center items-center top-4 right-4 bg-slate-600 w-12 h-12 rounded-full"
      >
        <i className="fa-solid fa-xmark text-[22px] text-white"></i>
      </button>
      <div className="relative bg-white p-4 rounded-md max-w-full max-h-full overflow-auto">
        <img
          src={image}
          alt="Selected"
          className="max-w-full max-h-full md:w-[1000px] md:min-h-[500px] p-5"
        />
      </div>
    </div>
  );
};

export default CustomModal;
