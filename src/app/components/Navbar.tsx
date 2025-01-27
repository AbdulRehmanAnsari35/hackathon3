"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline, IoMenu } from "react-icons/io5"; // Added IoMenu icon
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <div>
      <header className="bg-[#222629] body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-[#86C232] mb-4 md:mb-0">
            {/* Replaced SVG with Image component */}
            <Image
              src="/logo1.png" // Update with your logo image path
              alt="Logo"
              width={200} // Matches w-10 (10 x 4px = 40px)
              height={300} // Matches h-10 (10 x 4px = 40px)
              className="text-white p-4"
            />
          </div>
          {/* Mobile Menu Button (visible on mobile) */}
          <div className="lg:hidden flex items-center">
            <IoMenu
              onClick={toggleMenu}
              className="text-[#86C232] text-3xl cursor-pointer"
            />
          </div>

          {/* Desktop Navigation (Hidden on mobile) */}
          <nav className="text-[#86C232] gap-10 md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden lg:flex">
            <Link
              href="/"
              className={`mr-5 hover:font-medium hover:underline underline-offset-4 decoration-[1px] hover:text-[#9A1750] ${
                pathname === "/" ? "text-[#9A1750]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/RolePlay-Games"
              className={`mr-5 hover:font-medium hover:underline underline-offset-4 decoration-[1px] hover:text-[#9A1750] ${
                pathname === "/About" ? "text-[#9A1750]" : ""
              }`}
            >
              RolePlay
            </Link>
            <Link
              href="/Triple-A"
              className={`mr-5 hover:font-medium hover:underline underline-offset-4 decoration-[1px] hover:text-[#9A1750] ${
                pathname === "/Contact" ? "text-[#9A1750]" : ""
              }`}
            >
              Triple-A
            </Link>
            <Link
              href="/SandBox"
              className={`mr-5 hover:font-medium hover:underline underline-offset-4 decoration-[1px] hover:text-[#9A1750] ${
                pathname === "/Products" ? "text-[#9A1750]" : ""
              }`}
            >
              SandBox
            </Link>

            {/* Cart Icon on the right side of the navbar */}
            <button
            onClick={()=> handleCartClick()}   
            className="ml-10 text-[#86C232] hover:text-[#9A1750]"
            >
              <ShoppingBag size={40} />
              </button>
          </nav>
        </div>
      </header>

      {/* Slide-out Menu (Mobile View) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="w-[75%] bg-[#222629] p-5 fixed left-0 top-0 h-full">
            <div className="flex justify-end">
              <IoCloseOutline
                onClick={toggleMenu}
                className="text-[#86C232] text-3xl cursor-pointer"
              />
            </div>
            <nav className="mt-10 text-white flex flex-col items-start">
              <Link
                href="/"
                className="mb-4 hover:font-medium hover:underline text-[#FF4C7C]"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="mb-4 hover:font-medium hover:underline text-[#FF4C7C]"
              >
                About
              </Link>
              <Link
                href="/Contact"
                className="mb-4 hover:font-medium hover:underline text-[#FF4C7C]"
              >
                Contact
              </Link>
              <Link
                href="/Products"
                className="mb-4 hover:font-medium hover:underline text-[#FF4C7C]"
              >
                Product
              </Link>

              {/* Mobile Cart Icon */}
              <Link
                href="/cart"
                className="mb-4 hover:font-medium hover:underline text-[#FF4C7C]"
              >
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
