import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use this for routing

const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-blue-100">
      {/* Left Side */}
      <div className="lg:w-1/2 p-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Your Project Title</h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-8">Description of your project goes here...</p>
        <div className="flex flex-wrap justify-center lg:justify-between">
          {/* Image 1 */}
          <img src="/path/to/image1.jpg" alt="Image 1" className="w-full lg:w-1/3 rounded-lg shadow-md transform hover:rotate-12 transition duration-300 mb-4 lg:mb-0" />
          {/* Image 2 */}
          <img src="/path/to/image2.jpg" alt="Image 2" className="w-full lg:w-1/3 rounded-lg shadow-md transform hover:rotate-12 transition duration-300 mb-4 lg:mb-0" />
          {/* Image 3 */}
          <img src="/path/to/image3.jpg" alt="Image 3" className="w-full lg:w-1/3 rounded-lg shadow-md transform hover:rotate-12 transition duration-300 mb-4 lg:mb-0" />
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8">
        <Link to="/get-started" className="py-4 px-6 bg-blue-500 text-white rounded-lg text-lg lg:text-xl font-semibold mb-4 lg:mb-8 hover:bg-blue-600 transition duration-300">Get Started</Link>
        <Link to="/login" className="py-4 px-6 bg-gray-300 text-gray-800 rounded-lg text-lg lg:text-xl font-semibold hover:bg-gray-400 transition duration-300">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;