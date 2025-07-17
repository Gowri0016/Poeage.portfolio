import React, { useState, useRef, useEffect } from 'react';
import Poeage from '../Asset/logo.png';
import { FaCaretDown, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="z-20 w-full bg-gradient-to-r from-cyan-400 to-blue-800 shadow-md text-black">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-16">
        <a href="https://www.poeage.com/" className="text-lg w-96 h-72 font-bold flex items-center">
          <img src={Poeage} alt="Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-white space-x-8">
          <a href="/contact" className="hover:text-gradient-to-r from-cyan-400 to-blue-800 transition">
            Contact
          </a>
          <a href="/projects" className="hover:text-gradient-to-r from-cyan-400 to-blue-800 transition">
            Project
          </a>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 text-white"
            >
              <FaBriefcase className="text-lg" />
              More
              <FaCaretDown />
            </button>
            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-40">
                <a
                  href="/service"
                  className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Service
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

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-4 py-4 space-y-2">
          <a
            href="/contact"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/projects"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Project
          </a>
          <a
            href="/service"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
