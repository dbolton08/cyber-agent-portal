import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import GlitchText from "./GlitchText";
import { useLanguage } from '@/contexts/LanguageContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const { setLanguage } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' },
    { code: 'it', label: 'Italian' },
    { code: 'zh', label: 'Chinese' }
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
        <div className="w-64 space-y-4">
          <Progress value={progress} className="h-1 bg-matrix-dark" />
          <p className="text-matrix-green text-sm font-mono animate-pulse">
            Decrypting agent data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50">
      <div className="space-y-12 text-center">
        <GlitchText 
          text="Select Language"
          className="text-4xl md:text-6xl mb-2"
        />
        <div className="text-matrix-light text-sm mb-8">
          Choose your preferred language
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