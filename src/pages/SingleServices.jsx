import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { useLocation } from "react-router-dom";
import CustomModal from "../components/custommodal/CustomModal";

const SingleServices = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const alllogodesigns = [];

  const allbrandings = [];

  const allPrintDesigns = [];

  const allSocialMedia = [];

  const allAnimations = [];

  const all3dModeling = [];

  data.forEach((item) => {
    if (item.category === "Logo Design") {
      alllogodesigns.push(item);
    } else if (item.category === "Branding") {
      allbrandings.push(item);
    } else if (item.category === "Print Design") {
      allPrintDesigns.push(item);
    } else if (item.category === "Social Media") {
      allSocialMedia.push(item);
    } else if (item.category === "Animation") {
      allAnimations.push(item);
    } else if (item.category === "3D Modeling") {
      all3dModeling.push(item);
    }
  });

  const location = useLocation();

  // Extract the pathname from the location object
  const currentPath = location.pathname;

  // Split the pathname by '/' and get the last segment
  const extractedPath = currentPath.split("/").pop();

  // Determine which data array to use based on the extracted path
  let dataToRender = [];
  if (extractedPath === "all-logo-design") {
    dataToRender = alllogodesigns;
  } else if (extractedPath === "all-branding") {
    dataToRender = allbrandings;
  } else if (extractedPath === "all-print-design") {
    dataToRender = allPrintDesigns;
  } else if (extractedPath === "all-social-media") {
    dataToRender = allSocialMedia;
  } else if (extractedPath === "all-animation") {
    dataToRender = allAnimations;
  } else if (extractedPath === "all-3d-modeling") {
    dataToRender = all3dModeling;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <PageHeader title={extractedPath} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataToRender.length > 0 ? (
              dataToRender.map((data, index) => (
                <div
                  key={data.id}
                  className="w-full h-full cursor-pointer"
                  onClick={() => handleImageClick(data.thumbnail)}
                >
                  <div key={index} className="px-2">
                    <div className="w-full cursor-pointer">
                      <div className="group relative mx-3 h-72 sm:h-96 rounded-lg border-2 border-gray-600 overflow-hidden">
                        <img
                          src={`https://api.designerarif.com/${data.thumbnail}`}
                          alt=""
                          className="w-full h-full object-cover rounded-lg group-hover:scale-125 transition-all duration-500"
                        />
                        <div className="w-full h-full bg-gradient-to-t from-[#002D3B] via-[#002d3bb0] to-transparent absolute top-0 left-0 rounded-lg hover:scale-125 transition-all duration-500"></div>
                      </div>
                    </div>
                    <div className="w-full p-3">
                      <h1 className="text-white text-2xl font-bold">
                        {data.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available for the current path.</p>
            )}
          </div>
        </div>
      </section>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default SingleServices;

{
  /* <div key={index} className="px-2">
  <div className="w-full cursor-pointer">
    <div className="mx-3 h-72 sm:h-96 rounded-lg border-2 border-gray-600 overflow-hidden">
      <img
        src={`https://api.designerarif.com/${data.thumbnail}`}
        alt=""
        className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-500"
      />
    </div>
  </div>
</div>; */
}
