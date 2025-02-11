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
      className="text-center py-12 space-y-6 bg-[#f4f4ee] font-serif"
    >
      <p className="text-gray-600 uppercase tracking-wider">NOOR ISLAM</p>
      <h2 className="text-3xl text-[57px] font-bold">Our Fleet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {fleet.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center hover:shadow-lg transition duration-300 "
          >
            <div className="flex justify-center items-center p-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.text}
                className="w-3/4 h-40 object-contain transform transition duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 text-[24px] text-black">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFleet;
