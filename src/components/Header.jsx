import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 p-6 shadow-lg">
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          {/* <img
            src="/path-to-your-logo.png"
            alt="Logo"
            className="w-12 h-12 object-cover"
          /> */}
          <i className="text-white text-2xl">CSE HELPER</i>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-lg text-white">
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
            className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center space-x-3">
          <button className="text-white">
            <i className="fas fa-bars text-2xl"></i> {/* Assuming FontAwesome for the hamburger icon */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
