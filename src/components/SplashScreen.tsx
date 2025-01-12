import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { translations } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 3000); // Simulate loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (loading) {
    return (
      <div className="splash-screen">
        <h1>{translations.common.welcome}</h1>
        <p>{translations.common.subtitle}</p>
      </div>
    );
  }

  return null;
};

export default SplashScreen;
