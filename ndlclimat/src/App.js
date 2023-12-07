import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import ChristmasTheme from './themes/ChristmasTheme';
import ClimateChangeTheme from './themes/ClimateChangeTheme';
import NavigationBar from './components/NavigationBar';
import './App.css';
import HomePage from './screens/homePage';
import Page404 from './screens/404';

export default function App() {
  const [theme, setTheme] = useState(ChristmasTheme); // Thème initial

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme(theme === ChristmasTheme ? ClimateChangeTheme : ChristmasTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <NavigationBar toggleTheme={toggleTheme} />
          <Routes>
            <Route index element={<HomePage />} />
            {/* Les autres routes ici, commentées ou non */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
