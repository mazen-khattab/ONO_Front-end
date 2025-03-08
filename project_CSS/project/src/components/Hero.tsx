import React from "react";
import "./Hero.css";
import HomeCarousel from "./HomeCarousel.tsx";

const Hero = () => {
  return (
    <div
      className="hero"
      id="hero"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/36/b0/27/36b0278b47d98ef240d4ea29bf1c9d02.jpg)",
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Challenge Your <span>Mind</span>
          </h1>
          <p className="hero-description">
            Discover our collection of unique puzzles and intelligent toys
          </p>
        </div>

        <a href="./AllProducts" className="shop-now">
          Shop Now
        </a>
      </div>
      <div className="home-carousel-container">
        <HomeCarousel right={40} />
        <HomeCarousel direction="reverse" right={220} />
        <HomeCarousel right={400} />
      </div>
    </div>
  );
};

export default Hero;
