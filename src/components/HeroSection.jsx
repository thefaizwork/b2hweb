import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/path-to-background.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Start Playing</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white py-4 px-8 rounded text-lg">
          Play Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
