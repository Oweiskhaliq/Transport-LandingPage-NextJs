"use client";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between md:py-5  bg-[#ffffff] font-serif h-full mt-5 mb-5"
    >
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-left font-medium  order-2  md:px-20  md:order-1 md:mt-4 mt-10 p-6 space-y-4">
        <h3 className="md:text-[15px] text-[13px] uppercase tracking-widest text-black">
          WELCOME TO
        </h3>
        <h2 className="md:text-[57px]  text-[34px]  font-bold">
          NOOR ISLAM <br />
          <span className="text-black">
            BUS <span className="text-[#2c5daf]">RENTAL</span>
          </span>
        </h2>
        <p className="mt-4 text-[16px] md:text-[17px] text-gray-900 md:px-2">
          Noor Islam Bus Rental Dubai & Passenger Transport by Rented Buses
          L.L.C is among the top transport providers in Dubai, U.A.E. We are
          committed to delivering high-quality bus tour services that meet your
          needs, ensuring comfort and affordability in every journey.
        </p>
        {/* Buttons */}
        <div className="flex items-center space-x-6 mt-6">
          <button className="bg-[#b8925b] text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-[#a67c4f]">
            READ MORE
          </button>
          <div className="flex items-center space-x-2 text-[#b8925b] text-lg font-semibold">
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
          src="/carouselImage/bus5.jpg"
          alt="About Us"
          className="w-screen h-screen object-cover  shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
