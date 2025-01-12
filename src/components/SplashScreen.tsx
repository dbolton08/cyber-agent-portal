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
        <div className="relative z-10 p-8 max-w-md w-full space-y-8">
          <img 
            src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
            alt="Matrix Oracle Logo" 
            className="h-32 w-32 mb-8 mx-auto animate-hologram"
          />
          <div className="space-y-6">
            <Progress 
              value={progress} 
              className="h-2 bg-cyber-dark border border-matrix-green/30"
              indicatorClassName="bg-gradient-to-r from-matrix-green to-cyber-blue animate-pulse"
            />
            <div className="space-y-2">
              <p className="text-matrix-green text-lg font-mono animate-pulse text-center">
                {translations.system.decryptingData}
              </p>
              <div className="text-matrix-green/50 text-sm font-mono space-y-1">
                <p className="animate-pulse delay-100">Initializing neural network...</p>
                <p className="animate-pulse delay-200">Establishing secure connection...</p>
                <p className="animate-pulse delay-300">Decrypting agent protocols...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50">
      <MatrixRain />
      <div className="relative z-10 max-w-lg w-full mx-4 p-8 bg-cyber-panel/80 backdrop-blur-md rounded-lg border border-matrix-green/30 shadow-[0_0_30px_rgba(0,255,65,0.1)]">
        <img 
          src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
          alt="Matrix Oracle Logo" 
          className="h-32 w-32 mb-12 mx-auto animate-float"
        />
        
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <GlitchText 
              text="MATRIX ORACLE"
              className="text-4xl md:text-5xl font-bold text-matrix-green tracking-wider mb-2"
            />
            <GlitchText 
              text={translations.system.selectLanguage}
              className="text-2xl md:text-3xl font-bold text-matrix-green tracking-wider mb-4"
            />
            <p className="text-matrix-green text-lg tracking-wide font-mono">
              {translations.system.chooseLanguage}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                onMouseEnter={() => playSound('hover')}
                className="w-full py-4 px-6 bg-cyber-dark/50 border border-matrix-green text-matrix-green 
                         hover:bg-matrix-green/10 transition-all duration-300 rounded-lg
                         font-mono tracking-wider text-lg
                         hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] relative overflow-hidden
                         focus:outline-none focus:ring-2 focus:ring-matrix-green/50
                         group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {lang.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-matrix-green/0 via-matrix-green/5 to-matrix-green/0 
                              transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;