import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">MyProfile</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Skills</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
