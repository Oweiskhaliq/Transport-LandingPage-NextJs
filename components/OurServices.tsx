"use client";
import Link from "next/link";

const OurServices = () => {
  const services = [
    { text: "Staff Transportation in Dubai", link: "#services" },
    { text: "Airport Transport Dubai", link: "#services" },
    { text: "Hotel Staff Transport in Dubai", link: "#services" },
    { text: "Party Bus Rental in Dubai", link: "#services" },
    { text: "Dubai City Tour Bus", link: "#services" },
    { text: "Labor Transport in Dubai", link: "#services" },
  ];

  return (
    <section
      id="services"
      className="text-center py-12 font-serif bg-[#0b1b3e] text-[#f4f4ee]"
    >
      <h2 className="text-[57px]  font-medium ">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-6 md:px-28">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className=" bg-[#161921] shadow-xg border border-[#1c3caa] rounded-xl p-14 text-center transition duration-300 hover:bg-white hover:text-black   w-6/6 h-40 cursor-pointer ">
              <h3 className="text-lg font-semibold">{service.text}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
