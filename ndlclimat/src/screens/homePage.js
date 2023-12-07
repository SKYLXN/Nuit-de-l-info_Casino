import React from 'react';
import '../css/homePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <main className="hero-section">
        <h1 className="title">Réchauffement climatique</h1>
        <p className="subtitle"> Faire face au changement climatique</p>
        <button className="begin-button">Decouvrir plus</button>
      </main>
    </div>
  );
}