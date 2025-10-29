import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="font-poppins bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 py-6 text-center">
        <p className="text-black font-medium">
          © 2025 Nesa Fatikha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
