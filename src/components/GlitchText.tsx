import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block cyber-text">
        {text}
        <span className="absolute top-0 left-0 -ml-[2px] text-matrix-light opacity-70 animate-glitch-1">
          {text}
        </span>
        <span className="absolute top-0 left-0 ml-[2px] text-matrix-accent opacity-70 animate-glitch-2">
          {text}
        </span>
      </span>
    </div>
  );
};

export default GlitchText;