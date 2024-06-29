import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-main">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img src="/images/s.png" alt="" className="w-[250px]" />
      </div>
    </div>
  );
};

export default Loader;
