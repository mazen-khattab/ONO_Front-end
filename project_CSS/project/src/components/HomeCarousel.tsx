import React, { useState } from 'react';
import './HomeCarousel.css';

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Mountain View",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "Majestic mountain peaks reaching into the clouds, offering breathtaking views of nature's grandeur."
  },
  {
    id: 2,
    title: "Ocean Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Golden sun setting over tranquil waters, painting the sky in vibrant hues of orange and pink."
  },
  {
    id: 3,
    title: "Forest Path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    description: "A serene pathway through ancient woods, dappled sunlight filtering through the leafy canopy."
  },
  {
    id: 4,
    title: "City Lights",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    description: "Urban landscape illuminated at night, showcasing the vibrant energy of metropolitan life."
  }
];

const VerticalCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`carousel-track ${isPaused ? 'paused' : ''}`}>
        {[...items, ...items].map((item, index) => (
          <div key={`${item.id}-${index}`} className="carousel-item">
            <div className="carousel-card">
              {/* Front side */}
              <div className="card-front">
                <img src={item.image} alt={item.title} />
                <div className="card-front-content">
                  <h3>{item.title}</h3>
                </div>
              </div>
              
              {/* Back side */}
              <div className="card-back">
                <div className="card-back-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;