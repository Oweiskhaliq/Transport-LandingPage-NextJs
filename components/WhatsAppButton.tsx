import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971502631195" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp
          className="bg-green-600 text-8xl rounded-xl"
          size={50}
          color="white"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
