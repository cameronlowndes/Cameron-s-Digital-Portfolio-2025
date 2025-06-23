"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;
  const activeClass = "font-bold underline text-yellow-400";

  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-blue-900 text-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="text-xl font-bold text-white drop-shadow-md">
        Cameron Digital Works
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className={isActive("/") ? activeClass : "hover:underline"}>
          Home
        </Link>

        <div ref={aboutRef} className="relative">
          <button
            onClick={toggleAbout}
            className={`flex items-center gap-1 ${
              pathname.startsWith("/about") || pathname.startsWith("/OurCoreValues")
                ? activeClass
                : "hover:underline"
            }`}
          >
            About <FaCaretDown className="text-sm" />
          </button>
          {isAboutOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black border border-gray-200 rounded-md shadow-lg z-10">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link
                href="/about/CoreValues"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Values
              </Link>
            </div>
          )}
        </div>

        <Link href="/services" className={isActive("/services") ? activeClass : "hover:underline"}>
          Services
        </Link>
        <Link href="/projects" className={isActive("/projects") ? activeClass : "hover:underline"}>
          Projects
        </Link>
        <Link href="/contact" className={isActive("/contact") ? activeClass : "hover:underline"}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-4 md:hidden">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-2">
            <Link
              href="/"
              className={`py-2 ${isActive("/") ? activeClass : "hover:underline"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div ref={aboutRef} className="relative">
              <button
                onClick={toggleAbout}
                className={`py-2 flex items-center gap-1 ${
                  pathname.startsWith("/about") || pathname.startsWith("/OurCoreValues")
                    ? activeClass
                    : "hover:underline"
                }`}
              >
                About <FaCaretDown className="text-sm" />
              </button>
              {isAboutOpen && (
                <div className="absolute bg-white text-black border border-gray-200 rounded-md shadow-lg z-10 left-0 mt-2 w-48">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link
                    href="/about/CoreValues"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Values
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`py-2 ${isActive("/projects") ? activeClass : "hover:underline"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`py-2 ${isActive("/contact") ? activeClass : "hover:underline"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
