import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Nesa Fatikha</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 