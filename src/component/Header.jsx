import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-indigo-600">UI Zone</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Components</a>
            <Link to="docs" className="text-gray-600 hover:text-indigo-600 font-medium">Docs</Link>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Blog</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Try Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
