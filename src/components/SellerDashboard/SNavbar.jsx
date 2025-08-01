import React from 'react';
import { FiMenu, FiBell, FiUser } from "react-icons/fi";

const SNavbar = ({ toggleSidebar }) => {
  return (
    <header className=" top-0 left-0 right-0 bg-white shadow-sm z-40 border-b border-gray-200">
      <div className=' px-1 md:px-10'>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side - Logo and menu button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600"
              aria-label="Toggle menu"
            >
              <FiMenu className="w-4 h-4 flex md:hidden " />
            </button>
            <a href='/home' className="text-2xl font-bold text-gray-800"><span className='text-3xl text-orange-500'>Q-</span>Cart</a>
          </div>

          {/* Right side - Icons and user */}
          <div className="flex items-center space-x-3">
            {/* Notification bell with indicator */}
            <button className="p-2 relative rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <FiBell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User avatar */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FiUser className="w-4 h-4 text-gray-600" />
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SNavbar;