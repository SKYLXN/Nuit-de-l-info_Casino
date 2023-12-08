import React from 'react';
import '../css/SnowEffect.css';

const SnowEffect = () => {
    return (
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 200 }).map((_, index) => (
          <div key={index} className="snowflake" style={{
            left: `${Math.random() * 100}%`, // Position horizontale aléatoire
            top: `${Math.random() * -100}px`, // Position verticale initiale hors de l'écran
            animationDelay: `${Math.random() * 5}s`, // Délai aléatoire pour plus de naturel
          }}>
            ❅
          </div>
        ))}
      </div>
    );
  };
  
  export default SnowEffect;
