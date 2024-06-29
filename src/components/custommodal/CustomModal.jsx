import React from "react";

const CustomModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-md max-w-full max-h-full overflow-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          <i className="fa-solid fa-xmark text-[22px]"></i>
        </button>
        <img src={image} alt="Selected" className="max-w-full max-h-full p-5" />
      </div>
    </div>
  );
};

export default CustomModal;
