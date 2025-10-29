import React from "react";
import profile from "../assets/images/profile.jpg"; // pastikan gambar kamu ada di folder ini

function ProfileCard() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-pink-200 pt-28 px-8">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-purple-600 font-semibold">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Creative Designer <br /> & Frontend Developer
        </h1>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Passionate in creating beautiful and functional digital experiences. 
          I love blending creativity with technology to make impactful solutions 
          for users and brands.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-2">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
            See My Work
          </button>
          <button className="border border-purple-400 text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-purple-50 transition">
            Contact Me
          </button>
        </div>

        <div className="flex gap-4 justify-center md:justify-start pt-4 text-2xl text-purple-600">
          <i className="fab fa-instagram hover:text-pink-500 transition"></i>
          <i className="fab fa-dribbble hover:text-pink-500 transition"></i>
          <i className="fab fa-linkedin hover:text-blue-600 transition"></i>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={profile}
          alt="Nesa Fatikha"
          className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-lg"
        />
      </div>
    </section>
  );
}

export default ProfileCard;
