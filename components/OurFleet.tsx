"use client";

const OurFleet = () => {
  const fleet = [
    {
      image: "/fleet/50-seater.jpg",
      text: "50 Seater Bus Rental Dubai",
    },
    { image: "/fleet/35.jpg", text: "35 Seater Luxury Bus Rental Dubai" },
    { image: "/fleet/33.jpg", text: "33 Seater Bus Rental in Dubai" },
    { image: "/fleet/30.jpg", text: "30 Seater Bus Rental in Dubai" },
    { image: "/fleet/26.jpg", text: "26 Seater Bus Rental in Dubai" },
    { image: "/fleet/22.webp", text: "22 Seater Coaster Bus Rental in Dubai" },
    { image: "/fleet/19.jpg", text: "19 Seater Van Rental in Dubai" },
    { image: "/fleet/14.jpg", text: "14 Seater Van for Rent in Dubai" },
    { image: "/fleet/13.jpg", text: "13 Seater Van Rental Dubai" },
    { image: "/fleet/7.jpg", text: "7 Seater Car Rental in Dubai" },
  ];

  return (
    <section
      id="fleet"
      className="text-center py-12 md:space-y-6 space-y-4 bg-[#ffffff] font-serif mt-14"
    >
      <p className="text-[#161921] uppercase tracking-wider text-[13px]">
        NOOR ISLAM
      </p>
      <h2 className=" text-[34px] md:text-[57px] ">Our Fleet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   md:px-[80px]">
        {fleet.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center hover:shadow-lg transition duration-300 "
          >
            <div className="flex justify-center items-center  overflow-hidden">
              <img
                src={item.image}
                alt={item.text}
                className="w-4/4 md:h-72 object-contain transform transition duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-[20px] mt-3 md:text-[24px] pl-8 pb-2 text-left  text-[#161921] md:px-[70px] hover:text-[#c09550]">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFleet;
