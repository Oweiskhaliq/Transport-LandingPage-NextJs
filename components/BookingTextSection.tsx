import React from "react";

const BookingTextSection = () => {
  return (
    <>
      {/* Left Column - Text Section */}
      <div className="md:w-1/2 text-center md:text-center space-y-4 md:space-y-6 px-2 sm:px-4 md:px-8 ">
        <span className="block text-xs tracking-widest uppercase">
          Why Rent a Bus from
        </span>
        <h2 className="text-3xl leading-relaxed font-bold">
          Noor Islam Bus Rental?
        </h2>
        {/* <p className="mt-3 text-sm md:text-lg leading-6 ">
          At Noor Islam Bus Rental, we offer tailored transportation solutions
          for every need. Whether you need a 7 seater luxury car, a Toyota
          Hiace, a 14 seater minivan, or a 50 seater bus, our fleet is diverse
          and well-maintained. We provide flexible rental options on a daily,
          monthly, quarterly, or yearly basis, ensuring convenience and
          efficiency for businesses across the UAE. With competitive rates and a
          strong focus on customer satisfaction, we’ve become the trusted choice
          for businesses that value comfort, safety, and professionalism.
          Whether you need airport transfers, a shuttle service, or bus
          transportation for events, Noor Islam Bus Rental ensures a smooth
          experience every time.
        </p> */}
        <p className="text-center text-base md:text-lg leading-relaxed max-w-[480px] mx-auto">
          At Noor Islam Bus Rental, we offer tailored transportation solutions
          for every need. Whether you need a 7 seater luxury car, a Toyota
          Hiace, a 14 seater minivan, or a 50 seater bus, our fleet is diverse
          and well-maintained. We provide flexible rental options on a daily,
          monthly, quarterly, or yearly basis, ensuring convenience and
          efficiency for businesses across the UAE. With competitive rates and a
          strong focus on customer satisfaction, we’ve become the trusted choice
          for businesses that value comfort, safety, and professionalism.
          Whether you need airport transfers, a shuttle service, or bus
          transportation for events, Noor Islam Bus Rental ensures a smooth
          experience every time.
        </p>
      </div>
    </>
  );
};

export default BookingTextSection;
