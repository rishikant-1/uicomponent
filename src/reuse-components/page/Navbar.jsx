import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-sm w-full sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
 
          <div className="flex-shrink-0">
            <span className="ml-10 md:ml-0 text-xl font-bold text-indigo-600">UI Zone</span>
          </div>
          <div className="hidden lg:flex md:space-x-8 space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="component" className="text-gray-600 hover:text-indigo-600 font-medium">Components</Link>
            <Link to="docs" className="text-gray-600 hover:text-indigo-600 font-medium">Docs</Link>
            <Link to="blog" className="text-gray-600 hover:text-indigo-600 font-medium">Blog</Link>
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-600 text-white placeholder:to-white rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Try Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
