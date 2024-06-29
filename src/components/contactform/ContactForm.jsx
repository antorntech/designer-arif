import React, { useState } from "react";

export const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "Logo Design",
    message: "",
  });

  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetails);
    setContactDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "Logo Design",
      message: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <input
            className="w-full p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
            type="text"
            name="firstName"
            value={contactDetails.firstName}
            onChange={handleChange}
            required
            placeholder="First Name"
          />
          <input
            className="w-full p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
            type="text"
            name="lastName"
            value={contactDetails.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <input
            className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
            type="text"
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
          <input
            className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
            type="text"
            name="phoneNumber"
            value={contactDetails.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <select
            name="subject"
            value={contactDetails.subject}
            onChange={handleChange}
            className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
          >
            <option
              disabled
              className="w-full mt-3 p-3 rounded-md bg-[#eef8ff80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              Please choose an option
            </option>
            <option
              value={"Logo Design"}
              className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              Logo Design
            </option>
            <option
              value={"Branding"}
              className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              Branding
            </option>
            <option
              value={"Print Design"}
              className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              Print Design
            </option>
            <option className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none">
              Social Media
            </option>
            <option
              value={"Animation"}
              className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              Animation
            </option>
            <option
              value={"3D Modeling"}
              className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none"
            >
              3D Modeling
            </option>
          </select>
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <textarea
            rows="5"
            className="w-full mt-3 p-3 rounded-md bg-[#002d3b80] border-[1px] border-gray-700 text-white focus:outline-none focus:border-[#4AF3E3] focus:ring-1 focus:ring-[#4AF3E3]"
            type="text"
            name="message"
            value={contactDetails.message}
            onChange={handleChange}
            required
            placeholder="Message"
          />
        </div>
        <div className="w-full mt-5 flex  items-center gap-5">
          <button
            type="submit"
            className="mt-3 p-3 bg-gradient-to-r from-[#2d90a1] to-[#04466d] hover:from-[#04466d] hover:to-[#2d90a1] rounded-md text-white transition-all duration-500"
          >
            Send Message ➤
          </button>
        </div>
      </form>
    </>
  );
};
