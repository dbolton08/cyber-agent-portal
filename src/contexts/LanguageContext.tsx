import React, { createContext, useContext, useState } from 'react';
import { Language, Translations } from '../translations/types';
import { en } from '../translations/languages/en';
import { es } from '../translations/languages/es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

const defaultTranslations = en;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const getTranslations = (lang: Language): Translations => {
    switch (lang) {
      case 'es':
        return es;
      default:
        return defaultTranslations;
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      translations: getTranslations(language)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};