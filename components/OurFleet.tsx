"use client";

const OurFleet = () => {
  const fleet = [
    {
      image: "/fleet/50-seater.jpg",
      text: "50 Seater Bus Rental Dubai",
    },
    { image: "/fleet/35.jpg", text: "35 Seater Luxury Bus Rental Dubai" },
    { image: "/fleet/33-2.webp", text: "33 Seater Bus Rental in Dubai" },
    {
      image: "/fleet/30-seater-coster.webp",
      text: "30 Seater Bus Rental in Dubai",
    },
    { image: "/fleet/26-1.webp", text: "26 Seater Bus Rental in Dubai" },
    {
      image: "/fleet/22-seater-coster.webp",
      text: "22 Seater Coaster Bus Rental in Dubai",
    },
    { image: "/fleet/19-Mercedes.jpg", text: "19 Seater Van Rental in Dubai" },
    { image: "/fleet/14.jpg", text: "14 Seater Van for Rent in Dubai" },
    { image: "/fleet/13-seater.webp", text: "13 Seater Van Rental Dubai" },
    { image: "/fleet/7.webp", text: "7 Seater Car Rental in Dubai" },
  ];

  return (
    <section
      id="fleet"
      className="text-center py-12  space-y-4 bg-[#ffffff] font-serif mt-12"
    >
      <p className="text-[#161921] uppercase tracking-wider text-[13px]">
        NOOR ISLAM
      </p>
      <h2 className=" text-[34px] md:text-[57px] ">Our Fleet</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   md:px-4">
        {fleet.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden  text-center hover:shadow-lg transition duration-300  "
          >
            <div className="flex justify-center items-center  overflow-hidden px-4 ">
              <img
                src={item.image}
                alt={item.text}
                className="w-4/4 p-4 object-contain transform transition duration-500 hover:scale-110"
              />
            </div>
            <p className="text-[19px] mt-4 px-10  lg:text-[24px]  text-center   text-[#161921] md:px-[70px] hover:text-[#c09550]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFleet;
