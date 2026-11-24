import { useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './routes/HomePage';
import ProjectDetail from './routes/ProjectDetail';
import { themes } from './constants/theme';
import LanguageProvider from './context/LanguageProvider';

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themes[theme].canvas);
  }, [theme]);

  return (
    <LanguageProvider>
      <HashRouter>
        <Navbar
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === 'light' ? 'dark' : 'light'))
          }
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}
