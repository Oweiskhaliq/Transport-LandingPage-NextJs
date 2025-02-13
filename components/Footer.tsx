"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1b3e] text-gray-300 py-8 font-serif">
      {/* Top Row - Logo and Menu */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-16 md:h-40 h-24 border-b border-gray-600">
        <div>
          <img src="./logo.png" alt="Noor Islam Transport" className="h-12" />
        </div>
        <nav className="md:flex space-x-6 text-lg hidden">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="#about" className="hover:text-white">
            About Us
          </Link>
          <Link href="#blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Middle Row - 3 Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  text-center md:text-left px-12 mt-20  ">
        {/* About Section */}
        <div className="space-y-6 p-4">
          <h3 className="text-xl font-semibold">NOOR ISLAM BUS RENTAL</h3>
          <p className="mt-2 text-gray-400">
            Your trusted partner for reliable transportation services. Noor
            Islam Bus Rental offers a fleet of carefully selected vehicles,
            ensuring top-notch safety and comfort for every journey.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-2 text-gray-400 ">
            Office No. 88, Hamsah Building A, Al Karama <br />
            <Link
              href="mailto:info@noorislambusrental.com"
              className="hover:text-white"
              target="_blank"
            >
              info@noorislambusrental.com
            </Link>{" "}
            <br />
            <Link
              href="tel:+971502631195"
              className="hover:text-white"
              target="_blank"
            >
              Tel: +971 50 263 1195
            </Link>
            <br />
            <Link
              href="https://wa.me/971502631195"
              className="hover:text-white"
              target="_blank"
            >
              {" "}
              Mob: +971 50 263 1195
            </Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>
              <Link href="#fleet" className="hover:text-white">
                50 Luxury Bus Rental
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="hover:text-white">
                35 Seater Luxury Bus Rental
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="hover:text-white">
                33 Seater Bus Rental in Dubai
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="hover:text-white">
                30 Seats Coaster Bus Rental
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row - Copyright & Social Icons */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 mt-20 border-t border-gray-700 pt-4 ">
        <p className="text-gray-400 order-2 p-4">
          Noor Islam Transport © 2024. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 order-1 md:order-2">
          <a
            href="https://www.facebook.com/noorislaamtransport/"
            target="_blank"
            className="bg-[#36528e] p-1 rounded"
          >
            <FaFacebook size={34} color="#FFFFFF" />
          </a>
          <a
            href="https://www.instagram.com/noorislamtransport"
            target="_blank"
            className="bg-gray-800  p-1 rounded"
          >
            <FaInstagram size={34} color="#FFFFFF" />
          </a>
          <a
            href="http://tiktok.com/@noorislamtransport"
            target="_blank"
            className="bg-gray-600 p-1 rounded"
          >
            <FaTiktok size={34} color="#FFFFFF" />
          </a>
          <a
            href="https://www.pinterest.com/Noorislam_transport/"
            target="_blank"
            className="bg-red-700 p-1 rounded"
          >
            <FaPinterest size={34} color="#FFFFFF" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
