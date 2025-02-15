"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="flex flex-col md:flex-row items-center justify-between md:py-5  bg-[#ffffff] font-serif h-full mt-5 mb-5"
    >
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-left font-medium  order-2  md:px-20  md:order-1 md:mt-4 mt-10 p-6 space-y-5 ">
        <h3 className="md:text-[15px] text-[13px] uppercase tracking-widest text-black">
          WELCOME TO
        </h3>
        <h2 className="md:text-6xl  text-4xl">
          NOOR ISLAM BUS
          <i className="text-blue-600 lg:text-nowrap"> RENTAL</i>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-900 md:px-2">
          Noor Islam Bus Rental Dubai & Passenger Transport by Rented Buses
          L.L.C is among the top transport providers in Dubai, U.A.E. We are
          committed to delivering high-quality bus tour services that meet your
          needs, ensuring comfort and affordability in every journey.
        </p>
        {/* Buttons */}
        <div className="lg:flex  items-center md:space-x-6 space-y-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.9 }}
            className="bg-custom_color text-white md:mt-4 px-6 py-3 text-xs rounded-lg  
           font-semibold shadow-md hover:bg-custom_color"
          >
            READ MORE
          </motion.button>
          <div className="flex items-center space-x-2 text-custom_color text-lg font-semibold ">
            <span className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
              📞
            </span>
            <span>+971 50 263 1195</span>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex order-1 md:order-2 ">
        <img
          src="/bus4-c.webp"
          alt="About Us"
          className="w-screen h-auto rounded-sm object-cover  shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default AboutUs;
