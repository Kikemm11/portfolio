import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'typeface-poppins';
import { themes, buildThemeStyles } from './constants/theme.js';
import './styles/index.css';
import App from './App.jsx';

// Turn the palette constants into CSS variables before the first render.
const themeStyles = document.createElement('style');
themeStyles.dataset.generatedTheme = 'true';
themeStyles.textContent = buildThemeStyles();
document.head.appendChild(themeStyles);

// Set the saved theme early so the page never flashes the wrong palette.
const storedTheme = localStorage.getItem('portfolio-theme');
document.documentElement.dataset.theme = themes[storedTheme]
  ? storedTheme
  : 'light';

document.documentElement.lang =
  localStorage.getItem('portfolio-language') === 'es' ? 'es' : 'en';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
