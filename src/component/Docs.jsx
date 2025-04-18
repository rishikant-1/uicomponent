import React, { useState } from 'react';

// React Functional Component
const Docs = () => {
  // useState hook to manage the state for count
  const [count, setCount] = useState(0);  // Initializing state variable 'count' with 0
  const [isHovered, setIsHovered] = useState(false); // State variable to track hover effect on the button

  // handleClick function to increment the count when the button is clicked
  const handleClick = () => {
    setCount(count + 1);  // Increment count by 1 each time the button is clicked
  };

  // Mouse event functions to handle hover effect on the button
  const handleMouseEnter = () => {
    setIsHovered(true);  // Set isHovered to true when the mouse enters the button
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set isHovered to false when the mouse leaves the button
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      {/* Heading with Tailwind classes for styling */}
      <h1 className="text-green-500 text-2xl">Welcome to My Website!</h1>

      {/* Paragraph displaying the current count */}
      <p className="text-gray-800 text-lg">Current Count: {count}</p>

      {/* Button with hover effect */}
      <button
        // Tailwind CSS classes for button styling
        className={`bg-green-500 text-white py-2 px-4 rounded-md text-lg cursor-pointer transition duration-300 
        ${isHovered ? 'bg-green-600' : ''}`} // Applying a darker green shade when hovered
        onClick={handleClick}              // When the button is clicked, it triggers handleClick to increment count
        onMouseEnter={handleMouseEnter}    // When mouse enters the button, it triggers handleMouseEnter to activate hover
        onMouseLeave={handleMouseLeave}    // When mouse leaves the button, it triggers handleMouseLeave to remove hover
      >
        Increment Count
      </button>

      {/* Explanation of Tailwind CSS classes used */}
      <p className="mt-4 text-blue-600">
        <strong>Explanation of Tailwind CSS classes:</strong>
      </p>
      
      <p className="text-gray-700 mt-2">
        <strong>1. Container:</strong> 
        <br /> `bg-gray-100`: Light gray background. 
        <br /> `p-6`: Padding of 6 units around the content.
        <br /> `rounded-lg`: Large rounded corners for the container. 
        <br /> `text-center`: Center-aligns all text inside the container.
      </p>
      
      <p className="text-gray-700 mt-2">
        <strong>2. Heading (`h1`):</strong> 
        <br /> `text-green-500`: Green text color for the heading.
        <br /> `text-2xl`: Extra large text size for the heading.
      </p>
      
      <p className="text-gray-700 mt-2">
        <strong>3. Paragraph (`p`):</strong> 
        <br /> `text-gray-800`: Dark gray color for the text. 
        <br /> `text-lg`: Large text size for the paragraph.
      </p>
      
      <p className="text-gray-700 mt-2">
        <strong>4. Button (`button`):</strong> 
        <br /> `bg-green-500`: Green background for the button. 
        <br /> `text-white`: White text color. 
        <br /> `py-2 px-4`: Padding inside the button to make it more clickable. 
        <br /> `rounded-md`: Medium rounded corners for the button. 
        <br /> `text-lg`: Large font size for the button text. 
        <br /> `cursor-pointer`: Pointer cursor when hovering over the button. 
        <br /> `transition duration-300`: Smooth transition effect when the button is hovered.
      </p>

      <p className="text-gray-700 mt-2">
        <strong>5. Hover Effect:</strong> 
        <br /> The button’s background color changes when the mouse is hovered over it. 
        <br /> `${isHovered ? 'bg-green-600' : ''}`: This conditional class applies a darker green background when the button is hovered.
      </p>

    </div>
  );
}

export default Docs;
