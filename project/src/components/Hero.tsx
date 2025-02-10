import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative"
      style={{
        height: '100vh',
        backgroundImage: 'url(https://i.pinimg.com/736x/36/b0/27/36b0278b47d98ef240d4ea29bf1c9d02.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Challenge Your Mind
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover our collection of unique puzzles and intelligent toys
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;