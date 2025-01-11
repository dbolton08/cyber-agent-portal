import React from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Terminal } from 'lucide-react';

const Console = () => {
  return (
    <div className="min-h-screen bg-cyber-grid overflow-hidden">
      <MatrixRain />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-transparent" />
      </div>
      
      <TopNav />
      <Sidebar />
      
      <main className="pt-24 pb-16 px-4 md:ml-0 md:mr-64 relative z-10">
        <div className="container mx-auto">
          <div className="cyber-panel p-6 mb-8">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 mr-2" />
              <GlitchText text="MATRIX CONSOLE" className="text-2xl" />
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center text-matrix-green">
                <span className="mr-2">></span>
                <span className="animate-pulse">_</span>
              </div>
              {/* Add more console content here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Console;