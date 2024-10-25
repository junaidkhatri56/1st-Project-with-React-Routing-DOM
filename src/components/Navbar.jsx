import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-lg py-4 px-6 flex justify-between items-center fixed z-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          MyStore
        </Link>
      </div>


      {/* Authentication Links */}
      <div className="hidden md:flex space-x-6">
      <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Products
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Signup
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
