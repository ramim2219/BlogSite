import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 p-6 shadow-lg">
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <i className="text-white text-2xl font-bold tracking-widest">
            CSE HELPER
          </i>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div className="md:flex hidden">
          <Link
            to="/subscribe"
            className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <i
              className={`fas ${
                isMenuOpen ? 'fa-times' : 'fa-bars'
              } text-2xl transition duration-300`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-indigo-800 text-white transition-all duration-300 rounded-lg shadow-lg mt-4`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              to="/"
              className="py-2 px-4 hover:bg-indigo-600 transition duration-300 rounded-lg w-11/12 text-center"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="py-2 px-4 hover:bg-indigo-600 transition duration-300 rounded-lg w-11/12 text-center"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="py-2 px-4 hover:bg-indigo-600 transition duration-300 rounded-lg w-11/12 text-center"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/subscribe"
              className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-300 w-11/12 text-center"
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
