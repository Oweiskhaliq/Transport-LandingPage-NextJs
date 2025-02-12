import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Transparent Navigation Menu */}
      <nav className="absolute top-0 left-0 w-full px-20 py-4 flex justify-between items-end text-white z-50">
        <div>
          <img src="/logo.png" alt="Noor Islam Transport" className="h-12" />
        </div>
        <ul className="md:flex hidden space-x-4  sm:ml-auto sm:px-32 first-letter:capitalize font-serif font-medium text-[17px] text-right    ">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#fleet" className="hover:underline">
              Fleet
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          href="#booking-from"
          className=" font-serif text-[11px] md:block border border-white text-white px-6 rounded py-2 bg-transparent hover:bg-white hover:text-black"
        >
          BOOK NOW
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col p-4 z-50 text-right">
          <Link href="/" className="py-2 hover:underline">
            Home
          </Link>
          <Link href="#about" className="py-2 hover:underline">
            About Us
          </Link>
          <Link href="#fleet" className="py-2 hover:underline">
            Fleet
          </Link>
          <Link href="#services" className="py-2 hover:underline">
            Services
          </Link>
          <Link href="#blog" className="py-2 hover:underline">
            Blog
          </Link>
          <Link href="#contact" className="py-2 hover:underline">
            Contact Us
          </Link>
          <Link
            href="#booking-from"
            className=" border border-white text-white px-4 py-2 bg-transparent hover:bg-white hover:text-black"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
