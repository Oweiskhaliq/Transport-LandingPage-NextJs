import React from "react";

const BookingTextSection = () => {
  return (
    <>
      {/* Left Column - Text Section */}
      <div className="md:w-1/2 space-y-6 text-center ">
        <span className="block text-[11px] tracking-widest uppercase mt-2">
          Why Rent a Bus from
        </span>
        <h2 className="text-3xl font-bold">Noor Islam bus rental?</h2>
        <p className="mt-4 text-[15px] leading-relaxed px-32">
          At Noor Islam Bus Rental, we offer tailored transportation solutions
          for every need. Whether you need a 7 seater luxury car, a Toyota
          Hiace, a 14 seater minivan, or a 50 seater bus, our fleet is diverse
          and well-maintained.
        </p>
      </div>
    </>
  );
};

export default BookingTextSection;
