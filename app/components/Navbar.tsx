"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-800 shadow-md z-50 p-2">
      {/* Logo */}
      <div className="flex items-center">
        <img src="image/logo.png" alt="Logo" className="h-10 mr-2" />
        <div className="welcome text-center">
          <h1 className="text-white text-sm font-bold m-0">Cameron Lowndes</h1>
          <h2 className="text-gray-400 text-xs font-normal m-0">Welcome to Cameron's Digital Portfolio</h2>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 list-none m-0 p-0">
        <li className="relative">
          <Link href="/" className="block px-3 py-2 text-white text-xs font-bold uppercase hover:text-red-500 transition duration-200">
            Home
          </Link>
        </li>
        <li className="relative">
          <Link href="/about" className="block px-3 py-2 text-white text-xs font-bold uppercase hover:text-red-500 transition duration-200">
            About
          </Link>
          <ul className="absolute top-full left-0 hidden bg-white shadow-md z-10 text-center w-44">
            <li>
              <Link href="/about/team" className="block px-3 py-2 text-gray-700 text-xs hover:text-red-500 transition duration-200">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/about/history" className="block px-3 py-2 text-gray-700 text-xs hover:text-red-500 transition duration-200">
                History
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link href="/services" className="block px-3 py-2 text-white text-xs font-bold uppercase hover:text-red-500 transition duration-200">
            Services
          </Link>
        </li>
        <li className="relative">
          <Link href="/contact" className="block px-3 py-2 text-white text-xs font-bold uppercase hover:text-red-500 transition duration-200">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
        <ul className="space-y-4 text-white text-xs font-bold uppercase">
          <li>
            <Link href="/" className="block px-3 py-2 hover:text-red-500 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-3 py-2 hover:text-red-500 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block px-3 py-2 hover:text-red-500 transition duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-3 py-2 hover:text-red-500 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
