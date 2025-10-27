import React from 'react';

function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center" id="about">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Halo! Saya adalah seorang <span className="font-semibold text-blue-600">Frontend Developer</span> 
        yang senang membuat tampilan web modern dan responsif. 
        Saya suka mempelajari teknologi baru seperti React dan Tailwind CSS 
        untuk menciptakan pengalaman pengguna yang menarik dan interaktif.
      </p>
    </section>
  );
}

export default AboutSection;
