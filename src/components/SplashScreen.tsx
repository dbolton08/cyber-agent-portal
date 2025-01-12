import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import GlitchText from "./GlitchText";
import { useLanguage } from '@/contexts/LanguageContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const { setLanguage, translations } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'zh', label: '中文' }
  ] as const;

  const handleLanguageSelect = async (lang: typeof languages[number]['code']) => {
    setLanguage(lang);
    setLoading(true);
    
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(i);
    }
    
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50">
        <img 
          src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
          alt="Matrix Oracle Logo" 
          className="h-32 w-32 mb-8 animate-pulse"
        />
        <div className="w-64 space-y-4">
          <Progress value={progress} className="h-1 bg-matrix-dark" />
          <p className="text-matrix-green text-sm font-mono animate-pulse">
            {translations.system.decryptingData}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50">
      <img 
        src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
        alt="Matrix Oracle Logo" 
        className="h-48 w-48 mb-12"
      />
      <div className="space-y-12 text-center">
        <GlitchText 
          text={translations.system.selectLanguage}
          className="text-4xl md:text-6xl mb-2"
        />
        <div className="text-matrix-light text-sm mb-8">
          {translations.system.chooseLanguage}
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className="cyber-button w-full"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;