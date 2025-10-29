import React from "react";

function SkillsSection() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GitHub"];

  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="font-medium text-gray-700">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
