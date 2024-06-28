import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 md:gap-5 h-[120px] md:h-[300px] pageheader">
      <h1 className="text-2xl font-bold text-center text-white md:text-5xl">
        {title.toUpperCase()}
      </h1>
      <div className="text-white flex items-center gap-3">
        <Link to="/" className="text-[#60efff]">
          Home
        </Link>{" "}
        / <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default PageHeader;
