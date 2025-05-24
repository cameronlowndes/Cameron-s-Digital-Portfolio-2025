"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";  // Importing the icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-800 shadow-md z-50 p-2">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-center">
          <h1 className="text-white text-sm font-bold m-0">Cameron Digital Works</h1>
          <h2 className="text-gray-400 text-xs font-normal m-0">Welcome to Cameron Digital Works</h2>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-white">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Switch between icons */}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          <Link href="/" className="py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/services" className="py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/projects" className="py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        
        </div>
      )}
    </nav>
  );
}
