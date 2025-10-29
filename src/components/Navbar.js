import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Skills</li>
          <li className="hover:text-purple-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>
        <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
