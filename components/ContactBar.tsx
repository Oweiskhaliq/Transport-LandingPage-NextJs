"use client";

import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactBar = () => {
  return (
    <div className="flex flex-col md:flex-row font-serif  justify-between items-center  bg-[#c09550] text-black py-1 px-4 md:px-14  text-sm md:text-[11px]">
      {/* Left Section - Contact Info */}
      <div className="flex flex-col md:flex-row items-left sm:px-20 space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
        <span className="contactBar-slash">|</span>
        {/* Phone */}
        <a href="tel:+971502631195" className="contactBar-items">
          <IoIosCall size={16} />
          <span>+971 50 263 1195</span>
        </a>
        <span className="contactBar-slash">|</span>

        {/* WhatsApp */}
        <a
          href="https://wa.me/971502631195"
          target="_blank"
          className="contactBar-items"
        >
          <IoLogoWhatsapp color="#48c858" size={16} />
          <span>+971 50 263 1195</span>
        </a>
        <span className="contactBar-slash">|</span>

        {/* Email */}
        <a
          href="mailto:info@noorislambusrental.com"
          className="contactBar-items"
        >
          <MdEmail size={16} />
          <span>info@noorislambusrental.com</span>
        </a>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex space-x-2 mt-2 md:mt-0">
        <a
          href="https://www.facebook.com/noorislaamtransport/"
          target="_blank"
          className="bg-black p-1 rounded"
        >
          <FaFacebook size={16} color="#FFFFFF" />
        </a>
        <a
          href="https://www.instagram.com/noorislamtransport"
          target="_blank"
          className="bg-gray-700 p-1 rounded"
        >
          <FaInstagram size={16} color="#FFFFFF" />
        </a>
        <a
          href="http://tiktok.com/@noorislamtransport"
          target="_blank"
          className="bg-gray-600 p-1 rounded"
        >
          <FaTiktok size={16} color="#FFFFFF" />
        </a>
        <a
          href="https://www.pinterest.com/Noorislam_transport/"
          target="_blank"
          className="bg-red-700 p-1 rounded"
        >
          <FaPinterest size={16} color="#FFFFFF" />
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
