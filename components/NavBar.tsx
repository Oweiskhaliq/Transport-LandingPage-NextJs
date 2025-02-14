import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "About us", href: "#booking-from" },
  ];

  return (
    <>
      {/* Transparent Navigation Menu */}
      <nav className="absolute top-0 md:left-0 right-0 w-full px-6 md:px-auto    py-4 flex md:justify-between  md:items-end justify-center  text-white z-50">
        <div className="items-start ">
          <img
            src="/logo.png"
            alt="Noor Islam Transport"
            className="md:h-14  h-12 md:mt-2  "
          />
        </div>
        <ul className="md:flex hidden space-x-4  sm:ml-auto sm:px-32 first-letter:capitalize font-serif font-medium text-[17px] text-right">
          {navItems.map((link) => {
            return (
              <>
                <li>
                  <Link
                    href={link.href}
                    className={clsx("hover:underline underline-offset-8", {
                      "hover:underline underline-offset-8":
                        pathname === link.href,
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <Link
          href="#booking-from"
          className=" font-serif text-[11px] md:block border border-white text-white px-6 rounded py-2 bg-transparent hover:bg-white hover:text-black order-2 "
        >
          BOOK NOW
        </Link>
        <button
          className="md:hidden  text-white order-1 sm:ml-60 ml-32 pr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col p-4 z-50 text-right">
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
