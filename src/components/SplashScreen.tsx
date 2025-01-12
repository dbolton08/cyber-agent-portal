import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { playSound } from "@/utils/soundEffects";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const { translations } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setShowSplash(false), 500);
          return 100;
        }
        const newProgress = Math.min(oldProgress + 10, 100);
        return newProgress;
      });
    }, 300);

    playSound('startup');

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 bg-cyber-dark z-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-matrix-green animate-cyber-pulse cyber-text tracking-wider">
            MATRIX ORACLE
          </h1>
          <p className="text-matrix-light text-lg md:text-xl animate-cyber-pulse">
            {translations.system.decryptingData}
          </p>
        </div>

        <div className="space-y-4">
          <Progress 
            value={progress} 
            className="h-2 bg-matrix-green/20"
          />
          <div className="text-matrix-green text-sm font-mono">
            {`System Loading... ${progress}%`}
          </div>
        </div>

        <div className="mt-8 space-y-2 text-sm text-matrix-green/70 font-mono">
          {progress > 20 && <div>Initializing neural network...</div>}
          {progress > 40 && <div>Establishing secure connection...</div>}
          {progress > 60 && <div>Loading quantum processors...</div>}
          {progress > 80 && <div>Calibrating AI systems...</div>}
          {progress === 100 && <div>Access granted. Welcome to the Matrix.</div>}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;