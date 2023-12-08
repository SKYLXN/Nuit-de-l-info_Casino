import React from 'react';
import '../css/FlameEffect.css';

const FlameEffect = () => {
  return (
    <div className="flames" aria-hidden="true">
      {Array.from({ length: 100 }).map((_, index) => (
        <div 
          key={index} 
          className="flame"
          style={{
            left: `${Math.random() * 100}%`, // Position horizontale aléatoire
            animationDuration: `${Math.random() * 3 + 2}s`, // Durée d'animation aléatoire entre 2 et 5 secondes
            animationDelay: `${Math.random() * 2}s`, // Délai d'animation aléatoire
          }}
        >
          🔥
        </div>
      ))}
    </div>
  );
};

export default FlameEffect;
