import { useEffect, useState } from 'react';
import { LanguageContext, lookup } from './languageContext';

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    document.documentElement.lang === 'es' ? 'es' : 'en',
  );

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (path, vars = {}) => {
    const found = lookup(language, path) ?? lookup('en', path) ?? path;
    if (typeof found !== 'string') return found;
    return Object.entries(vars).reduce(
      (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
      found,
    );
  };

  /** Resolves a bilingual field from src/data to the active language. */
  const loc = (value) => {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      ('en' in value || 'es' in value)
    ) {
      return value[language] ?? value.en;
    }
    return value;
  };

  const toggleLanguage = () =>
    setLanguage((current) => (current === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, t, loc, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
