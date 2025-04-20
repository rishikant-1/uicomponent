import React, { useState } from 'react';

const Docs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tailwind Generated Components
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore ready-to-use components. Copy the code and use it in your own projects effortlessly.
        </p>
      </div>

      {/* Component Preview Box */}
      <div className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          Example: Hover Button Component
        </h2>

        <p className="text-gray-700 mb-4">Current Count: <strong>1</strong></p>

        <button
          className={`bg-green-500 text-white py-2 px-4 rounded-md text-lg cursor-pointer transition duration-300 
            ${isHovered ? 'bg-green-600' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Increment Count
        </button>
      </div>

      {/* Tailwind Explanation */}
      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">Explanation of Tailwind CSS Classes:</h3>
        
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Container:</strong> <br />
            <code className="bg-gray-100 px-2 py-1 rounded">bg-gray-50 p-6 rounded-xl text-center</code>
          </li>
          <li>
            <strong>Heading:</strong> <br />
            <code className="bg-gray-100 px-2 py-1 rounded">text-green-600 text-xl font-semibold</code>
          </li>
          <li>
            <strong>Button:</strong> <br />
            <code className="bg-gray-100 px-2 py-1 rounded">bg-green-500 text-white py-2 px-4 rounded-md transition</code>
          </li>
          <li>
            <strong>Hover Effect:</strong> <br />
            <code className="bg-gray-100 px-2 py-1 rounded">{`isHovered ? 'bg-green-600' : ''`}</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Docs;
