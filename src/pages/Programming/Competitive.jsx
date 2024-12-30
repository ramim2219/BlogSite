import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Competitive = () => {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* RoadMap Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-xl font-semibold mb-4">RoadMap</h5>
          <p className="text-gray-700 mb-4">
            A structured roadmap to help you master Competitive Programming.
            Learn about data structures, algorithms, and how to approach problems.
          </p>
          <Link to="/competitive-programming-roadmap" className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Learn More
          </Link>
        </div>

        {/* Basics of Cpp Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-xl font-semibold mb-4">Basics of C++</h5>
          <p className="text-gray-700 mb-4">
            Get comfortable with C++ and its core concepts: pointers, data structures, and algorithms.
            Perfect for beginners who want to start competitive programming with C++.
          </p>
          <Link to="/Basics-Of-Cpp" className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Learn More
          </Link>
        </div>

        {/* Topic List with Problems Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-xl font-semibold mb-4">Topic List with Problems</h5>
          <p className="text-gray-700 mb-4">
            A list of topics you need to master for Competitive Programming with curated problems, solutions, and explanations.
            Start solving and improve your skills.
          </p>
          <Link to="/competitive-programming-roadmap" className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Competitive;
