import { createTheme } from '@mui/material/styles';

const ClimateChangeTheme = createTheme({
  palette: {
    primary: { main: '#ff5722' }, // Orange Brûlé
    secondary: { main: '#bf360c' }, // Rouge Foncé
    error: { main: '#d84315' }, // Rouge Terre
    warning: { main: '#ff9800' }, // Orange
    info: { main: '#3e2723' }, // Marron Terre
    background: { default: '#fde0dc', paper: '#ffebee' },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { fontFamily: 'Arial, sans-serif', fontWeight: 'bold' },
    h2: { fontFamily: 'Arial, sans-serif', fontWeight: 'bold' },
  },
  shadows: [
    'none', // ombre 0
    '0px 2px 1px -1px rgba(0,0,0,0.2)', // ombre 1
    // ... autres ombres
  ],
  // Ajoutez ici d'autres personnalisations si nécessaire
});

export default ClimateChangeTheme;
