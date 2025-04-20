import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-[90vh] bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="mb-6">
        <div className="text-3xl font-bold text-indigo-600">UI-Zone</div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 ">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg max-w-md mb-6">
        We're building something amazing. Our dashboard will be available soon!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="px-5 py-2 text-nowrap bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Notify Me
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} UI-Zone. All rights reserved.
      </p>
    </div>
  );
}
