import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">MyProfile</span>. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:emailkamu@example.com"
          className="hover:text-gray-200 transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
