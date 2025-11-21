// Header.jsx
import React from 'react';
import { FaSearch, FaGlobe } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img
            src="/airbnb-logo.png"
            alt="Airbnb"
            className="h-8 sm:h-10 object-contain cursor-pointer"
          />
        </div>

        {/* Center - Search Bar */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <div className="flex items-center border-2 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition">
            <input
              type="text"
              placeholder="Start your search"
              className="flex-grow text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
            />
            <button className="bg-red-500 text-white rounded-full p-2 ml-2">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right - Navigation */}
        <div className="flex items-center space-x-4 text-gray-700">
          <button className="hidden md:block text-sm font-medium hover:bg-gray-100 px-3 py-2 rounded-full">
            Become a host
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaGlobe />
          </button>
          <button className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-md transition">
            <FiMenu />
            <img
              src="/user-avatar.jpg"
              alt="User Avatar"
              className="h-6 w-6 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;