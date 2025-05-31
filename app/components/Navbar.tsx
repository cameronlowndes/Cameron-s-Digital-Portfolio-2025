"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ import hook
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-800 shadow-md z-50 p-2">
      {/* Logo */}
      <Link href="/" className="flex items-center text-center">
        <div>
          <h1 className="text-white text-sm font-bold m-0">Cameron Digital Works</h1>
          <h2 className="text-gray-400 text-xs font-normal m-0">Welcome to Cameron Digital Works</h2>
        </div>
      </Link>



      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-white">
        <Link href="/" className={isActive("/") ? "text-yellow-400 font-bold underline" : "hover:underline"}>
          Home
        </Link>
        <Link href="/about" className={isActive("/about") ? "text-yellow-400 font-bold underline" : "hover:underline"}>
          About
        </Link>
        <Link href="/services" className={isActive("/services") ? "text-yellow-400 font-bold underline" : "hover:underline"}>
          Services
        </Link>
        <Link href="/projects" className={isActive("/projects") ? "text-yellow-400 font-bold underline" : "hover:underline"}>
          Projects
        </Link>
        <Link href="/contact" className={isActive("/contact") ? "text-yellow-400 font-bold underline" : "hover:underline"}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          <Link href="/" className={`py-2 ${isActive("/") ? "text-yellow-500 font-bold underline" : "hover:underline"}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className={`py-2 ${isActive("/about") ? "text-yellow-500 font-bold underline" : "hover:underline"}`} onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className={`py-2 ${isActive("/services") ? "text-yellow-500 font-bold underline" : "hover:underline"}`} onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/projects" className={`py-2 ${isActive("/projects") ? "text-yellow-500 font-bold underline" : "hover:underline"}`} onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/contact" className={`py-2 ${isActive("/contact") ? "text-yellow-500 font-bold underline" : "hover:underline"}`} onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
