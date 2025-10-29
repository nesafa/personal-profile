import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <Navbar />
      <main className="pt-20 flex flex-col items-center">
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
