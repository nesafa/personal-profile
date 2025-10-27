import React from 'react';

function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 'Lanjut' },
    { name: 'CSS', level: 'Lanjut' },
    { name: 'JavaScript', level: 'Menengah' },
    { name: 'React.js', level: 'Menengah' },
    { name: 'Tailwind CSS', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Dasar' },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center" id="skills">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{skill.name}</h3>
            <p className="text-gray-500 mt-2">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
