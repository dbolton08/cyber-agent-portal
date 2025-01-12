import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import GlitchText from "./GlitchText";
import { useLanguage } from '@/contexts/LanguageContext';
import MatrixRain from './MatrixRain';
import { playSound } from '@/utils/soundEffects';

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
    playSound('click');
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
        <MatrixRain />
        <div className="relative z-10 p-8 max-w-md w-full">
          <img 
            src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
            alt="Matrix Oracle Logo" 
            className="h-24 w-24 mb-8 animate-pulse mx-auto"
          />
          <div className="w-full space-y-4">
            <Progress value={progress} className="h-1 bg-matrix-dark" />
            <p className="text-matrix-green text-sm font-mono animate-pulse text-center">
              {translations.system.decryptingData}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50 p-4 md:p-8">
      <MatrixRain />
      <div className="relative z-10 flex flex-col items-center max-w-md w-full bg-cyber-panel/30 backdrop-blur-sm p-8 rounded-lg">
        <img 
          src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
          alt="Matrix Oracle Logo" 
          className="h-24 w-24 mb-8 mx-auto"
        />
        <div className="space-y-8 text-center w-full">
          <div className="space-y-4">
            <GlitchText 
              text={translations.system.selectLanguage}
              className="text-xl md:text-2xl font-bold text-matrix-green"
            />
            <p className="text-matrix-light text-sm">
              {translations.system.chooseLanguage}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                onMouseEnter={() => playSound('hover')}
                className="cyber-button w-full text-sm py-2"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;