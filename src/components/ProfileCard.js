import React from 'react';
import profile from '../assets/images/profile.jpg';

function ProfileCard() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white pt-28 pb-16 text-center">
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500 shadow-md object-cover"
      />
      <h2 className="mt-6 text-3xl font-bold text-gray-800">Nesa Fatikha</h2>
      <p className="text-blue-600 font-medium mt-2">Frontend Developer</p>
      <p className="max-w-md mx-auto mt-4 text-gray-600 leading-relaxed">
        Passionate about creating beautiful, user-friendly interfaces using
        modern web technologies like React and Tailwind CSS.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Contact Me
      </button>
    </section>
  );
}

export default ProfileCard;
