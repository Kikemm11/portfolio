import { createContext } from 'react';
import { translations } from '../constants/translations';

export const LanguageContext = createContext(null);

export const lookup = (language, path) =>
  path.split('.').reduce((value, key) => value?.[key], translations[language]);
