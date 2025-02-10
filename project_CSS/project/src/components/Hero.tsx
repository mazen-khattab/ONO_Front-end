import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div 
      className="hero"
      id="hero"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/736x/36/b0/27/36b0278b47d98ef240d4ea29bf1c9d02.jpg)'
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Challenge Your Mind</h1>
          <p className="hero-description">
            Discover our collection of unique puzzles and intelligent toys
          </p>
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;