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
            className="h-24 w-24 mb-8 mx-auto animate-pulse"
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
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50">
      <MatrixRain />
      <div className="relative z-10 flex flex-col items-center max-w-md w-full mx-4">
        <img 
          src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
          alt="Matrix Oracle Logo" 
          className="h-24 w-24 mb-12 animate-float"
        />
        
        <div className="w-full space-y-8">
          <div className="text-center space-y-4">
            <GlitchText 
              text={translations.system.selectLanguage}
              className="text-3xl md:text-4xl font-bold text-matrix-green tracking-wider mb-4"
            />
            <p className="text-matrix-green text-lg tracking-wide font-mono">
              {translations.system.chooseLanguage}
            </p>
          </div>
          
          <div className="space-y-3 w-full">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                onMouseEnter={() => playSound('hover')}
                className="w-full py-3 px-6 bg-transparent border border-matrix-green text-matrix-green 
                         hover:bg-matrix-green/10 transition-all duration-300 rounded
                         font-mono tracking-wider text-lg
                         hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] relative overflow-hidden
                         focus:outline-none focus:ring-2 focus:ring-matrix-green/50"
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