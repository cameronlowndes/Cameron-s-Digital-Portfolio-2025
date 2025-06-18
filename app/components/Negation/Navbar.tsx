"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutSubmenuOpen, setIsAboutSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsAboutSubmenuOpen(false); // close About submenu when main menu closes
  };

  const toggleAboutSubmenu = () => {
    setIsAboutSubmenuOpen(!isAboutSubmenuOpen);
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

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
      <div className="hidden md:flex gap-6 text-white items-center">
        <Link
          href="/"
          className={isActive("/") ? "text-yellow-400 font-bold underline" : "hover:underline"}
        >
          Home
        </Link>

        {/* About with clickable link and submenu */}
        <div className="relative group">
          <Link
            href="/about"
            className={`flex items-center gap-1 ${
              isActive("/about") ? "text-yellow-400 font-bold underline" : "hover:underline"
            }`}
          >
            About <FaChevronDown className="text-sm" />
          </Link>

          {/* Submenu */}
          <div className="absolute left-0 -mt-1 w-40 bg-gray-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50 shadow-lg pointer-events-auto">
            <Link href="/about" className="block px-4 py-2 text-white hover:bg-gray-600">
              Overview
            </Link>
            <Link href="/about/CoreValues" className="block px-4 py-2 text-white hover:bg-gray-600">
             Core Values
            </Link>
          </div>
        </div>

        <Link
          href="/services"
          className={isActive("/services") ? "text-yellow-400 font-bold underline" : "hover:underline"}
        >
          Services
        </Link>
        <Link
          href="/projects"
          className={isActive("/projects") ? "text-yellow-400 font-bold underline" : "hover:underline"}
        >
          Projects
        </Link>
        <Link
          href="/Contact"
          className={isActive("/Contact") ? "text-yellow-400 font-bold underline" : "hover:underline"}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-white" aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden z-40">
          <Link
            href="/"
            className={`py-2 w-full text-center ${
              isActive("/") ? "text-yellow-500 font-bold underline" : "hover:underline"
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>

          {/* About clickable link and separate submenu toggle, centered */}
          <div className="w-full">
            <div className="flex justify-center items-center gap-2 px-4 py-2">
              <Link
                href="/about"
                className={`${
                  isActive("/about") ? "text-yellow-500 font-bold underline" : "hover:underline"
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <button
                onClick={toggleAboutSubmenu}
                aria-label={isAboutSubmenuOpen ? "Close About submenu" : "Open About submenu"}
                className="text-sm"
                type="button"
              >
                {isAboutSubmenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {/* Mobile About submenu */}
            {isAboutSubmenuOpen && (
              <div className="flex flex-col w-full bg-gray-100">
                <Link
                  href="/about"
                  className="py-2 px-6 hover:bg-gray-200"
                  onClick={() => {
                    toggleMenu();
                    setIsAboutSubmenuOpen(false);
                  }}
                >
                  Overview
                </Link>
                <Link
                  href="/about/CoreValues"
                  className="py-2 px-6 hover:bg-gray-200"
                  onClick={() => {
                    toggleMenu();
                    setIsAboutSubmenuOpen(false);
                  }}
                >
                 Core Values
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/services"
            className={`py-2 w-full text-center ${
              isActive("/services") ? "text-yellow-500 font-bold underline" : "hover:underline"
            }`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`py-2 w-full text-center ${
              isActive("/projects") ? "text-yellow-500 font-bold underline" : "hover:underline"
            }`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/Contact"
            className={`py-2 w-full text-center ${
              isActive("/Contact") ? "text-yellow-500 font-bold underline" : "hover:underline"
            }`}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
