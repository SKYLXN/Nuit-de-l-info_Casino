import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SnowEffect from '../components/SnowEffect';
import FlameEffect from '../components/FlameEffect';
import ChristmasTheme from '../themes/ChristmasTheme';
import ClimateChangeTheme from '../themes/ClimateChangeTheme';
import '../css/homePage.css';

export default function HomePage() {
  const theme = useTheme();
  const isChristmasTheme = theme === ChristmasTheme;
  const isClimateChangeTheme = theme === ClimateChangeTheme;

  let textStyle = '';
  if (isChristmasTheme) {
    textStyle = 'frigid-text';
  } else if (isClimateChangeTheme) {
    textStyle = 'fire-text';
  }

  return (
    <div className="home-container">
      {isChristmasTheme && <SnowEffect />}
      {isChristmasTheme && <div className="frost-effect"></div>} {/* Effet de brouillard pour le thème Noël */}
      {isClimateChangeTheme && <FlameEffect />}
      <main className="hero-section">
        <h1 className={`title ${textStyle}`}>Réchauffement climatique</h1>
        <p className={`subtitle ${textStyle}`}>Faire face au changement climatique</p>
        <button className="begin-button">Découvrir plus</button>
      </main>
    </div>
  );
}

