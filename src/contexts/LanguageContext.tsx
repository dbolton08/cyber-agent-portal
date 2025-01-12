import React, { createContext, useContext, useState } from 'react';
import { common as enCommon } from '../translations/common/en';
import { common as esCommon } from '../translations/common/es';
import { features as enFeatures } from '../translations/features/en';
import { features as esFeatures } from '../translations/features/es';

type Language = 'en' | 'es';

interface Translations {
  common: typeof enCommon;
  features: typeof enFeatures;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

const translations: Record<Language, Translations> = {
  en: {
    common: enCommon,
    features: enFeatures
  },
  es: {
    common: esCommon,
    features: esFeatures
  }
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