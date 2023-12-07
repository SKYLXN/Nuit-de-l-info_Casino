import { createTheme } from '@mui/material/styles';

const ChristmasTheme = createTheme({
  palette: {
    primary: { main: '#ff0000' }, // Rouge
    secondary: { main: '#008000' }, // Vert
    error: { main: '#ffffff' }, // Blanc
    warning: { main: '#ffd700' }, // Or
    info: { main: '#c0c0c0' }, // Argent
    background: { default: '#ffffff', paper: '#f4f4f4' },
  },
  typography: {
    fontFamily: '"VotrePoliceNoël", Arial, sans-serif',
    h1: { fontFamily: '"VotrePoliceSpécialeNoël", Arial, sans-serif' },
    h2: { fontFamily: '"VotrePoliceSpécialeNoël", Arial, sans-serif' },
  },
  shadows: [
    'none', // ombre 0
    '0px 2px 1px -1px rgba(0,0,0,0.2)', // ombre 1
    // ... autres ombres
  ],
  // Ajoutez ici d'autres personnalisations si nécessaire
});

export default ChristmasTheme;
