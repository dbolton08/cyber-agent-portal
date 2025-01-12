import React, { createContext, useContext, useState } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
}

const translations = {
  en,
  es,
  fr: en,
  de: en,
  it: en,
  zh: en
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      translations: translations[language]
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
