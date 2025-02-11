import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971502631195" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
