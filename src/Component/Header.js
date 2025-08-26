import React, { useState, useRef, useEffect } from "react";
import Poeage from "../Asset/logo.png";
import {
  FaCaretDown,
  FaBars,
  FaTimes,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current &&
        !Object.values(dropdownRefs.current).some((ref) =>
          ref?.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-cyan-500 via-black to-blue-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-16">
        {/* Logo */}
        <a href="https://www.poeage.com/">
          <img src={Poeage} alt="Logo" className="w-36 drop-shadow-lg" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-white space-x-8 font-medium">
          <a
            href="/projects"
            className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Projects
          </a>

          {/* Group of Companies Dropdown */}
          <div
            className="relative"
            ref={(el) => (dropdownRefs.current.group = el)}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "group" ? null : "group")
              }
              className="flex items-center gap-1 hover:text-cyan-300 transition"
            >
              <FaBuilding className="text-lg" />
              Group of Companies
              <FaCaretDown />
            </button>
            {openDropdown === "group" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-xl shadow-xl py-2 w-56 animate-fadeIn">
                <a
                  href="https://poeage-it-solution.vercel.app/"
                  className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition"
                >
                  Poeage IT Solution
                </a>
                <a
                  href="https://poeageitsolution.vercel.app/"
                  className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition"
                >
                  Poeage Builders
                </a>
                <a
                  href="https://poeagehub.vercel.app/"
                  className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition"
                >
                  Poeage Hub
                </a>
                <a
                  href="https://pws-rouge-five.vercel.app/"
                  className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition"
                >
                  Poeage Web Services
                </a>
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div
            className="relative"
            ref={(el) => (dropdownRefs.current.more = el)}
          >
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "more" ? null : "more")
              }
              className="flex items-center gap-1 hover:text-cyan-300 transition"
            >
              <FaBriefcase className="text-lg" />
              More
              <FaCaretDown />
            </button>
            {openDropdown === "more" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-xl shadow-xl py-2 w-40 animate-fadeIn">
                <a
                  href="/service"
                  className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition"
                >
                  Services
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-white focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-3 shadow-lg animate-slideDown">
          <a
            href="/projects"
            className="block py-2 hover:text-cyan-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="/service"
            className="block py-2 hover:text-cyan-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <div className="border-t border-gray-300 pt-2">
            <p className="font-semibold text-gray-700">Group of Companies</p>
            <a
              href="https://poeage-it-solution.vercel.app/"
              className="block py-2 hover:text-cyan-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Poeage IT Solution
            </a>
            <a
              href="https://poeageitsolution.vercel.app/"
              className="block py-2 hover:text-cyan-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Poeage Builders
            </a>
            <a
              href="https://poeagehub.vercel.app/"
              className="block py-2 hover:text-cyan-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Poeage Hub
            </a>
            <a
              href="https://pws-rouge-five.vercel.app/"
              className="block py-2 hover:text-cyan-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Poeage Web Services
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
